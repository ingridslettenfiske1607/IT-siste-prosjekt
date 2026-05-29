const burger = document.querySelector('nav i');
const ul = document.querySelector('nav ul');

burger.addEventListener('click', () => {
    ul.classList.toggle('open');

    if (burger.classList.contains('fa-bars')) {
        burger.classList.remove('fa-bars');
        burger.classList.add('fa-x');
    } else {
        burger.classList.remove('fa-x');
        burger.classList.add('fa-bars');
    }
});





function showTip(type) {

    const tipText = document.getElementById("tip-text");

    if (type === "pakking") {
        tipText.innerText =
            "Pakk kun det viktigste og sjekk værmeldingen før du reiser.";
    }

    else if (type === "fly") {
        tipText.innerText =
            "Møt opp tidlig på flyplassen og ha billetter og pass lett tilgjengelig.";
    }

    else if (type === "hotell") {
        tipText.innerText =
            "Les anmeldelser før du bestiller hotell for å få den beste opplevelsen.";
    }

    else if (type === "sikkerhet") {
        tipText.innerText =
            "Oppbevar viktige dokumenter trygt og ha kopi av passet ditt digitalt.";
    }

}



function toggleText(button) {
    const card = button.closest(".travel-card");
    const text = card.querySelector(".extra-text");
    text.classList.toggle("open");

    if (text.classList.contains("open")) {
        button.innerText = "Vis mindre ↑";
    } else {
        button.innerText = "Les mer →";
    }
}