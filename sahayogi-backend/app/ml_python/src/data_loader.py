"""
ml-python/src/data_loader.py

Purpose:
- Load household, edge, and disaster scenario data
- Build a NetworkX graph representing village social network
"""

import pandas as pd
import json
import networkx as nx

def load_data(households_df=None, edges_df=None, flood_dict=None):
    """
    Loads raw CSV and JSON data (or user-provided data) and constructs a NetworkX graph.

    Args:
        households_df (pd.DataFrame, optional): Household data
        edges_df (pd.DataFrame, optional): Social edge data
        flood_dict (dict, optional): Disaster scenario

    Returns:
        households_df (pd.DataFrame)
        edges_df (pd.DataFrame)
        flood_dict (dict)
        G (networkx.Graph)
    """

    if households_df is None:
        households_df = pd.read_csv('../data/raw/households.csv')

    if edges_df is None:
        edges_df = pd.read_csv('../data/raw/edges.csv')

    if flood_dict is None:
        with open('../data/raw/flood_scenario.json') as f:
            flood_dict = json.load(f)

    affected_ids = [h['id'] for h in flood_dict['affected_households']]
    households_df['affected'] = households_df['id'].isin(affected_ids).astype(int)

    G = nx.Graph()

    for _, row in households_df.iterrows():
        G.add_node(row['id'], **row.to_dict())

    for _, row in edges_df.iterrows():
        G.add_edge(
            row['from_id'],
            row['to_id'],
            tie_strength=row['tie_strength']
        )

    return households_df, edges_df, flood_dict, G
