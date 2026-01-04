import pandas as pd
import json
from ml_python.src.data_loader import load_data
from ml_python.src.allocator import allocate_resources
from fastapi import UploadFile

async def allocate_from_files(households_file: UploadFile, edges_file: UploadFile, flood_file: UploadFile):
    """
    Read CSV/JSON files, build graph, and run allocator.
    """

    # Read CSV/JSON into pandas/data
    households_df = pd.read_csv(households_file.file)
    edges_df = pd.read_csv(edges_file.file)
    flood_dict = json.load(flood_file.file)

    # Load data into graph
    households_df, edges_df, flood_dict, G = load_data(
        households_df=households_df,
        edges_df=edges_df,
        flood_dict=flood_dict
    )

    # Run allocator
    alloc_df = allocate_resources(G)

    # Replace NaN / inf values with None for JSON serialization
    alloc_df = alloc_df.where(pd.notnull(alloc_df), None)
    for col in alloc_df.columns:
        if pd.api.types.is_numeric_dtype(alloc_df[col]):
            alloc_df[col] = alloc_df[col].apply(lambda x: None if pd.isna(x) or x in [float('inf'), float('-inf')] else x)

    return {
        "status": "success",
        "allocations": alloc_df.to_dict(orient="records"),
        "message": "Allocation successful"
    }
