const showdown = require("showdown");
const fs = require("fs");
const path = require("path");

const str = fs.readFileSync(path.join("..", "projects", "snapshot-tabs", "index.md")).toString();

console.log(str.split("\r\n"));

// let converter = new showdown.Converter();

