console.log("---------------------------------------------");
console.log("🚀 SERVER STARTING: SIMULATION + VISUALIZATION READY");
console.log("---------------------------------------------");

const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const axios = require("axios");
const FormData = require("form-data");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json({ limit: "50mb" })); // Increased limit for large graph data

const upload = multer({ dest: "uploads/" });
const multiUpload = upload.fields([
  { name: "households", maxCount: 1 },
  { name: "edges", maxCount: 1 },
  { name: "flood", maxCount: 1 },
]);

app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "Gateway Online" });
});

app.post("/api/login", (req, res) => {
  res.json({ status: "success", token: "fake-jwt" });
});

app.post("/api/allocate/allocate-file", multiUpload, async (req, res) => {
  console.log("✅ HIT: Simulation Request at '/api/allocate/allocate-file'");

  try {
    const files = req.files;

    if (!files || !files["households"] || !files["edges"] || !files["flood"]) {
      console.log("❌ ERROR: Missing Files");
      return res.status(400).json({ error: "Missing required files." });
    }

    console.log("➡️  Forwarding to Python (Port 8000)...");

    // Prepare data for Python
    const form = new FormData();
    // Rename keys to match Python's expectation ('_file' suffix)
    form.append(
      "households_file",
      fs.createReadStream(files["households"][0].path)
    );
    form.append("edges_file", fs.createReadStream(files["edges"][0].path));
    form.append("flood_file", fs.createReadStream(files["flood"][0].path));

    // Send to Python
    const pythonResponse = await axios.post(
      "http://127.0.0.1:8000/allocate/",
      form,
      {
        headers: { ...form.getHeaders() },
      }
    );

    console.log("✅ SUCCESS: Simulation Complete!");

    // Cleanup temp files
    fs.unlinkSync(files["households"][0].path);
    fs.unlinkSync(files["edges"][0].path);
    fs.unlinkSync(files["flood"][0].path);

    res.json(pythonResponse.data);
  } catch (error) {
    console.error("❌ Simulation Error:", error.message);
    if (error.response)
      return res.status(error.response.status).json(error.response.data);
    res.status(500).json({ error: "ML Service unavailable" });
  }
});

app.post("/api/visualize", async (req, res) => {
  console.log("📊 HIT: Visualization Request at '/api/visualize'");
  try {
    const allocationData = req.body;

    // Forward data to Python to get the Plotly JSON
    const pythonResponse = await axios.post(
      "http://127.0.0.1:8000/allocate/visualize",
      allocationData
    );

    console.log("✅ SUCCESS: Graph Generated!");
    res.json(pythonResponse.data);
  } catch (error) {
    console.error("❌ Graph Error:", error.message);
    if (error.response)
      return res.status(error.response.status).json(error.response.data);
    res.status(500).json({ error: "Visualization failed" });
  }
});

app.listen(PORT, () => {
  console.log(`🌐 Node Gateway running on http://localhost:${PORT}`);
});
