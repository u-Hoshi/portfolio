module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1, // Lighthouse の試行回数
      startServerCommand: "yarn dev",
      url: ["http://localhost:3000/"],
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
}
