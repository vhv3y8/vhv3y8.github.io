function u(t){return t.toLowerCase().split(" ").join("-")}function p(t){let e=document.querySelectorAll("section#list article");console.log(`all articles: ${e}`),t==="all"?e.forEach(n=>n.classList.remove("none")):(e.forEach(s=>{s.classList.add("none")}),t.map(s=>s.projectName).forEach(s=>{document.querySelector("section#list").getElementsByClassName(u(s))[0].classList.remove("none")}))}function d(t,e){let n=document.querySelector("span#searchOption"),s=document.querySelector("span#count"),o;t==="all"?o="All":t.tags.length===0?o=`"${t.text}"`:o=`${t.text===""?"":`"${t.text}", `} ${t.tags.join(" or ")}`,n!==null&&(n.textContent=o),s!==null&&(s.textContent=e+"")}let l={tags:[],text:""};function f(t){l.text=t}function b(t){l.tags.includes(t)?l.tags=l.tags.filter(e=>e!==t):l.tags.push(t)}function S(t=l){return g.filter(e=>t.tags.length>0&&t.tags.every(n=>!e.tags.includes(n))?(console.log({projectObj:e,reason:"tags OR"}),!1):e.searchString.some(n=>n.includes(t.text))?!0:(console.log({projectObj:e,reason:"AND text"}),!1)).map(e=>({projectName:e.name}))}function v(){return l}function c(){if(l.tags.length==0&&l.text=="")p("all"),d("all",m.length);else{let t=S();console.log({msg:"result is",result:t}),p(t),d(l,t.length)}}let r=document.querySelector("input#searchInput"),a=document.querySelector("button#goToTop"),y=document.querySelectorAll("button.openModal");window.addEventListener("load",()=>{var t;console.log("hello from events"),r!==null&&r.addEventListener("input",e=>{f(r.value),console.log("now option is"),console.log(v()),c()}),a!==null&&a.addEventListener("click",()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}),y.forEach(e=>{e.addEventListener("click",()=>{var n;history.pushState({projectName:e.dataset.projectname},"",`?projectname=${e.dataset.projectname}`),console.log("hello from more element click event"),document.querySelector("main").classList.add("none"),document.getElementById("modalContainer").classList.remove("none"),(n=document.querySelector(`#modalContainer article.${e.dataset.projectname}`))==null||n.classList.remove("none")})}),(t=document.querySelector("button#testt"))==null||t.addEventListener("click",()=>{history.back()})});window.addEventListener("popstate",t=>{console.log({msg:"pop state event called.",state:t.state})});window.addEventListener("scroll",t=>{a!==null&&(window.oldScroll<window.scrollY&&50<window.scrollY?a.classList.remove("hide"):a.classList.add("hide"),window.oldScroll=window.scrollY)});const w=[{name:"snapshot-tabs",html:`<h2 id="snapshottabs">SnapShot Tabs</h2>
<ul>
<li>test</li>
</ul>
<ol>
<li>hi</li>
<li>bye</li>
</ol>
<p><img src="/projects/snapshot-tabs/snapshottabs.png" alt="tt" /></p>
<h2 id="snapshottabs-1">SnapShot Tabs</h2>
<ul>
<li>test</li>
</ul>
<ol>
<li>hi</li>
<li>bye</li>
</ol>
<p><img src="/projects/snapshot-tabs/snapshottabs.png" alt="tt" /></p>
<h2 id="snapshottabs-2">SnapShot Tabs</h2>
<ul>
<li>test</li>
</ul>
<ol>
<li>hi</li>
<li>bye</li>
</ol>
<p><img src="/projects/snapshot-tabs/snapshottabs.png" alt="tt" /></p>
<h2 id="snapshottabs-3">SnapShot Tabs</h2>
<ul>
<li>test</li>
</ul>
<ol>
<li>hi</li>
<li>bye</li>
</ol>
<p><img src="/projects/snapshot-tabs/snapshottabs.png" alt="tt" /></p>
<h2 id="snapshottabs-4">SnapShot Tabs</h2>
<ul>
<li>test</li>
</ul>
<ol>
<li>hi</li>
<li>bye</li>
</ol>
<p><img src="/projects/snapshot-tabs/snapshottabs.png" alt="tt" /></p>
<h2 id="snapshottabs-5">SnapShot Tabs</h2>
<ul>
<li>test</li>
</ul>
<ol>
<li>hi</li>
<li>bye</li>
</ol>
<p><img src="/projects/snapshot-tabs/snapshottabs.png" alt="tt" /></p>
<h2 id="snapshottabs-6">SnapShot Tabs</h2>
<ul>
<li>test</li>
</ul>
<ol>
<li>hi</li>
<li>bye</li>
</ol>
<p><img src="/projects/snapshot-tabs/snapshottabs.png" alt="tt" /></p>`},{name:"vhv3y8.github.io",html:`<h2 id="vhv3y8githubio">vhv3y8.github.io</h2>
<ul>
<li>\uAE43\uD5C8\uBE0C \uBE14\uB85C\uADF8\uC785\uB2C8\uB2E4</li>
</ul>`}];function L(t,e){let n=document.createElement("li"),s="false";n.classList.add("searchTag"),n.dataset.color=e,n.dataset.selected=s;let o=document.createElement("span");return o.classList.add("name"),o.textContent=t,n.appendChild(o),n.addEventListener("click",()=>{s==="false"?(s="true",n.style.backgroundColor="#ffa700"):(n.style.backgroundColor="#d9d9d9",s="false"),b(t),c()}),n}window.addEventListener("load",()=>{let t=document.querySelector("ul#tags");h.forEach(n=>{t.appendChild(L(n))});let e=document.querySelector("#modalContainer");w.forEach(n=>{e.getElementsByClassName(n.name)[0].insertAdjacentHTML("afterbegin",n.html)})});const E=[{name:"Snapshot Tabs",description:"\uD788\uC2A4\uD1A0\uB9AC\uC758 \uD655\uC7A5 \uB290\uB08C\uC73C\uB85C \uD0ED\uB4E4\uC744 \uD55C\uAEBC\uBC88\uC5D0 \uC800\uC7A5\uD558\uAC8C \uD574\uC8FC\uB294 \uD655\uC7A5\uD504\uB85C\uADF8\uB7A8",tags:["\uD06C\uB86C \uD655\uC7A5\uD504\uB85C\uADF8\uB7A8"],startDate:"2022-04-30T15:00:00.000Z",devMonths:["2022.05"],website:{name:"\uD06C\uB86C \uC6F9 \uC2A4\uD1A0\uC5B4",link:"https://chrome.google.com/webstore/detail/snapshot-tabs/ffmcpchgchdikjmkfjglkhidmjploinc"},icon:"projects/snapshot-tabs/snapshottabs.png"},{name:"vhv3y8.github.io",description:"json \uD30C\uC77C\uC5D0 \uC791\uC131\uD574\uC11C \uBE4C\uB4DC\uD558\uB294 \uD615\uC2DD\uC73C\uB85C \uB9CC\uB4E0 \uD504\uB85C\uC81D\uD2B8 \uBAA8\uC74C \uBE14\uB85C\uADF8",tags:["\uC6F9\uD398\uC774\uC9C0"],startDate:"2022-04-30T15:00:00.000Z",devMonths:["2022.11"],website:{link:"https://vhv3y8.github.io/"}}],T={infoArr:E};console.log("test.");let i=T.infoArr,m=i.map(t=>t.name).map(u),g=i.map(t=>{let e=[...t.devMonths,t.name,t.description];return t.website!==void 0&&(e.push(t.website.link),t.website.name!==void 0&&e.push(t.website.name)),{name:t.name,tags:t.tags,searchString:e}}),h=new Set;i.forEach(t=>{t.tags.forEach(e=>{h.add(e)})});console.log(i);console.log(m);console.log(g);console.log(h);c();
