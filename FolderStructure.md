# Sahayogi Sync – Project Folder Structure

This is the recommended **full-stack folder structure** for the **Sahayog Sync** hackathon project (updated from original "Resilient Kinship").  
It supports:

- **Frontend**: React + TailwindCSS (interactive upload, allocation table, network visualization)
- **Backend**: Node.js + Express (API, file handling, Python ML bridge)
- **Database**: SQLite (MVP lightweight) → easy upgrade to MongoDB/MySQL later
- **ML/AI Core**: Python with NetworkX, PyTorch Geometric, Pandas (GNN + fairness-aware allocation)
- **MVP Demo**: Simulated village (20–30 households), flood scenario, fairness metrics

```

sahayogi-sync/
├── README.md                           # Project overview, one-line pitch, setup guide, tech stack
├── .gitignore                          # Ignore node_modules, pycache, .env, outputs/, etc.
├── package.json                        # Root workspace (optional monorepo with npm/yarn workspaces)
├── requirements.txt                    # Python dependencies (for ML layer)
├── config.yaml                         # Global config: fairness_lambda, resource_types, vuln_weights, etc.
│
├── frontend/                           # React + TailwindCSS (Vite recommended)
│   ├── public/                         # Static assets (logo, favicons)
│   ├── src/
│   │   ├── assets/                     # Images (Nepali village photos, icons)
│   │   ├── components/                 # Reusable UI
│   │   │   ├── UploadForm.tsx          # CSV/JSON dropzone upload
│   │   │   ├── AllocationTable.tsx     # Table showing HH-to-HH shares + fairness/confidence
│   │   │   ├── NetworkViz.tsx          # Interactive graph (Cytoscape.js or react-force-graph)
│   │   │   ├── MetricsDashboard.tsx    # Coverage, mismatch reduction, Gini bars
│   │   │   └── ScenarioSelector.tsx    # Toggle flood/affected households
│   │   ├── pages/
│   │   │   ├── Home.tsx                # Main demo page
│   │   │   └── About.tsx               # Project description + ethics
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css                   # Tailwind base
│   ├── tailwind.config.js              # Custom Nepal-inspired colors (saffron, green)
│   ├── vite.config.ts
│   └── package.json                    # React deps: react-dropzone, recharts, cytoscape, etc.
│
├── backend/                            # Express.js API
│   ├── src/
│   │   ├── routes/
│   │   │   ├── upload.ts               # POST /upload – multer → parse CSV → call Python allocator
│   │   │   ├── allocate.ts             # POST /allocate – trigger allocation + return JSON
│   │   │   ├── viz.ts                  # GET /viz – return graph data for frontend
│   │   │   └── sms.ts                  # GET /export-sms – generate plain-text SMS strings
│   │   ├── controllers/                # Business logic (bridge to Python)
│   │   ├── utils/                      # Fairness helpers, CSV parser
│   │   ├── server.ts                   # Express setup, CORS, middleware
│   │   └── pythonBridge.ts             # Spawn child_process for Python scripts
│   ├── prisma/                         # If using Prisma ORM for SQLite
│   │   └── schema.prisma               # Tables: households, edges, allocations
│   ├── db.sqlite                       # SQLite database file (git-ignored in prod)
│   ├── .env                            # PORT, PYTHON_PATH, etc.
│   └── package.json                    # Express, multer, cors, dotenv, prisma, etc.
│
├── ml-python/                          # Core AI/ML layer (from original PDF spec)
│   ├── src/
│   │   ├── init.py
│   │   ├── data_loader.py              # Load CSV → NetworkX graph → PyG Data object
│   │   ├── model.py                    # GNN definition (GCN/GAT for need prediction)
│   │   ├── allocator.py                # Main script: heuristic/RL optimizer + fairness reward
│   │   ├── utils.py                    # Fairness metrics, explainability helpers
│   │   ├── visualize.py                # Export static PNG/SVG of graph (for fallback)
│   │   └── demo.py                     # Standalone CLI demo (python ml-python/src/demo.py)
│   ├── data/                           # Sample/synthetic data for MVP
│   │   ├── raw/
│   │   │   ├── households.csv          # Columns: id, vulnerability_score, resources_food, etc.
│   │   │   ├── edges.csv               # from_id, to_id, tie_strength
│   │   │   └── flood_scenario.json     # List of affected household_ids
│   │   └── processed/                  # Auto-generated (git-ignored)
│   ├── requirements.txt                # networkx, torch, torch-geometric, pandas, numpy, matplotlib
│   └── README.md                       # How to run Python part independently
│
├── notebooks/                          # Jupyter notebooks for exploration & live demo
│   ├── 01_Data_Generation.ipynb        # Generate synthetic village data
│   ├── 02_Exploratory_Analysis.ipynb   # Viz ties, vuln distribution
│   ├── 03_GNN_Training.ipynb           # Simple training loop (optional for MVP)
│   └── MVP_Demo.ipynb                  # Full end-to-end for judges (upload → allocate → viz)
│
├── outputs/                            # Auto-generated demo artifacts (git-ignored)
│   ├── allocations/                    # CSV/JSON of sharing plans
│   ├── visualizations/                 # PNG/SVG graphs (before/after)
│   └── reports/                        # Fairness summary PDFs/HTML
│
├── docs/                               # Documentation & presentation
│   ├── project_proposal.md             # Updated 2-page doc text (with Sahayog Sync)
│   ├── pitch_deck/                     # Slides (Google Slides/PPT link or markdown)
│   ├── images/                         # Curated Nepali village/community photos for slides
│   └── MVP_Demo_Instructions.md        # Step-by-step for judges
│
└── docker-compose.yml                  # Optional: spin up frontend + backend + sqlite in containers

```

### Key Highlights

- **Separation of Concerns**: Frontend (user-facing demo), Backend (API), ML-Python (heavy computation), Data/Outputs clean.
- **MVP Ready**: Run `ml-python/src/demo.py` for CLI demo **or** full web app for interactive judge experience.
- **Easy Demo**: `notebooks/MVP_Demo.ipynb` + frontend upload = instant allocation table + interactive network graph.
- **Scalability Path**: Add SMS gateway in `backend/src/comms/`, federated learning in `ml-python/src/federated/`, switch DB to MongoDB later.
- **Ethics & Equity**: Fairness logic lives in `ml-python/src/allocator.py` and `config.yaml`.
