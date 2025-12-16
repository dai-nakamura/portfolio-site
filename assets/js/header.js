// assets/js/header.js
import { ROOT } from "./config.js";

export function loadHeader(targetEl, pageType = "default") {
  const titles = {
    default: "Portfolio",
    cafe: "Cafe Karui",
    hotel: "Hotel Lumière"
  };

  targetEl.innerHTML = `
    <nav class="navbar navbar--${pageType}">
      <h1 class="logo"><a href="${ROOT}pages/index.html">${titles[pageType]}</a></h1>
      <ul class="nav-links">
        <li><a href="${ROOT}pages/index.html">HOME</a></li>
        <li><a href="${ROOT}pages/cafe.html">CAFE</a></li>
        <li><a href="${ROOT}pages/hotel.html">HOTEL</a></li>
      </ul>
      <button id="toggle-mode">🌙</button>
    </nav>
  `;
}
