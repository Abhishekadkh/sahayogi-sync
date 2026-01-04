# Sahayogi Sync – Project Folder Structure (actual workspace)

Top-level files:
- README.md
- FolderStructure.md
- requirements.txt                # Combined Python deps (see above)
- .gitignore

```

sahayogi-backend/
├── index.js                       # Express gateway / file upload + forward to AI service
├── package.json
├── test_households.csv
├── app/
│   ├── api/
│   │   └── allocate.py            # FastAPI router wraps allocator
│   ├── services/
│   │   ├── allocator_service.py   # Reads UploadFile -> calls ml_python allocator
│   │   └── parser.js              # CSV parser for node-side processing
│   ├── ml_python/                 # Python ML service packaged inside backend app
│   │   ├── src/
│   │   │   ├── init.py
│   │   │   ├── allocator.py
│   │   │   ├── data_loader.py
│   │   │   ├── visualize.py
│   │   │   └── streamlit_app.py
│   │   └── README.md
│   └── schemas/
│       └── allocation.py          # Pydantic models
├── services/                       # Node services (e.g., parser, CSV helpers)
└── uploads/                        # Temp uploaded files (runtime)

sahayogi-frontend/
├── index.html
├── package.json
├── README.md
├── eslint.config.js
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Dashboard.tsx
│   │   └── About.tsx
│   ├── components/
│   │   └── Navbar.tsx
│   └── index.css
└── public/

ml-python/
├── requirements.txt                # Module-specific dependencies (mirrors top-level)
├── README.md
├── data/
│   ├── raw/
│   │   ├── households.csv
│   │   ├── edges.csv
│   │   └── flood_scenario.json
│   └── processed/
└── src/
    ├── init.py                     # config loader (`get_config`)
    ├── data_loader.py
    ├── allocator.py                # `allocate_resources`
    ├── visualize.py
    └── utils.py

notebooks/
├── 01_Data_Generation.ipynb
├── 02_Exploratory_Analysis.ipynb
├── 03_GNN_Training.ipynb
├── allocation_graph.ipynb
└── MVP_Demo.ipynb

outputs/
├── allocations/
├── visualizations/
└── reports/


```

Other:
- docker-compose.yml (optional)
- config.yaml (global weights / fairness_lambda)

Notes:
- The top-level [requirements.txt](requirements.txt) now contains dependencies that cover code in:
  - [`ml-python/src/init.py`](ml-python/src/init.py) (reads config via `pyyaml`, see [`get_config`](ml-python/src/init.py)),
  - notebooks (scikit-learn, matplotlib),
  - Streamlit app ([sahayogi-backend/app/ml_python/src/streamlit_app.py](sahayogi-backend/app/ml_python/src/streamlit_app.py)),
  - FastAPI allocator ([sahayogi-backend/app/api/allocate.py](sahayogi-backend/app/api/allocate.py)), and
  - allocator function [`allocate_resources`](ml-python/src/allocator.py).