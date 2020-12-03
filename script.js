function clicouNoBotao(){
    let InputNome = document.querySelector('#Nome');

    let SectionSaudacao = document.querySelector('Saudacao');
    SectionSaudacao.innerHTML="";
    let texto = document.createTextNode('Seja bem vindo, ${InputNome.value}');

    SectionSaudacao.appendChild(texto);
}

function LimparSaudacao(){
    let SectionSaudacao = document.querySelector('#Saudacao');
    SectionSaudacao.innerHTML = "";