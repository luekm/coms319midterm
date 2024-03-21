//Author: Lucas Metcalf
//ISU Netid : lmetcalf@iastate.edu
//Date : Feb 27, 2024

fetch("./data.json")
    .then(response => response.json())
    .then(myGuitars => loadGuitars(myGuitars));

function loadGuitars(myGuitars) {
    var CardGuitar = document.getElementById("col");

    for (var i = 0; i < myGuitars.guitars.length; i++) {
        let make = myGuitars.guitars[i].make;
        console.log(make);
        let model = myGuitars.guitars[i].model;
        let path = myGuitars.guitars[i].path;
        let desc = myGuitars.guitars[i].desc;

        let AddCardGuitar = document.createElement("div");
        AddCardGuitar.classList.add("col");

        AddCardGuitar.innerHTML = `
        <div class="card shadow-sm">
            <img src=${path} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${make} ${model}</h5>
                <p class="card-text">${desc}</p>
            </div>
        </div>
        `;
        CardGuitar.appendChild(AddCardGuitar);
    }
}
