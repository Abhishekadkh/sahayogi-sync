import { useState } from "react";
import Navbar from "../components/Navbar";
import {
  UploadCloud,
  CheckCircle,
  AlertCircle,
  Users,
  Share2,
  CloudRain,
  Activity,
} from "lucide-react";
import Plot from "react-plotly.js";

// Constant for API Base URL
const API_BASE_URL = "http://localhost:3001/api";

export default function Dashboard() {
  const [householdsFile, setHouseholdsFile] = useState<File | null>(null);
  const [edgesFile, setEdgesFile] = useState<File | null>(null);
  const [floodFile, setFloodFile] = useState<File | null>(null);

  const [uploading, setUploading] = useState(false);
  const [graphLoading, setGraphLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  // Table Data
  const [allocations, setAllocations] = useState<any[]>([]);
  const [graphData, setGraphData] = useState<any>(null);

  const handleFileChange =
    (setter: React.Dispatch<React.SetStateAction<File | null>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        setter(e.target.files[0]);
        setMessage(null);
      }
    };

  const handleUpload = async () => {
    if (!householdsFile || !edgesFile || !floodFile) {
      alert("Please select all three files.");
      return;
    }

    setUploading(true);
    setAllocations([]);
    setGraphData(null);
    setMessage(null);

    const formData = new FormData();
    formData.append("households", householdsFile);
    formData.append("edges", edgesFile);
    formData.append("flood", floodFile);

    try {
      const response = await fetch(`${API_BASE_URL}/allocate/allocate-file`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        const dataToDisplay = result.allocations || result;
        setAllocations(Array.isArray(dataToDisplay) ? dataToDisplay : []);
        setMessage({ type: "success", text: "Simulation Complete!" });
      } else {
        setMessage({
          type: "error",
          text: "Simulation failed. Check console.",
        });
      }
    } catch (error) {
      console.error(error);
      setMessage({ type: "error", text: "Server connection failed." });
    } finally {
      setUploading(false);
    }

    setUploading(false);
  };

  const handleVisualize = async () => {
    if (allocations.length === 0) return;

    setGraphLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/visualize`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(allocations),
      });

      if (response.ok) {
        setGraphData(await response.json());
      } else {
        alert("Failed to generate graph.");
      }
    } catch (error) {
      console.error("Graph Error:", error);
    } finally {
      setGraphLoading(false);
    }
  };

  const getTableHeaders = () =>
    allocations.length > 0 ? Object.keys(allocations[0]) : [];

  return (
    <div className="min-h-screen bg-brand-bg relative overflow-hidden">
      <Navbar />

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-primary/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        {/* INPUT SECTION */}
        <div className="bg-brand-surface/80 backdrop-blur-xl rounded-2xl shadow-glass border border-white/10 p-8">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-brand-text">
              Run Disaster Allocation AI
            </h1>
            <p className="text-brand-muted mt-2">
              Upload datasets to generate relief plan.
            </p>
          </div>

          {/* INPUT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <FileUploadBox
              icon={<Users />}
              title="1. Households"
              file={householdsFile}
              id="households"
              onChange={handleFileChange(setHouseholdsFile)}
              color="brand-primary"
            />
            <FileUploadBox
              icon={<Share2 />}
              title="2. Edges"
              file={edgesFile}
              id="edges"
              onChange={handleFileChange(setEdgesFile)}
              color="brand-secondary"
            />
            <FileUploadBox
              icon={<CloudRain />}
              title="3. Flood Data"
              file={floodFile}
              id="flood"
              onChange={handleFileChange(setFloodFile)}
              color="brand-accent"
            />
          </div>

          <button
            onClick={handleUpload}
            disabled={!householdsFile || !edgesFile || !floodFile || uploading}
            className={`w-full py-4 rounded-xl text-white font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] ${
              uploading
                ? "bg-gray-600"
                : "bg-gradient-to-r from-brand-primary to-brand-secondary"
            }`}
          >
            {uploading ? "Processing..." : "Run Full Simulation"}{" "}
            <UploadCloud className={uploading ? "animate-bounce" : ""} />
          </button>

          {message && (
            <div
              className={`mt-6 p-4 rounded-lg flex items-center gap-3 ${
                message.type === "success"
                  ? "bg-green-50 text-green-800"
                  : "bg-red-50 text-red-800"
              }`}
            >
              {message.type === "success" ? (
                <CheckCircle size={20} />
              ) : (
                <AlertCircle size={20} />
              )}
              <span className="font-medium">{message.text}</span>
            </div>
          )}
        </div>

        {/* RESULTS & GRAPH */}
        {allocations.length > 0 && (
          <div className="mt-10 bg-brand-surface/80 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden animate-fade-in">
            {/* ALLOCATION TABLE */}
            <div className="px-6 py-4 border-b border-white/10 bg-brand-bg/50 flex justify-between items-center">
              <h2 className="text-xl font-bold text-brand-text">
                Allocation Results
              </h2>
              <span className="text-sm bg-brand-primary/20 text-brand-primary py-1 px-3 rounded-full font-medium border border-brand-primary/30">
                Total Rows: {allocations.length}
              </span>
            </div>

            <div className="overflow-x-auto max-h-[500px]">
              <table className="min-w-full divide-y divide-white/10">
                <thead className="bg-brand-bg/50 sticky top-0 z-10">
                  <tr>
                    {getTableHeaders().map((header) => (
                      <th
                        key={header}
                        className="px-6 py-3 text-left text-xs font-bold text-brand-muted uppercase tracking-wider border-b border-white/10 bg-brand-bg/50"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-brand-surface/30 divide-y divide-white/5">
                  {allocations.map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className="hover:bg-white/5 transition-all duration-200"
                    >
                      {getTableHeaders().map((colKey) => (
                        <td
                          key={`${rowIndex}-${colKey}`}
                          className="px-6 py-4 whitespace-nowrap text-sm text-brand-text"
                        >
                          {typeof row[colKey] === "object"
                            ? JSON.stringify(row[colKey])
                            : String(row[colKey])}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* GRAPH SECTION */}
            <div className="p-6 bg-brand-bg/50 border-t border-white/10 flex flex-col items-center">
              {!graphData ? (
                <button
                  onClick={handleVisualize}
                  disabled={graphLoading}
                  className="flex items-center gap-2 bg-gradient-to-r from-brand-secondary to-brand-accent text-white font-bold py-3 px-8 rounded-xl"
                >
                  {graphLoading ? (
                    "Generating..."
                  ) : (
                    <>
                      <Activity /> Visualize Network Graph
                    </>
                  )}
                </button>
              ) : (
                <div className="w-full">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-brand-text flex items-center gap-2">
                      <Activity className="text-brand-secondary" /> Network
                      Visualization
                    </h3>
                    <button
                      onClick={() => setGraphData(null)}
                      className="text-red-400 text-sm hover:text-white hover:bg-white/5 border border-transparent rounded-full px-4 py-2 font-medium transition-all duration-300"
                    >
                      Close Graph
                    </button>
                  </div>

                  <div className="w-full border border-white/10 rounded-xl overflow-hidden bg-brand-surface/50">
                    <Plot
                      data={graphData.data}
                      layout={{
                        ...graphData.layout,
                        autosize: true,
                        margin: { l: 50, r: 50, b: 100, t: 50, pad: 10 },
                        paper_bgcolor: "rgba(15,15,22,0.8)",
                        plot_bgcolor: "rgba(15,15,22,0.8)",
                        font: { color: "#e2e8f0", size: 12 },
                        xaxis: {
                          ...graphData.layout?.xaxis,
                          automargin: true, // Automatically adjust for labels
                          tickfont: { color: "#e2e8f0" },
                        },
                        yaxis: {
                          ...graphData.layout?.yaxis,
                          automargin: true,
                          tickfont: { color: "#e2e8f0" },
                        },
                      }}
                      useResizeHandler={true}
                      style={{ width: "100%", height: "730px" }} // Changed width to 100%
                      config={{ responsive: true }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Sub-component for cleaner code
function FileUploadBox({ icon, title, file, id, onChange, color }: any) {
  return (
    <div
      className={`border-2 border-dashed border-brand-primary/30 bg-brand-primary/5 rounded-xl p-6 flex flex-col items-center`}
    >
      <div className={`text-brand-primary mb-3`}>{icon}</div>
      <h3 className="font-semibold text-brand-text">{title}</h3>
      <input
        type="file"
        id={`file-${id}`}
        className="hidden"
        onChange={onChange}
      />
      <label
        htmlFor={`file-${id}`}
        className="cursor-pointer px-4 py-2 bg-brand-surface/50 text-brand-primary border border-white/10 rounded-lg text-sm w-full truncate mt-2"
      >
        {file ? file.name : "Select File"}
      </label>
    </div>
  );
}
