function runAllocation(households, edges, resources) {
  const scoredHouseholds = households.map((h) => {
    // Base Score from your CSV (0-1 usually, or 0-10)
    // We assume vulnerability_score is 0.0 to 1.0. If it's 0-10, divide by 10.
    let baseScore = h.vulnerability_score;
    if (baseScore > 1) baseScore = baseScore / 10;

    // Add "Fairness Weights"
    // If they have disability, boost priority by 20%
    if (h.disability) baseScore += 0.2;

    // If they are marginalized, boost by 10%
    if (h.marginalized) baseScore += 0.1;

    // Prioritize families with kids or elderly
    if (h.elderly_count > 0 || h.children_count > 0) baseScore += 0.1;

    // Cap score at 1.0 (or keep it raw if you prefer)
    const finalScore = Math.min(baseScore, 1.0);

    return {
      ...h,
      priorityScore: parseFloat(finalScore.toFixed(2)),
      allocated: "None",
    };
  });

  scoredHouseholds.sort((a, b) => b.priorityScore - a.priorityScore);

  let totalKits = resources.total_kits || 0;
  let servedCount = 0;

  const allocations = scoredHouseholds.map((h) => {
    if (totalKits > 0) {
      h.allocated = "Standard Relief Kit";
      totalKits--;
      servedCount++;
    }
    return h;
  });

  const metrics = {
    total_households: households.length,
    total_served: servedCount,
    efficiency_percentage: Math.round((servedCount / households.length) * 100),
  };

  return { metrics, allocations };
}

module.exports = { runAllocation };
