function loadText() {
    document.getElementById("conteudo").innerHTML = "fsfsdfwefeferferfjfds  c bc cvnn  anvnv cv ";
}

function mouseOuver(){
    document.getElementById("mouseAlt").innerHTML = "Retire o mouse";
}

function mouseOut(){
    document.getElementById("mouseAlt").innerHTML = "Passe o mouse";
}

function textUpperCase(){
    var nomeMaisculo = document.getElementById("nome");
    nomeMaisculo.value = nomeMaisculo.value.toUpperCase();
}

function validarSenha(){
    var senha = document.getElementById("senha").value;

    if(senha =="" || senha.length <= 5){
        document.getElementById("erroSenha").innerHTML = "<span style='color: #ff0000;'>Preencha campo senha com 6 caracteres</span>";
    } else {
        document.getElementById("erroSenha").innerHTML = "<span style='color: #00FF00;'>Senha válida</span>";
    }

}