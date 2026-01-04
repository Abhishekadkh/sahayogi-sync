"""
ml-python/src/allocator.py

Purpose:
- Heuristic-based AI allocation of resources from neighbors to affected households
"""

import pandas as pd

def allocate_resources(G):
    """
    Allocate resources (food, water, shelter, medicine) from neighbors to affected households
    using a tie_strength heuristic.

    Args:
        G (networkx.Graph): Graph of households and social ties

    Returns:
        alloc_df (pd.DataFrame): Allocation plan with columns for each resource:
            - '<resource>_allocated': 1 if allocated, 0 if not
            - '<resource>_from': donor household ID
            - '<resource>_tie_strength': tie_strength of donor
            - 'to': recipient household ID
    """
    allocation_plan = []

    resources = ['food', 'water', 'shelter', 'medicine']
    desired_stock = {'food': 2, 'water': 2, 'shelter': 1, 'medicine': 1}

    for node in G.nodes():
        node_data = G.nodes[node]
        if node_data['affected'] == 0:
            continue

        neighbors = list(G.neighbors(node))
        neighbors_sorted = sorted(neighbors, key=lambda n: G[node][n]['tie_strength'], reverse=True)

        allocation = {'to': node}

        allocated_any = False 

        for r in resources:
            res_col = f'resources_{r}'
            need_amount = max(0, desired_stock[r] - node_data[res_col])
            allocation[f'{r}_allocated'] = 0
            allocation[f'{r}_from'] = None
            allocation[f'{r}_tie_strength'] = None

            if need_amount == 0:
                continue

            for neighbor in neighbors_sorted:
                neighbor_data = G.nodes[neighbor]
                if neighbor_data[res_col] > 0:
                    allocation[f'{r}_allocated'] = 1
                    allocation[f'{r}_from'] = neighbor
                    allocation[f'{r}_tie_strength'] = G[node][neighbor]['tie_strength']
                    G.nodes[neighbor][res_col] -= 1
                    allocated_any = True
                    break

        if allocated_any:  
            allocation_plan.append(allocation)

    alloc_df = pd.DataFrame(allocation_plan)
    return alloc_df
