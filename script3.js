function verificar(){
    const idade = document.getElementById('idade').value;
    const img = document.getElementById('imagem');

    if(idade <= 12){
        document.getElementById('tipo').textContent = "Você é uma criança";
        img.setAttribute('src', 'img/crianca.png');
    }
    else if(idade <= 18){
        document.getElementById('tipo').textContent = "Você é um adolescente"
        img.setAttribute('src', 'img/adolecente.png');
    }
    else if(idade <= 59){
        document.getElementById('tipo').textContent = "Você é um adulto"
        img.setAttribute('src', 'img/adulto.png');
    }
    else{
        document.getElementById('tipo').textContent = "Você é um idoso"
        img.setAttribute('src', 'img/idoso.png');
    }    
}