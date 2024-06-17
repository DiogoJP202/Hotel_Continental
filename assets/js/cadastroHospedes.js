import Navegação from "./component/Navegacao.js";

const form = document.querySelector("form");
const addButton = document.querySelector("input[type=button]");
const searchButton = document.querySelector(".searchButton");
let contador = 1;
let nomes = []

const adicionarInputs = () => {
    contador++;
    const local = document.querySelector("#users");

    local.innerHTML += `<div><label for="INomeCliente${contador}">Nome do hóspede ${contador}:</label><input type="text" name="NomeCliente" id="INomeCliente${contador}" placeholder="Nome do hóspede" minlength="3" class="clientName" required min="3"></div>`
}

form.addEventListener("submit", e => {
    e.preventDefault();

    const hospedes = document.querySelectorAll(".clientName");
    
    for(let hospede of hospedes){
        nomes.push(hospede.value);
    }

    return alert("Hóspedes cadastrados!");
});

addButton.addEventListener("click", () => {
    if(contador >= 15 || nomes.length > 15) return alert("Número maximo de hóspedes alcançado!");

    if(confirm("Realmente deseja adicionar mais um hóspede ?")) adicionarInputs();
});

searchButton.addEventListener("click", () => {
    const nome = prompt("Insira o nome da pessoa que deseje pesquisar: ");

    if(nomes.includes(nome)) return alert(`Hóspede ${nome} foi encontrada(o)!`)
    return alert(`Hóspede ${nome} não foi encontrada(o)!`);
});