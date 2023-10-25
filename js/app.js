let $ = document;
let cardsElem = $.querySelectorAll(".Card_body");
let card_numbers = $.querySelectorAll(".card_number");

// Select the clicked card
cardsElem.forEach((card) => {

  card.addEventListener("click", (event) => {

    card.children[0].classList.add("selected");

    classDeactivation();

    event.target.parentElement.classList.remove("col-1");
    event.target.parentElement.classList.add("col-9");
  });

});

// Minimize other cards
const classDeactivation = () => {

  cardsElem.forEach((card) => {
    card.parentElement.classList.add("col-1");
    card.parentElement.classList.remove("col-9");
  });

};
