// Attach library
require("../").attach();

console.group("group 1")

console.group("group 2");

console.group("test", "group", "joining", "arguments");

console.log("test");

console.log("test", "joining", "arguments");

console.groupEnd();

console.groupEnd();

console.groupEnd();

// Detach library
require("../").detach();
