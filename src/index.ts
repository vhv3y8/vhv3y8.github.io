// more 태그 리스트로 history api 이용해서 구현
import "./events";
import "./ui/index";
import info from "../projects/info.json";
import { convertToLowerHyphen } from "./utils";
import { search } from "./search";

console.log("test.");

let projectList: {
  name: string,
  description: string,
  tags: string[],
  startDate: string,
  devMonths: string[],
  website?: {
    name?: string,
    link: string
  },
  icon?: string,
}[] = info.infoArr;

export let projectNameList = projectList.map(obj => obj.name).map(convertToLowerHyphen);

export let projectSearchList: {
  name: string,
  tags: string[],
  searchString: string[]
}[] = projectList.map(obj => {
  let searchString = [...obj.devMonths, obj.name, obj.description];
  // add url name and link if exists
  if (obj.website !== undefined) {
    searchString.push(obj.website.link);
    if (obj.website.name !== undefined) {
      searchString.push(obj.website.name);
    }
  }
  return {
    name: obj.name,
    tags: obj.tags,
    searchString: searchString
  };
});

export let tagList: Set<string> = new Set();
projectList.forEach(obj => {
  obj.tags.forEach(tag => {
    tagList.add(tag);
  });
});

console.log(projectList);
console.log(projectNameList);
console.log(projectSearchList);
console.log(tagList);

// init ui
search();