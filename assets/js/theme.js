// theme.js
export function initTheme(hero, toggleBtn) {
  const hour = new Date().getHours();

  // ✅ 状態フラグを初期化
  let isNight = false;

  // ✅ 初期状態（自動切替）
  if (hour >= 18 || hour < 6) {
    isNight = true;
    hero.classList.add("night");
    toggleBtn.textContent = "☀️ 昼モード";
  }

  // ✅ クリックで切り替え
  toggleBtn.addEventListener("click", () => {
    isNight = !isNight;
    hero.classList.toggle("night", isNight);

    if (isNight) {
      toggleBtn.textContent = "☀️ 昼モード";
    } else {
      toggleBtn.textContent = "🌙 夜モード";
    }
  });
}
