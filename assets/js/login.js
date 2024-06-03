const cardButton = document.querySelector("#question");

cardButton.addEventListener("click", () =>{
    const card = document.querySelector("#cartao");

    card.classList.contains("tranparente") ? card.classList.remove("tranparente") : card.classList.add("tranparente"); 
});

const form = document.querySelector("form");

form.addEventListener("submit", e => {
    e.preventDefault();

    const name = document.querySelector("input[type=text]").value;
    const password = document.querySelector("input[type=password]").value;

    if(password !== "2678") return alert("Senha errada!");
    if(name.length < 1) return alert("Usuário Inválido!");

    window.name = name;
    window.location.replace("./PainelInicial.html");
});