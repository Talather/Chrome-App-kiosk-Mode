chrome.app.runtime.onLaunched.addListener(function () {
  chrome.app.window.create("index.html", {
    bounds: {
      width: screen.availWidth,
      height: screen.availHeight
    },
    state: 'fullscreen',
    alwaysOnTop: true
  })
})
