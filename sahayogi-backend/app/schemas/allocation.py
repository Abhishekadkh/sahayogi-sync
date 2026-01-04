from pydantic import BaseModel
from typing import List, Dict, Optional

class AllocationRequest(BaseModel):
    # Not used for files, kept for future JSON requests
    households: Optional[List[Dict]] = None
    edges: Optional[List[Dict]] = None
    flood_scenario: Optional[Dict] = None

class AllocationResponse(BaseModel):
    status: str
    allocations: List[Dict]
    message: Optional[str] = None
