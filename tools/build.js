const showdown = require("showdown");
const fs = require("fs");
const path = require("path");

const srcPath = __dirname;
const outputFilePath = path.join(srcPath, "..", "projects", "htmlString.json");
console.log(outputFilePath);

const converter = new showdown.Converter();

// let text = '# hello, markdown!';
// let html = converter.makeHtml(text);
// console.log(html);


// fs.writeFile(outputFilePath, )

