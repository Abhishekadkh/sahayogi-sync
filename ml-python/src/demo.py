"""
ml-python/src/demo.py

Purpose:
- Run the full end-to-end heuristic allocation demo for Sahayogi Sync
"""

from data_loader import load_data
from allocator import allocate_resources
from utils import coverage, print_summary
from visualize import visualize_graph

households, edges, flood, G = load_data()

alloc_df = allocate_resources(G)

print_summary(alloc_df)
print("Coverage:", coverage(households, alloc_df))

visualize_graph(G, alloc_df)
