const csv = require("csv-parser");
const fs = require("fs");

function parseCSV(filePath) {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (data) => {
        // MAPPING: Your CSV Headers -> App Logic
        results.push({
          id: data.id,
          // Since your CSV doesn't have a 'name' column, we generate one
          name: `Household ${data.id}`,

          // Map 'num_members' to 'family_size'
          family_size: parseInt(data.num_members) || 1,

          // KEY METRICS
          vulnerability_score: parseFloat(data.vulnerability_score) || 0,
          disability:
            data.disability_flag === "1" || data.disability_flag === "true",
          marginalized:
            data.marginalized_flag === "1" || data.marginalized_flag === "true",
          elderly_count: parseInt(data.elderly_count) || 0,
          children_count: parseInt(data.children_count) || 0,
        });
      })
      .on("end", () => resolve(results))
      .on("error", (err) => reject(err));
  });
}

module.exports = { parseCSV };
