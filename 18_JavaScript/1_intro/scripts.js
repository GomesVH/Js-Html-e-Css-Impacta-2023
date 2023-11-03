function calculaIdade(){
    let ano,idade;
    ano = window.prompt("Entre com o ano de seu nascimento");
    idade = 2023 - ano;
    window.alert(idade+" anos");
    window.console.log(idade+" anos");
    //window.document.write(idade+" anos");
}


window.onload = function(){
        document.getElementById('um').onclick = calculaIdade;

        document.getElementById('dois').ondblclick = function(){
            calculaIdade();
        }

        document.getElementById('tres').onmouseover = function(){
                let ano,idade;
                ano = window.prompt("Entre com o ano de seu nascimento");
                idade = 2023 - ano;
                window.alert(idade+" anos");
        }
} 