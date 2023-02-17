module.exports = {
  "**/*": "prettier --write --ignore-unknown",
  "**/*.{ts,tsx}": "tsc-files --noEmit",
};
