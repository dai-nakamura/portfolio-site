async function loadWorks() {
  const res = await fetch("/assets/data/works.json");
  const works = await res.json();

  const container = document.querySelector(".works-container");

  works.forEach(work => {
    const card = document.createElement("a");
    card.className = "work-card";
    card.href = work.url;

    card.innerHTML = `
      <img src="${work.image}" alt="${work.title}">
      <h3>${work.title}</h3>
      <p>${work.description}</p>
    `;

    container.appendChild(card);
  });
}

loadWorks();
