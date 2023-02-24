self.addEventListener("install", (event) => {
  console.log("Install the event!");
  console.log({ event });
});

self.addEventListener("activate", (event) => {
  console.log("Activate the event!");
  console.log({ event });
});
