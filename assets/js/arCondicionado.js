import Navegação from "./component/Navegacao.js";
const form = document.querySelector("form");
const checkButton = document.querySelector("#check");
const valores = [];
const empresas = [];

form.addEventListener("submit", e => {
    e.preventDefault();

    const empresaNome = document.querySelector("#IEmpresaNome").value;
    const valorAparelho = Number(document.querySelector("#IValorAparelho").value);
    const porcentagemDesconto = Number(document.querySelector("#IPorcentagemDesconto").value);
    const quantidadeAparelhos = Number(document.querySelector("#IQuantidadeAparelhos").value);
    const quantidadeDescontoPorAparelhos = Number(document.querySelector("#IQuantidadeDescontoPorAparelhos").value);


    let valorTotal = valorAparelho * quantidadeAparelhos - ((valorAparelho * (porcentagemDesconto / 100)) * quantidadeDescontoPorAparelhos);
    alert(`O serviço de ${empresaNome} custará R$ ${valorTotal}. Valor registrado!`);
    valores.push(valorTotal);
    empresas.push(empresaNome);
});

checkButton.addEventListener("click", event => {

    let valorMinimo = valores.map(Number).reduce(function(a, b) {
        return Math.min(a, b);
    });

    alert(`O orçamento de menor valor é o ${empresas[valores.indexOf(valorMinimo)]} por R$ ${valorMinimo}.`);
});