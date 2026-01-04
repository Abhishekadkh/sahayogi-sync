
---

# 🌊🤝 Sahayogi Sync

**AI-powered, graph-based disaster resource allocation system**  
Helping communities coordinate and share essential resources fairly during crises.

---

## 🧠 Problem Statement

During disasters such as floods, communities face:
- Uneven distribution of food, water, shelter, and medicine
- Lack of coordination between households
- No transparent or explainable allocation process

Relief systems are often centralized and slow, while **local social networks already exist** — but are underutilized.

**Sahayogi Sync** leverages **social ties between households** and **AI-driven allocation logic** to enable **community-level, fair, and explainable resource sharing**.

---

## 💡 Solution Overview

Sahayogi Sync models a village as a **graph**:
- **Nodes** → Households  
- **Edges** → Social connections with `tie_strength`  
- **Node attributes** → Vulnerability, available resources, disaster impact  

An AI allocator:
- Identifies affected households  
- Analyzes neighbors with surplus resources  
- Allocates resources based on **tie strength, need, and availability**  
- Produces **transparent, explainable allocation plans**

---

## 🧱 System Architecture

```

Frontend (React + TS + Tailwind)
│
▼
Backend API (Express.js)
│
▼
AI Service (FastAPI)
│
▼
ML / Graph Engine (NetworkX + Pandas)

```

- **Express.js** acts as the main backend API
- **FastAPI** handles AI/ML computation and heavy data processing
- Clean separation between UI, backend logic, and ML intelligence

---

## 🛠️ Tech Stack

### Frontend
- **React**
- **TypeScript**
- **TailwindCSS**
- Interactive tables and network visualizations

### Backend
- **Express.js** (Node.js)
- REST API orchestration
- File upload & request handling

### AI / ML Layer
- **FastAPI**
- **Python**
- **NetworkX** – graph modeling
- **Pandas / NumPy** – data processing
- Heuristic-based allocation engine (extensible to GNNs / RL)

---

## 📂 Project Structure

```

```

---

## ⚙️ Allocation Logic (AI Core)

For each affected household:
1. Identify neighboring households
2. Sort neighbors by **tie_strength**
3. Check resource deficits:
   - Food
   - Water
   - Shelter
   - Medicine
4. Allocate from the strongest feasible neighbor
5. Update donor resources dynamically
6. Generate explainable allocation output

✔️ Deterministic  
✔️ Transparent  
✔️ Community-centric  
✔️ Extendable to ML models (GNN / RL)

---

## 📤 API Flow (FastAPI)

**Endpoint**
```

POST /allocate/

````

**Inputs**
- `households.csv`
- `edges.csv`
- `flood_scenario.json`

**Output**
```json
{
  "status": "success",
  "allocations": [
    {
      "to": 12,
      "food_allocated": 1,
      "food_from": 8,
      "food_tie_strength": 0.82,
      ...
    }
  ]
}
````

---

## 🌍 Social Impact

* Encourages **local cooperation**
* Reduces dependency on centralized relief
* Makes allocation **auditable and explainable**
* Designed with **Nepali villages** in mind, but globally adaptable

---

## 🔧 Ongoing Improvements & Future Enhancements

Sahayogi Sync is designed as a **living system**, not a static prototype.  
Several enhancements are actively planned to strengthen realism, scalability, and intelligence:

### 🎨 Frontend Enhancements
- Improved interactive network visualization (zoom, hover, donor–receiver highlighting)
- Scenario simulation controls (toggle disaster intensity, affected households)
- Fairness and coverage metrics dashboards
- Accessibility-focused UI for low-connectivity and mobile-first usage

### ⚙️ Backend Enhancements
- Unified API gateway for Express.js ↔ FastAPI communication
- Persistent storage for households, scenarios, and allocations
- Better error handling and request validation
- Support for multi-scenario and multi-village analysis

### 🧠 AI / ML Enhancements
- Graph Neural Networks (GNNs) for learning vulnerability and need propagation
- Reinforcement Learning to optimize long-term allocation fairness
- Explainability modules to justify why a household received or donated resources
- Bias and fairness audits to ensure ethical allocation

### 🌍 Real-World Readiness
- Integration with real disaster datasets
- Offline-first data ingestion workflows
- SMS / low-bandwidth communication outputs
- Localization for regional languages and contexts

> These enhancements aim to evolve Sahayogi Sync from a **functional MVP** into a **scalable, ethical, and intelligent disaster-response platform**.

---

## 👤 Team

**Abhishek Adhikari**
AI / Backend / System Design
GitHub: [https://github.com/Abhishekadkh](https://github.com/Abhishekadkh)

**Vansh Adhikari**
Frontend / Backend 
GitHub: [https://github.com/codesorcerervansh](https://github.com/codesorcerervansh)

**Ashim Dangal**
Frontend
GitHub: 
[https://github.com/ashimmdangal](https://github.com/ashimmdangal)


---

## 🏁 Final Note

> *Sahayogi Sync is not just an algorithm — it is a digital reflection of community trust, cooperation, and resilience.*

