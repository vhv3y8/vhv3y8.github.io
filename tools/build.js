const showdown = require("showdown");
const fs = require("fs");
const path = require("path");

const projectPath = path.join(__dirname, "..", "projects");
const outputFilePath = path.join(__dirname, "..", "projects", "htmlString.json");

const converter = new showdown.Converter();

let directoriesWithIndexMd = fs.readdirSync(projectPath, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name)
  .filter(name => fs.existsSync(path.join(projectPath, name, "index.md")));
let indexMdPaths = directoriesWithIndexMd
  .map(name => path.join(projectPath, name, "index.md"));

let outputObj = [];
directoriesWithIndexMd.forEach(directory => {
  let indexMdStr = fs.readFileSync(path.join(projectPath, directory, "index.md")).toString();
  let html = converter.makeHtml(indexMdStr);

  outputObj.push({
    name: directory,
    html
  })
});

fs.writeFileSync(outputFilePath, JSON.stringify(outputObj, null, 2));
console.log(`Build done! check file at projects/htmlString.json`)