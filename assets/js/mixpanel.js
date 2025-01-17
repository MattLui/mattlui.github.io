mixpanel.init("7a72925a61bd3ba2278e2da6091e3d3c", {
  debug: true,
  track_pageview: true,
  persistence: "localStorage",
});

mixpanel.track("Page Loaded");

// Page Duration
mixpanel.time_event("Page Duration");

window.addEventListener("beforeunload", () => {
  mixpanel.track("Page Duration", {
    page: document.title,
  });
});

// Link Click
document.addEventListener("click", (event) => {
  const target = event.target;

  if (target.tagName === "A") {
    mixpanel.track("Link Clicked", {
      href: target.href,
      link_text: target.textContent.trim(),
      link_target: target.target || "_self",
    });
  }
});
