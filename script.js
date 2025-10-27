/* Programa - Modelo 1 */
window.document.addEventListener("DOMContentLoaded", function(){
    /*Botão Letra Maiúscula*/ 
    window.document.querySelector("#btnMaiuscula").addEventListener("click", function(){
        let inputText = document.querySelector("#input-text").value 
        document.querySelector("#result").innerHTML = inputText.toUpperCase()
    })

    /*Botão Letra Minúscula*/ 
    window.document.querySelector("#btnMinuscula").addEventListener("click", function(){
        let inputText = document.querySelector("#input-text").value 
        document.querySelector("#result").innerHTML = inputText.toLowerCase()
    })

    /*Botão 1º Letra MAIÚSCULA*/
    window.document.querySelector("#btnPrimeiraLetra").addEventListener("click", function() {
    let inputText = document.querySelector("#input-text").value;
    if (inputText.length > 0) {
        let resultado = inputText.charAt(0).toUpperCase() + inputText.slice(1).toLowerCase();
        document.querySelector("#result").innerHTML = resultado;
    } 
    });

    /*Botão Limpar*/
    window.document.querySelector("#btnLimpar").addEventListener("click", function() {
    document.querySelector("#input-text").value = "";  
    document.querySelector("#result").innerHTML = "";  
    });

    /*Botão Contar Caracteres*/
    window.document.querySelector("#btnContar").addEventListener("click", function() {
    let inputText = document.querySelector("#input-text").value;
    let count = inputText.length;
    document.querySelector("#result").innerHTML = `Caracteres: ${count}`;
    });
})
