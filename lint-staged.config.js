module.exports = {
  "**/*.{ts,tsx}": () => "yarn type-check",
  "**/*.{ts,tsx,js,jsx}": (filenames) => `yarn lint . ${filenames.join(" ")}`,
}
