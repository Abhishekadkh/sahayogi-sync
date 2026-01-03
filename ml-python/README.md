# 🤝 Sahayogi-Sync ML Module

> **Community-driven Disaster Resource Allocation Engine**  
> A heuristic AI-powered system to efficiently allocate resources among affected households based on social ties and resource availability.

---

## 🚀 Overview

This module contains the **core logic** for Sahayogi-Sync:

- **Household graph modeling** using NetworkX  
- **Heuristic resource allocation** considering affected status, household resources, and tie strengths  
- **Interactive allocation visualization** using Plotly  
- **Modular and extensible code** ready for integration into larger applications

---

## 🏗️ Structure

```

ml-python/
├── src/
│   ├── **init**.py         # Marks folder as a package
│   ├── allocator.py        # Heuristic allocation engine
│   ├── data_loader.py      # Load and preprocess household/edge/flood data
│   ├── visualize.py        # Graph plotting & interactive visualization
│   ├── utils.py            # Helper functions
│   └── demo.py             # Demo scripts

````

---

## 🔍 Features

### 1. Heuristic Allocation
- Prioritizes **affected households** based on their social connections  
- Allocates **food, water, shelter, and medicine** efficiently  
- Considers **tie strengths** to ensure fairness and optimize distribution  

### 2. Network Modeling
- Households represented as **nodes**  
- Social connections represented as **weighted edges**  
- Directed graph shows **resource flow from donor to receiver**  

### 3. Visualization
- Color-coded edges for each resource type:  
  - **Green** → Food  
  - **Blue** → Water  
  - **Orange** → Shelter  
  - **Red** → Medicine  
- Interactive node labels showing household IDs  
- Hovering over edges shows **resource type**  

---

## 📂 Data Structure

### Households CSV
- `id` – Household identifier  
- `resources_food`, `resources_water`, `resources_shelter`, `resources_medicine` – Available stock  
- `affected` – 0 or 1

### Edges CSV
- `from` – Donor household ID  
- `to` – Receiver household ID  
- `tie_strength` – Strength of social connection (0–1)

### Flood Scenario JSON
- Defines which households are affected

---

## ⚡ Example Usage

```python
import pandas as pd
from src.allocator import allocate_resources
from src.visualize import plot_allocation_network

# Load sample data
households_df = pd.read_csv('sample_data/households.csv')
edges_df = pd.read_csv('sample_data/edges.csv')
flood_dict = json.load(open('sample_data/flood_scenario.json'))

# Build allocation plan
alloc_df = allocate_resources(households_df, edges_df, flood_dict)

# Visualize allocation network
fig = plot_allocation_network(alloc_df)
fig.show()
````

---

## 🌟 Why This Module Stands Out

* **AI-driven allocation** ensures fairness and efficiency
* **Graph-based modeling** captures community dynamics
* **Interactive visualization** highlights flows of resources clearly
* Modular and production-ready code

---

## 📖 References

* [NetworkX](https://networkx.org) – Graph modeling
* [Plotly](https://plotly.com/python/) – Interactive visualization
* [Pandas](https://pandas.pydata.org/) – Data manipulation

---

## ✅ License

MIT License – free to use, modify, and extend.
