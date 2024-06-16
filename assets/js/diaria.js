import Navegação from "./component/Navegacao.js";
const Quartos = JSON.parse(localStorage.getItem("Quartos"));

const form = document.querySelector("form");

form.addEventListener("submit", e => {
    e.preventDefault();

    const valorDiaria = document.querySelector("#IDiaria").value;
    const dias = document.querySelector("#IDias").value;
    const nomeCliente = document.querySelector("#INomeCliente").value;
    const quarto = document.querySelector("#IQuarto").value;

    if(valorDiaria == "" || dias == "" || nomeCliente == "" || quarto == "") return alert("Preencha todos os valores.");

    if(valorDiaria <= 0 || isNaN(valorDiaria)) return alert("Valor da diária inválido. O valor precisa ser um número maior que 0.");

    if(dias <= 0 || dias > 30 || isNaN(dias)) return alert("Valor de Dias de hospedagem inválido. O valor precisa ser um número entre 1 e 30.");

    if(quarto <= 0 || quarto > 20 || isNaN(quarto)) return alert("Valor de quarto inválido. O valor precisa ser um número entre 1 e 20.");

    if(Quartos[quarto - 1].ocupado){
        alert(`O quarto ${quarto} já está ocupado!`);
    } else{
        if(confirm(`${window.name}, você confirma a hospedagem para ${nomeCliente} por ${dias} dias para o quarto ${quarto} por R$${valorDiaria * dias}?`)){
            Quartos[quarto - 1].ocupado = true;
            localStorage.setItem("Quartos", JSON.stringify(Quartos));
            return alert(`O quarto ${quarto} foi reservado com sucesso!`);
        };
        return;
    }
});

const diaria = document.querySelector("#IDiaria");
const diasHospedagem = document.querySelector("#IDias");
const inputText = document.querySelector(".valorDiaria");

diaria.addEventListener("input", e => adicionaValor(e));
diasHospedagem.addEventListener("input", e => adicionaValor(e));

function adicionaValor(event){
    if(diaria.value != "" && diasHospedagem.value != ""){
        inputText.innerHTML = `Valor diária é igual a <span class="verde">R$ ${diaria.value * diasHospedagem.value}</span>.`
    }
}