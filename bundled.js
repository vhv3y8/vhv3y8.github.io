function u(e){return e.toLowerCase().split(" ").join("-")}let n={tags:[],text:""};function p(e){n.tags.includes(e)?n.tags=n.tags.filter(t=>t!==e):n.tags.push(e)}function g(e){return[{projectName:"vhv3y8.github.io"}]}function d(){return n}function h(e){let t=document.querySelectorAll("section#list article");console.log(`all articles: ${t}`),t.forEach(o=>{o.classList.add("hide")}),e.map(o=>o.projectName).forEach(o=>{var i;(i=document.querySelector(`article.${o}`))==null||i.classList.remove("hide")});let c=document.querySelector("span#searchOption"),r=document.querySelector("span#count"),l=d(),s;l.tags.length===0?s=l.text:s=`"${l.text}" & [${l.tags.join(", ")}] :`,c!==null&&(c.textContent=s),r!==null&&(r.textContent=e.length+"")}let f=Array.from(document.querySelectorAll("li.searchTag")),a=document.querySelector("input#searchInput");window.addEventListener("load",()=>{console.log("hello from events"),f.forEach(e=>{e.classList.add("easeOutBackgroundColor"),e.addEventListener("click",()=>{e.classList.toggle("chromeYellow"),e.dataset.name!==void 0&&(p(e.dataset.name),console.log("now option is"),console.log(d()),h(g()))})}),a!==null&&a.addEventListener("change",()=>{})});window.addEventListener("scroll",e=>{window.oldScroll=window.scrollY});window.addEventListener("DOMContentLoaded",()=>{console.log("Hi")});console.log("test.");console.log(u("Test"));
