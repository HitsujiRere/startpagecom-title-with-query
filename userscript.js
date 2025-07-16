// ==UserScript==
// @name            Startpage.com Title with Query
// @namespace       hitsujirere
// @version         2025-07-16
// @description     Append search query to title at Startpage.com
// @description:ja  Startpage.comのタイトルに検索クエリを追加します
// @author          HitsujiRere
// @match           https://www.startpage.com/*
// @icon            https://www.google.com/s2/favicons?sz=64&domain=greasyfork.org
// @grant           none
// ==/UserScript==

(function () {
  "use strict";

  const searchInput = document.getElementById("q");

  if (searchInput && searchInput.value) {
    document.title = searchInput.value + " - " + document.title;
  }
})();
