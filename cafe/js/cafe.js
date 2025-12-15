// ================================
// cafe.js － カフェページ専用処理
// ================================

// ページ読み込み時に実行
document.addEventListener("DOMContentLoaded", () => {
  loadMenu();
  initBooking();
});// assets/js/components/menu.js
import { DATA } from "../config.js";

export async function loadMenu() {
  const container = document.querySelector(".menu-container");
  if (!container) return;

  try {
    const res = await fetch(DATA.menu);
    if (!res.ok) throw new Error("menu.json が見つかりません");
    const menu = await res.json();

    container.innerHTML = menu
      .map(
        (item) => `
        <div class="menu-card">
          <h3>${item.name}</h3>
          <p>${item.desc}</p>
          <p><strong>¥${item.price}</strong></p>
        </div>`
      )
      .join("");
  } catch (err) {
    container.textContent = "メニューを読み込めませんでした。";
    console.error(err);
  }
}

// -------------------------------
// メニュー読み込み（menu.json）
// -------------------------------
async function loadMenu() {
  const container = document.querySelector(".menu-container");
  if (!container) return;

  try {
    const res = await fetch("../../data/menu.json");
    if (!res.ok) throw new Error("menu.json が読み込めません");
    const menu = await res.json();

    container.innerHTML = menu
      .map(
        (item) => `
        <div class="menu-card">
          <h3>${item.name}</h3>
          <p>${item.desc}</p>
          <p><strong>¥${item.price.toLocaleString()}</strong></p>
        </div>`
      )
      .join("");
  } catch (err) {
    console.error("メニュー読み込み失敗:", err);
    container.textContent = "メニューの読み込みに失敗しました。";
  }
}

// -------------------------------
// 予約フォームのダミー送信処理
// -------------------------------
function initBooking() {
  const form = document.getElementById("booking-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector("[name='name']").value.trim();
    const date = form.querySelector("[name='date']").value;
    const time = form.querySelector("[name='time']").value;
    const size = form.querySelector("[name='size']").value;

    const result = document.getElementById("booking-result");
    if (!name || !date || !time || !size) {
      result.textContent = "すべての項目を入力してください。";
      result.style.color = "red";
      return;
    }

    result.textContent = `${date} ${time} / ${size}名様のご予約を受け付けました。`;
    result.style.color = "green";
    form.reset();
  });
}
