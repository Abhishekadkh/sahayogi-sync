"""
ml-python/src/init.py

Purpose:
- Initialize global paths and configuration for Sahayogi Sync MVP
- Load optional config.yaml for heuristic parameters
"""

import os
import yaml

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
RAW_DATA_DIR = os.path.join(BASE_DIR, '../data/raw')
PROCESSED_DATA_DIR = os.path.join(BASE_DIR, '../data/processed')
OUTPUT_DIR = os.path.join(BASE_DIR, '../outputs/allocations')

CONFIG_PATH = os.path.join(BASE_DIR, '../config.yaml')
CONFIG = {}

if os.path.exists(CONFIG_PATH):
    with open(CONFIG_PATH, 'r') as f:
        CONFIG = yaml.safe_load(f)
else:
    CONFIG = {
        'food_weight': 1.0,
        'water_weight': 1.0,
        'shelter_weight': 1.0,
        'fairness_lambda': 0.5
    }

def get_config(key, default=None):
    """
    Get a configuration value from CONFIG dictionary.
    
    Args:
        key (str): Configuration key to look up.
        default: Default value if key is not found.

    Returns:
        Value from CONFIG if key exists, else default.
    """
    return CONFIG.get(key, default)
