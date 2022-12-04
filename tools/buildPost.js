const showdown = require("showdown");
const fs = require("fs");
const path = require("path");
const ejs = require("ejs");
const { info } = require("console");

const projectPath = path.join(__dirname, "..", "projects");
const converter = new showdown.Converter({ noHeaderId: true, tables: true, parseImgDimensions: true, emoji: true });

const infoJsonPath = path.join(projectPath, "info.json");
const infoArr = JSON.parse(fs.readFileSync(infoJsonPath).toString()).infoArr;
console.log("infoArr: ");
console.log(infoArr);


let directoriesWithIndexMd = fs.readdirSync(projectPath, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name)
  .filter(name => fs.existsSync(path.join(projectPath, name, "index.md")));
let indexMdPaths = directoriesWithIndexMd
  .map(name => path.join(projectPath, name, "index.md"));

const templatePath = path.join(projectPath, "postTemplate.ejs");
directoriesWithIndexMd.forEach(directory => {
  let indexMdStr = fs.readFileSync(path.join(projectPath, directory, "index.md")).toString();
  let html = converter.makeHtml(indexMdStr);
  let outputFilePath = path.join(projectPath, directory, "index.html");
  let currInfo = infoArr.filter(info => info.name.toLowerCase().split(" ").join("-") === directory)[0] || {};
  console.log("currInfo: ");
  console.log(currInfo);
  if (info.links !== undefined) {
    console.log("info.links:");
    console.log(info.links);
  }

  ejs.renderFile(templatePath, {
    html: html,
    info: currInfo
  }, (err, str) => {
    console.log(err);
    console.log(str);
    fs.writeFileSync(outputFilePath, str);
    console.log(`Build Done! check file at projects/${directory}/index.html`)
  });
});

// let outputObj = [];
// directoriesWithIndexMd.forEach(directory => {
//   let indexMdStr = fs.readFileSync(path.join(projectPath, directory, "index.md")).toString();
//   let html = converter.makeHtml(indexMdStr);

//   outputObj.push({
//     name: directory,
//     html
//   })
// });

// fs.writeFileSync(outputFilePath, JSON.stringify(outputObj, null, 2));
// console.log(`Build done! check file at projects/htmlString.json`)