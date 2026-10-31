
(function () {
  "use strict";

  const WF = window.WORLD_FIND;

  if (!WF || !WF.pages || !WF.router) {
    console.error("WORLD FIND: Core or Page Catalog is missing.");
    return;
  }

  function createPageView(page) {
    const container = document.createElement("div");
    container.style.cssText =
      "padding:24px;color:white;font-family:Arial,sans-serif;";

    const title = document.createElement("h2");
    title.textContent = page.title || page.id;

    const section = document.createElement("p");
    section.textContent = "Раздел: " + page.section;

    const status = document.createElement("p");
    status.textContent = "Статус: запланировано";

    const route = document.createElement("small");
    route.textContent = "WORLD FIND · " + page.route;

    container.append(title, section, status, route);

    return container;
  }

  WF.pages.all().forEach(function (page) {
    WF.router.register(page.route, function (outlet) {
      if (!outlet) return;
      outlet.replaceChildren(createPageView(page));
    });
  });

  WF.navigation = Object.freeze({
    open: function (idOrRoute) {
      const page =
        WF.pages.get(idOrRoute) ||
        WF.pages.getByRoute(idOrRoute);

      if (!page) return false;

      WF.router.navigate(page.route);
      return true;
    },

    openSection: function (sectionId) {
      WF.router.navigate("/" + sectionId);
    },

    getPage: function (id) {
      return WF.pages.get(id);
    },

    getAllPages: function () {
      return WF.pages.all();
    }
  });

  console.log(
    "WORLD FIND Integration loaded:",
    WF.pages.count(),
    "pages registered"
  );
  })();
