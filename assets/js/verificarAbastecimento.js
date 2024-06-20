import Navegação from "./component/Navegacao.js";

const form = document.querySelector("form");

form.addEventListener("submit", e => {
    e.preventDefault();

    const alcoolW = document.querySelector("#IWayneOilA").value;
    const gasolinaW = document.querySelector("#IWayneOilG").value;
    const alcoolS = document.querySelector("#IStarkPetrolA").value;
    const gasolinaS = document.querySelector("#IStarkPetrolG").value;
    
    if(alcoolW == alcoolS && gasolinaS == gasolinaW && alcoolS == gasolinaW) return alert("Os valores são iguais, é mais barato abaster com álcool.");

    if((alcoolS > alcoolW && alcoolS > gasolinaS && alcoolS > gasolinaW)){
        return alert(`${window.name}, é mais barato abastecer com álcool no posto Wayne Oil.`);
    }

    if(alcoolW > alcoolS && alcoolW > gasolinaS && alcoolW > gasolinaW){
        return alert(`${window.name}, é mais barato abastecer com gasolina no posto Wayne Oil.`);
    }

    if(gasolinaS > alcoolW && gasolinaS > alcoolS && gasolinaS > gasolinaW){
        return alert(`${window.name}, é mais barato abastecer com álcool no posto Stark Petrol.`);
    }
    
    if(gasolinaW > alcoolW && gasolinaW > gasolinaS && gasolinaW > alcoolS){
        return alert(`${window.name}, é mais barato abastecer com gasolina no posto Stark Petrol.`);
    }

    if(gasolinaW == gasolinaS){
        return alert("Valores da gasolina são iguais, opte por qualquer uma das duas");
    }

    return alert(`${window.name}, é mais barato abastecer com gasolina no posto Wayne Oil.`);
});