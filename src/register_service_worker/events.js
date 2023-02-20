self.addEventListener("install", (event) => {
  console.log("Install the event!");
});

self.addEventListener("activate", (event) => {
  console.log("Activate the event!");
});
