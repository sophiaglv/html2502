function calcularCursos(){
    //Entrada

    const valor1 = document.getElementById('natureza').value;
    const valor2 = document.getElementById('humanas').value;
    const valor3 = document.getElementById('linguagens').value;
    const valor4 = document.getElementById('matematica').value;
    const valor5 = document.getElementById('redacao').value;

    //Processamento

    let media =(parseFloat (valor1) + parseFloat (valor2) + parseFloat (valor3) + parseFloat (valor4) + parseFloat (valor5) ) / 5;

    //Saída

    if(media >= 750 && media < 1000){
        document.getElementById('texto').textContent = "Medicina, Engenharia Aeronáutica e Direito. Nota:" + media;
    }
    else if(media >= 600 && media < 750){
        document.getElementById('texto').textContent ="Engenharia Civil, Administração e Psicologia. Nota:" + media;
    }
    else if(media >= 450 && media < 600){
        document.getElementById('texto').textContent ="Pedagogia, Letras e Ciências Sociais. Nota:" + media;
    }
    else{
        document.getElementById('texto').textContent ="Infelizmente sua nota está abaixo da nota de corte mínima. Nota:" + media;
    }
}