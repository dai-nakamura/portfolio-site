import { initGradient, initThemeToggle } from "./animation.js";
import "./components/works.js";
const header = document.querySelector("#site-header");
header.innerHTML = `
  <div class="navbar navbar--cafe">
    <div class="logo">Portfolio</div>
    <nav>
      <ul class="nav-links">
        <li><a href="index.html">HOME</a></li>
        <li><a href="cafe.html">CAFE</a></li>
        <li><a href="hotel.html">HOTEL</a></li>
      </ul>
    </nav>
    <button id="toggle-mode">🌙</button>
  </div>
`;

const controller = initGradient();                // ① 背景制御を作る
const btn = document.querySelector("#toggle-mode"); // ② ボタンを取る（生成後）
initThemeToggle(btn, controller);                 // ③ クリックで切替
