export default document.addEventListener("click", event => {
    const element = event.target;

    if(element.classList.contains("hamburger") || element.classList.contains("line")){
        const menu = document.querySelector("#menu");

        menu.classList.contains("entrada") ? menu.classList.remove("entrada") : menu.classList.add("entrada");

        const hamburger = document.querySelector(".hamburger");

        hamburger.classList.contains("fechado") ? hamburger.classList.remove("fechado") : hamburger.classList.add("fechado");
    }

    if(element.classList.contains("sair")){
        const confirmacao = confirm("Deseja sair da sua conta e ir para a página inicial ?");

        if(confirmacao){
            alert(`Muito obrigado e até logo, ${window.name}.`);
            window.location.replace("../index.html");
        }
    }
});