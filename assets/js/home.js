(function () {
  "use strict";

  var root = document.documentElement;
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealItems = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]"));

  root.classList.add("has-js");

  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
  } else {
    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, {
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.12
    });

    revealItems.forEach(function (item) {
      revealObserver.observe(item);
    });
  }

  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".site-nav a[href^='#']"));
  var sections = navLinks.map(function (link) {
    return document.querySelector(link.getAttribute("href"));
  }).filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    var activeObserver = new IntersectionObserver(function (entries) {
      var visible = entries.filter(function (entry) {
        return entry.isIntersecting;
      }).sort(function (a, b) {
        return b.intersectionRatio - a.intersectionRatio;
      });

      if (!visible.length) return;

      var activeId = "#" + visible[0].target.id;
      navLinks.forEach(function (link) {
        if (link.getAttribute("href") === activeId) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    }, {
      rootMargin: "-22% 0px -58% 0px",
      threshold: [0, 0.2, 0.5]
    });

    sections.forEach(function (section) {
      activeObserver.observe(section);
    });
  }
}());
