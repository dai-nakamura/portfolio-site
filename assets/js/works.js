async function loadWorks() {
const res = await fetch(new URL("./data/works.json", import.meta.url));
const works = await res.json();

  const container = document.querySelector(".works-container");

  works.forEach(work => {
    const card = document.createElement("a");
    card.className = "work-card";
   card.href = new URL(`../${work.url}`, import.meta.url);


const imgUrl = new URL(`../${work.image}`, import.meta.url);

card.innerHTML = `
  <img src="${imgUrl}" alt="${work.title}">
  <h3>${work.title}</h3>
  <p>${work.description}</p>
`;

    container.appendChild(card);
  });
}

loadWorks();
