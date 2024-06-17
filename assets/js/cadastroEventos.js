import Navegação from "./component/Navegacao.js";

const form = document.querySelector("form");
const auditorioLaranja = 150;
const extra = 70;
const auditorioColorado = 350;

form.addEventListener("submit", e => {
    e.preventDefault();

    const quantidadeConvidados = document.querySelector("#IConvidados").value;
    const nomeEmpresa = document.querySelector("#INomeEmpresa").value;
    const cadeiras = value => value <= auditorioLaranja ? 0 : value - auditorioLaranja
    let auditorio = "";
    
    const diaSemana = numero => numero == 1 ? "Segunda" : numero == 2 ? "Terça" : numero == 3 ? "Quarta" : numero == 4 ? "Quinta" : numero == 5 ? "Sexta" : numero == 6 ? "Sábado" : "Domingo";

    if(quantidadeConvidados <= 0) return alert("Número de convidados inválido.");

    if(quantidadeConvidados >= 1 && quantidadeConvidados <= auditorioLaranja + extra){
        alert(`Use o auditório Laranja (inclua mais ${cadeiras(quantidadeConvidados)} cadeiras).`);
        auditorio = `Auditório Lanja com ${cadeiras(quantidadeConvidados)} cadeiras adicionais`;
    }

    if(quantidadeConvidados > auditorioLaranja + extra && quantidadeConvidados <= auditorioColorado){
        alert("Use o auditório Colorado.");
        auditorio = "Auditório Colorado";
    }

    if(quantidadeConvidados > auditorioColorado) return alert("Quantidade de convidados superior à capacidade máxima.");

    const week = document.querySelector("#ISemana").value;
    const horario = document.querySelector("#IHorario").value;
    const horarioModificado = Number(horario.slice(0, 2));
    const duracao = document.querySelector("#IDuracao").value;

    if(week >= 1 && week <= 5){
        if(horarioModificado => 7 && horarioModificado <= 23){
            if((horarioModificado + Number(duracao)) >= 7 &&  (horarioModificado + Number(duracao)) <= 23){
                alert(`Auditório reservado para ${nomeEmpresa}. ${diaSemana(week)} às ${horario.slice(0, 2)}h${horario.slice(3, 5)}!`);
            } else {
                return alert("Duração ou horário inválidos! O auditório está disponível para reservas de segunda a sexta das 7hs às 23hs.")
            }
            
        } else {
            return alert("Auditório indisponível!");
        }
    } else {
        if(horarioModificado => 7 && horarioModificado <= 15){
            if((horarioModificado + Number(duracao)) >= 7 &&  (horarioModificado + Number(duracao)) <= 15){
                alert(`Auditório reservado para ${nomeEmpresa}. ${diaSemana(week)} às ${horario.slice(0, 2)}h${horario.slice(3, 5)}!`);
            } else{
                return alert("Duração ou horário inválidos! O auditório está disponível para reservas de sábados e domingos apenas das 7hs às 15hs.")
            }
        } else {
            return alert("Auditório indisponível!");
        }
    }

    const custoHoraGarcom = 10.5;
    console.log()
    const quantidadeGarcons = Number((Number(quantidadeConvidados) / 12).toFixed(0)) + Number((Number(duracao) / 2).toFixed(0));
    const custoGarcons = (quantidadeGarcons * (Number(duracao) * Number(custoHoraGarcom))).toFixed(2);

    alert(`São necessários ${quantidadeGarcons} garçons. Custo: R$ ${custoGarcons}.`);

    const valorLitroCafe = 0.8;
    const ValorLitroAgua = 0.4;
    const ValorUnidadeSalgado = 0.34;
    
    const litroCafePorConvidado = 0.2;
    const litroAguaPorConvidado = 0.5;
    const quantidadeSalgadoPorConvidado = 7;

    const valorCafePorConvidado = (valorLitroCafe * litroCafePorConvidado).toFixed(2);
    const valorAguaPorConvidado = (ValorLitroAgua * litroAguaPorConvidado).toFixed(2);
    const valorSalgadoPorConvidado = (ValorUnidadeSalgado * quantidadeSalgadoPorConvidado).toFixed(2);
    const custoBuffet = ((Number(valorAguaPorConvidado) + Number(valorCafePorConvidado) + Number(valorSalgadoPorConvidado)) * Number(quantidadeConvidados)).toFixed(2)

    alert(`O evento precisará de ${(litroCafePorConvidado * quantidadeConvidados).toFixed(0)} litros de café, ${(litroAguaPorConvidado * quantidadeConvidados).toFixed(0)} litros de água e ${(quantidadeSalgadoPorConvidado * quantidadeConvidados).toFixed(0)} salgados.`);

    if(confirm(`Evento no ${auditorio}.\nNome da Empresa: ${nomeEmpresa}.\nData: ${diaSemana(week)}, ${horarioModificado}h às ${horarioModificado + Number(duracao)}h.\nDuração do evento: ${duracao}H.\nQuantidade de garçons: ${quantidadeGarcons}.\nQuantidade de Convidados: ${quantidadeConvidados}.\nCusto do garçons: R$${custoGarcons}.\nCusto do Buffet: R$${custoBuffet}.\n Valor total do Evento: R$${Number(custoGarcons) + Number(custoBuffet)}.\nGostaria de efetuar a reserva?`)){
        return alert("Reserva efetuada com sucesso!");
    }
    return alert("Reserva não efetuada.");
});