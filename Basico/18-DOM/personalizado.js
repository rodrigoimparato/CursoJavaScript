
document.getElementById("exemplo-um").innerHTML = "inserindo texto via innerHTML";

//utilizado para ler elementos de um formulário.
function exemploDois(){
    var ele = document.getElementsByName("curso");
    console.log(ele);
}

function exemplo3(){
    var ele = document.getElementsByTagName("span");
    console.log(ele);
}

function exemplo4(){
    var ele = document.getElementsByTagName("li");
    console.log(ele);
}

function exemplo5(){
    var ele = document.getElementsByClassName("produto");
    console.log(ele);
}