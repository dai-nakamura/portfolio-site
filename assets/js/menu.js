// assets/js/components/menu.js

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".menu-container");
  if (!container) return;

  // 仮メニュー（ここはあとでJSON化してもOK）
  const menuItems = [
    {
      name: "森のブレンドコーヒー",
      desc: "浅間山のふもとで焙煎した豆を使った、すっきりとした味わいのハウスブレンド。",
      price: "¥650",
      tag: "Hot",
      image: "assets/image/menu-coffee.jpg"
    },
    {
      name: "キャラメルラテ",
      desc: "ミルク多めのやさしいラテに、とろりとしたキャラメルソースを合わせました。",
      price: "¥720",
      tag: "Signature",
      image: "assets/image/menu-latte.jpg"
    },
    {
      name: "季節のタルト",
      desc: "旬のフルーツをたっぷり使った、パティシエ特製のタルト。",
      price: "¥780",
      tag: "Dessert",
      image: "assets/image/menu-tarte.jpg"
    },
    {
      name: "厚切りバタートースト",
      desc: "香ばしく焼き上げた厚切りパンに、バターをたっぷりとのせて。",
      price: "¥580",
      tag: "Morning",
      image: "assets/image/menu-toast.jpg"
    }
  ];

  menuItems.forEach(item => {
    const card = document.createElement("article");
    card.className = "menu-card";

    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="menu-info">
        <h3>${item.name}</h3>
        <p class="desc">${item.desc}</p>
        <div class="meta">
          <span class="price">${item.price}</span>
          <span class="tag">${item.tag}</span>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
});
