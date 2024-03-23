//Author: Lucas Metcalf
//ISU Netid : lmetcalf@iastate.edu
//Date : Feb 27, 2024

fetch("./data.json")
    .then(response => response.json())
    .then(myCards => loadCards(myCards));

function loadCards(myCards) {
    var CardCard = document.getElementById("col");

    for (var i = 0; i < myCards.cards.length; i++) {
        let name = myCards.cards[i].name;
        let cost = myCards.cards[i].cost;
        let power = myCards.cards[i].power;
        let path = myCards.cards[i].path;
        let ability = myCards.cards[i].ability;

        let AddCardCard = document.createElement("div");
        AddCardCard.classList.add("col");

        AddCardCard.innerHTML = `
        <div class="card shadow-sm">
            <img src=${path} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${name}, ${cost}-${power}</h5>
                <p class="card-text">${ability}</p>
            </div>
        </div>
        `;
        CardCard.appendChild(AddCardCard);
    }
}
