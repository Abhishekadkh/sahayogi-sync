"""
ml-python/src/streamlit_app.py

Streamlit MVP for Sahayogi-Sync
"""

import streamlit as st
import pandas as pd
import json

from data_loader import load_data
from allocator import allocate_resources
from visualize import plot_allocation_network

# ---------------------------
# Page Config
# ---------------------------
st.set_page_config(
    page_title="Sahayogi Sync",
    layout="wide"
)

st.title("🤝 Sahayogi Sync")
st.caption("Community-driven disaster resource allocation")

# ---------------------------
# Sidebar: Data Upload
# ---------------------------
st.sidebar.header("📂 Upload Data")

households_file = st.sidebar.file_uploader("Upload households.csv", type=["csv"])
edges_file = st.sidebar.file_uploader("Upload edges.csv", type=["csv"])
flood_file = st.sidebar.file_uploader("Upload flood_scenario.json", type=["json"])

use_sample = st.sidebar.checkbox("Use sample data", value=True)

# ---------------------------
# Load Data
# ---------------------------
if use_sample:
    households_df, edges_df, flood_dict, G = load_data()
    st.success("Loaded sample data")
else:
    if households_file and edges_file and flood_file:
        households_df = pd.read_csv(households_file)
        edges_df = pd.read_csv(edges_file)
        flood_dict = json.load(flood_file)

        households_df, edges_df, flood_dict, G = load_data(
            households_df=households_df,
            edges_df=edges_df,
            flood_dict=flood_dict
        )
        st.success("User data loaded successfully")
    else:
        st.warning("Upload all files or enable sample data")
        st.stop()

# ---------------------------
# Show Raw Data
# ---------------------------
with st.expander("📊 View Raw Data"):
    st.subheader("Households")
    st.dataframe(households_df)

    st.subheader("Edges")
    st.dataframe(edges_df)

    st.subheader("Flood Scenario")
    st.json(flood_dict)

# ---------------------------
# Heuristic Allocation
# ---------------------------
st.header("🚑 Resource Allocation")

alloc_df = allocate_resources(G)

if len(alloc_df) == 0:
    st.warning("No allocations possible with current data.")
else:
    st.success(f"Allocated resources to {alloc_df['to'].nunique()} affected households")

    st.subheader("📦 Allocation Table")
    st.dataframe(alloc_df)

# ---------------------------
# Graph Summary
# ---------------------------
st.header("🌐 Network Summary")

col1, col2, col3 = st.columns(3)
with col1:
    st.metric("Total Households", G.number_of_nodes())
with col2:
    st.metric("Social Ties", G.number_of_edges())
with col3:
    st.metric("Affected Households", households_df["affected"].sum())

# ---------------------------
# Allocation Network Graph
# ---------------------------
st.header("📈 Allocation Network Graph")

fig = plot_allocation_network(alloc_df)
st.plotly_chart(fig, use_container_width=True)

st.info(
    "Click the Plotly icon on top-right of the graph to interact with it in a full webpage.\n"
    "This allows zooming, panning, and hover details."
)
