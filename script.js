define("converter", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // import showdown from "showdown";
    const showdown = require("showdown");
    let converter = new showdown.Converter();
    let text = '# hello, markdown!';
    let html = converter.makeHtml(text);
    console.log(html);
    exports.default = "test";
});
define("utils", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.calcProjectName = exports.openPageModal = void 0;
    function openPageModal(projectName) {
    }
    exports.openPageModal = openPageModal;
    function calcProjectName(name) {
        return name.toLowerCase().split(" ").join("-");
    }
    exports.calcProjectName = calcProjectName;
    function createProjectDiv(name) {
        let elem = document.createElement("div");
        return elem;
    }
});
define("index", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    document.addEventListener("DOMContentLoaded", () => {
        console.log("Hi");
    });
});
