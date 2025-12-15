// assets/js/config.js
// ===============================
// 全ページ共通のパス定義
// ===============================

// ✅ ルートパス（Live Server or GitHub Pages用）
export const ROOT = "/rensyuu/";

// ✅ 各ディレクトリのショートカット
export const PATH = {
  css: `${ROOT}assets/css/`,
  js: `${ROOT}assets/js/`,
  data: `${ROOT}assets/data/`,
  img: `${ROOT}assets/img/`,
};

// ✅ JSONなどのデータファイル
export const DATA = {
  works: `${PATH.data}works.json`,
  menu: `${PATH.data}menu.json`,
  rooms: `${PATH.data}rooms.json`,
};

// ✅ 画像の例（今後増やすときにここに追加）
export const IMG = {
  heroCafe: `${PATH.img}hero-cafe.jpg`,
  heroHotel: `${PATH.img}hero-hotel.jpg`,
};
