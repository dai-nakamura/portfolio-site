// animation.js

// ==================== 背景アニメーション（時間帯別） ==================== //
export function initGradient() {
  const target = document.querySelector(".hero") ?? document.body;
  let x = 50, y = 50;
  let currentTheme = getCurrentTimeTheme(); // 初期テーマ

  function getCurrentTimeTheme() {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 9) return "morning";
    if (hour >= 9 && hour < 17) return "day";
    if (hour >= 17 && hour < 19) return "evening";
    return "night";
  }

  function getColors(theme) {
    switch (theme) {
      case "morning":
        return ["#FFD580", "#FF9E9E", "#FFF1C1"];
      case "day":
        return ["#E8F0FF", "#F7FFF9", "#FFF4F4"];
      case "evening":
        return ["#FFCC80", "#FFB6C1", "#C5CAE9"];
      case "night":
        return ["#1b2735", "#090a0f", "#0a192f"];
      default:
        return ["#E8F0FF", "#F7FFF9", "#FFF4F4"];
    }
  }

  function updateGradient() {
    const [c1, c2, c3] = getColors(currentTheme);
    target.style.background = `linear-gradient(${x + 90}deg, ${c1}, ${c2}, ${c3})`;
  }

  // 背景角度をマウスで変化
  document.addEventListener("mousemove", (e) => {
    const width = window.innerWidth;
    x = (e.clientX / width) * 100;
    updateGradient();
  });

  updateGradient();

  // テーマを外部から変更できるように関数を返す
  return {
    setTheme: (theme) => {
      currentTheme = theme;
      updateGradient();
    },
    nextTheme: () => {
      const order = ["morning", "day", "evening", "night"];
      let idx = order.indexOf(currentTheme);
      currentTheme = order[(idx + 1) % order.length];
      localStorage.setItem("theme", currentTheme);
      updateGradient();
    },
  };
}

// ==================== 昼夕夜モード切替 ==================== //
export function initThemeToggle(button, gradientController) {
  // localStorageの前回値を復元
  const saved = localStorage.getItem("theme");
  if (saved) {
    gradientController.setTheme(saved);
  }

  // ボタンを押すたびに次の時間帯に進む
  button.addEventListener("click", () => {
    gradientController.nextTheme();
  });
}
