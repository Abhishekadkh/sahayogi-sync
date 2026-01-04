"""
ml-python/src/utils.py

Purpose:
- Helper functions for fairness and coverage metrics
"""

def coverage(households, alloc_df):
    """
    Calculate coverage: fraction of affected households that received resources.

    Args:
        households (pd.DataFrame): Household dataframe with 'affected' column
        alloc_df (pd.DataFrame): Allocation dataframe with 'to' column

    Returns:
        float: coverage ratio between 0 and 1
    """
    affected = households[households['affected'] == 1]
    helped = alloc_df['to'].unique()
    return len(helped) / len(affected)

def print_summary(alloc_df):
    """
    Print summary statistics about the allocation.

    Args:
        alloc_df (pd.DataFrame): Allocation dataframe
    """
    print("Total allocations:", len(alloc_df))
    print("Total households helped:", len(alloc_df['to'].unique()))
