"use strict";

// import from named export
import {name, age} from "./person.js";


// import from default export
import message from "./message.js";


// modules only work with http(s) protocol
// web pages opened with file protocol (file:///) cannot use them

console.log(message());