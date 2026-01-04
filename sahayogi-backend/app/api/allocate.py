from fastapi import APIRouter, UploadFile, File, HTTPException, Body
from typing import List, Dict, Any
import pandas as pd
import json

# Existing imports
from services.allocator_service import allocate_from_files
from schemas.allocation import AllocationResponse

from ml_python.src.visualize import plot_allocation_network 

router = APIRouter(prefix="/allocate", tags=["Allocation"])

@router.post("/", response_model=AllocationResponse)
async def allocate(
    households_file: UploadFile = File(...),
    edges_file: UploadFile = File(...),
    flood_file: UploadFile = File(...)
):
    """
    Upload CSV/JSON files and return allocation plan.
    """
    result = await allocate_from_files(households_file, edges_file, flood_file)
    return result

@router.post("/visualize")
async def visualize_graph(data: List[Dict[str, Any]] = Body(...)):
    """
    Receives the allocation list (JSON), converts it to a DataFrame, 
    and returns the Plotly Graph JSON.
    """
    try:
        if not data:
            raise HTTPException(status_code=400, detail="No allocation data provided")

        # 1. Convert the list of dictionaries (JSON) to a Pandas DataFrame
        df = pd.DataFrame(data)
        
        # 2. Call your visualization function
        fig = plot_allocation_network(df)
        
        # 3. Convert the Plotly Figure object to JSON
        # 'fig.to_json()' returns a string, so we load it back to a dict 
        # to let FastAPI send it as a proper JSON response.
        graph_json = json.loads(fig.to_json())
        
        return graph_json

    except Exception as e:
        print(f"Visualization Error: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))