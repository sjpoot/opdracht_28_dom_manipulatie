const bigFiveButton = Object.values(document.getElementsByClassName("big-five-button"));
const spottedMenu = document.getElementById("spotted-animals-list");
const removeItemButton = document.getElementById("remove-first-item-button");
const removeAllButton = document.getElementById("remove-all-button");

bigFiveButton.forEach(btn => {
    btn.addEventListener("click", function () {
        let animal = btn.innerHTML;
        let newElement = document.createElement("li");
        newElement.classList.add("spotted-animals-list-item");
        newElement.innerHTML = animal;
        spottedMenu.appendChild(newElement);
    })
});

removeItemButton.addEventListener("click", function () {
    let firstAnimal = spottedMenu.getElementsByClassName("spotted-animals-list-item")[0];
    spottedMenu.removeChild(firstAnimal);
});

removeAllButton.addEventListener("click", function () {
    let allAnimals = spottedMenu.getElementsByClassName("spotted-animals-list-item");
    let allAnimalsArray = [].slice.call(allAnimals);
    allAnimalsArray.forEach(all => all.remove());
});

