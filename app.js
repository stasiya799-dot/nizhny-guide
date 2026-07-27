document.addEventListener("DOMContentLoaded", () => {
    console.log("Nizhny Guide запущен 🚀");

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", (e) => {
            e.preventDefault();

            alert("Раздел скоро появится 😊");
        });
    });
});
