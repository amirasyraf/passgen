if ("serviceWorker" in navigator) {
  if (navigator.serviceWorker.controller) {
    console.log("Service worker active");
  } else {
    // Register the service worker
    navigator.serviceWorker
      .register("serviceworker.js", {
        scope: "/passgen/"
      })
      .then(function (reg) {
        console.log("Service worker has been registered for scope: " + reg.scope);
      });
  }
}
