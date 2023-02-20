// version 2.3
console.log("We are a service worker");

try {
  importScripts("events.js");
} catch (e) {
  console.error(e);
}

console.log("After loading the events.js script");
