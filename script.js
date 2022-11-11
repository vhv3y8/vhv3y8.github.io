define("utils", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.convertToLowerHyphen = exports.openPageModal = void 0;
    function openPageModal(projectName) {
    }
    exports.openPageModal = openPageModal;
    function convertToLowerHyphen(name) {
        return name.toLowerCase().split(" ").join("-");
    }
    exports.convertToLowerHyphen = convertToLowerHyphen;
    function createProjectDiv(lowerHyphenName) {
        let elem = document.createElement("div");
        return elem;
    }
});
define("index", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // import * as UI from "./ui/index";
    document.addEventListener("DOMContentLoaded", () => {
        console.log("Hi");
    });
});
