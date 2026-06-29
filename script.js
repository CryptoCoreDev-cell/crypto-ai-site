const API_URL = "https://api.sheetbest.com/sheets/8e065c43-d694-489b-af68-536518bdcf17";

async function loadData() {
  const res = await fetch(API_URL);
  const data = await res.json();

  const container = document.getElementById("cards");
  container.innerHTML = "";

  data.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <a href="${item.link}" target="_blank">${item.cta}</a>
    `;

    container.appendChild(card);
  });
}

loadData();
setInterval(loadData, 60000);
