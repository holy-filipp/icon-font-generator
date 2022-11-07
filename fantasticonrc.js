const fs = require('fs');
const path = require("path");

const START_CODEPOINT = 256;

const codepoints = {};
fs.readdirSync("./icons").forEach((file, idx) => {
  codepoints[path.basename(file, '.svg')] = START_CODEPOINT + idx;
});

module.exports = {
  name: 'feather',
  inputDir: "./fixed",
  outputDir: "./dist",
  fontTypes: ["ttf"],
  assetTypes: ["json"],
  fontHeight: 24 * 8,
  formatOptions: {
    json: {
      indent: 2,
    },
  },
  codepoints
};