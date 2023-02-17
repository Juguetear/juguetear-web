const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

module.exports = {
  "**/*": "prettier --write --ignore-unknown",
  "*.{js,jsx,ts,tsx}": [buildEslintCommand],
  "**/*.{ts,tsx}": "tsc-files --noEmit",
};
