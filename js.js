const hamburguer = document.getElementById("hamb");
var teste = document.getElementById("ham");
const html = document.querySelector("html");
var verificar = 1;
hamburguer.addEventListener("click", function(){
    if (verificar == 0)
        {
            teste.style.opacity="0";
            verificar =1;
        }
    else 
    {
        teste.style.opacity="100";
        teste.style.pointerEvents="all";
        verificar=0;
    }
})
const fechar = document.getElementById("doiss");
fechar.addEventListener("click", function(){
    teste.style.opacity="0";
    verificar=1;
})
const BgImc = document.getElementById("envolvTXT");
const main = document.getElementById("main");
const aside = document.getElementById("aside");
const TxtImc = document.getElementById("txt_imc");
const body = document.querySelector("body");
const ajuda = document.getElementById("ajuda");
let aberto = false;
ajuda.addEventListener("click", function(){
    BgImc.style.opacity="100";
    BgImc.style.pointerEvents="all";
});
TxtImc.addEventListener("mouseover", function(){
    BgImc.style.opacity="100";
    aberto=true;
});
TxtImc.addEventListener("mouseout", function(){
    aberto=false;
});
BgImc.addEventListener("click", ()=>{
    if (aberto == false)
    {
        BgImc.style.opacity="0";
        BgImc.style.pointerEvents="none";
    }
});
// --------------------------
const botao = document.getElementById("botao");
const altura = document.getElementById("altura");
const peso = document.getElementById("peso");
const lab_altura = document.getElementById("lab_altura");
const lab_peso = document.getElementById("lab_peso");
let res;
let controle=1;
botao.addEventListener("click", function(){
    if (peso.value =="")
        {
            document.getElementById("peso").placeholder = "Digite algo";
            controle=1;
        }
    else if (altura.value =="")
        {
            document.getElementById("altura").placeholder = "Digite algo";
            controle=1;
        }
    else if (controle%2 !=0)
        {
            res = peso.value/Math.pow(altura.value/100, 2);
            altura.style.display="none";
            peso.style.display="none";
            lab_altura.style.display="none";
            lab_peso.classList.add("texto_imc");
            if (res<18.5)
                {
                    lab_peso.textContent="Baixo Peso";
                }
            else if (res>=18.5 && res <25)
                {
                    lab_peso.textContent="Peso Ideal";
                }
            else if (res>=25 && res <30)
                {
                    lab_peso.textContent="Sobrepeso";
                }
            else if (res>=30 && res <35)
                {
                    lab_peso.textContent="Obesidade Grau I";
                }
            else if (res>=35 && res<40)
                {
                    lab_peso.textContent="Obesidade Grau II";   
                }
            else if (res>=40)
                {
                    lab_peso.textContent="Obesidade Grau III";
                }
                lab_peso.style.height="auto";
                lab_peso.style.width="calc(auto + 5px)";
                botao.textContent ="Voltar";
            controle++;
        }
    else if (controle%2 ==0)
        {
        lab_peso.textContent="Peso (kg)";
        altura.value ="";
        peso.value ="";
        altura.style.display="inline-block";
        peso.style.display="inline-block";
        lab_altura.style.display="block";
        lab_peso.style.display="block";
        botao.textContent="Calcular IMC";
        controle++;
        document.getElementById("peso").placeholder = "";
        document.getElementById("altura").placeholder = "";
        lab_peso.classList.remove("texto_imc");
        }
})
//breakpoints
const section = document.getElementById("TXT");
const imcTxt = document.querySelector("#txt");
const aulaTxt = document.querySelector("#aula");
if (html.offsetWidth<950){
    section.removeChild(fechar);
    section.removeChild(aulaTxt);
}


