import Navegação from "./component/Navegacao.js";

const form = document.querySelector("form");
const addButton = document.querySelector("input[type=button]");
let contador = 1;

const adicionarInputs = () => {
    contador++;
    const local = document.querySelector("#users");

    local.innerHTML += `<div><label for="INomeCliente${contador}">Nome do hóspede ${contador}:</label><input type="text" name="NomeCliente" id="INomeCliente${contador}" placeholder="Nome do hóspede" minlength="3" class="clientName" required min="3"><label for="IIdade${contador}">Idade:</label><input type="number" name="Idade" id="IIdade${contador}" placeholder="Idade do hóspede" class="clientAge" required minlength="1"></div>`
}

form.addEventListener("submit", e => {
    e.preventDefault();

    const idades = document.querySelectorAll(".clientAge");
    const valorHospedagem =document.querySelector("#IDiaria").value;
    let inteira = 0;
    let gratuidade = 0;
    let meias = 0;

    for(let idade of idades) Number(idade.value) < 6 ? gratuidade++ :  Number(idade.value) > 60 ? meias++ : inteira ++;

    if(confirm(`${window.name}, o valor total das hospedagens é: R$${(valorHospedagem * inteira) + ((valorHospedagem * meias) / 2)}; ${gratuidade} gratuidade(s); ${meias} meia(s)`)) return alert("Hóspedes registrados com sucesso!");
});

addButton.addEventListener("click", () => {
    if(confirm("Realmente deseja adicionar mais um hóspede ?")) adicionarInputs();
});