function entrar(){
    const user = document.getElementById('username').value;
    const senha = document.getElementById('password').value;

    if(user === "" && senha === ""){
        alert('Erro');
    }

    else if(user === "adm" && senha === "123456"){
    window.location.href='pages/adm.html';
    }

    else{
        alert('Login ou senha incorretos');
    }
}