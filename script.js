
async function getDogs() {
    try {
        const searchTerm = document.getElementById("search").value.toLowerCase();
        console.log(searchTerm);

        const url = "https://dog.ceo/api/breed/" + searchTerm + "/images";

        const response = await fetch(url);
        const json = await response.json();

        console.log(json);

        const dogHolder = document.getElementById("movieHolder");

        dogHolder.innerHTML = "";

        if (json.status === "error") {
            dogHolder.textContent = "Breed not found! Try another breed.";
            return;
        }

        for (const dog of json.message) {
            const divContainer = document.createElement("div");
            divContainer.classList.add("card");

            const img = document.createElement("img");
            img.src = dog;
            img.alt = searchTerm;
            img.width = 200;
            img.length = 300;

            const card = document.createElement("div");
            card.classList.add("container");

            const titleHeader = document.createElement("h3");
            titleHeader.textContent = searchTerm;

            card.appendChild(titleHeader);
            divContainer.appendChild(img);
            divContainer.appendChild(card);

            dogHolder.appendChild(divContainer);
        }
    } catch (error) {
        console.log("Error fetching dogs:", error);
    }
}
