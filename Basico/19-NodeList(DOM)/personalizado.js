
//Este não é um NodeList
document.getElementById("exemplo-um").innerHTML = "inserindo texto via innerHTML";

//Recuperando o tamanho do NodeList.
function exemploDois(){
    var ele = document.getElementsByName("curso");
    console.log(ele);


    console.log(`Tamanho do NodeList ${ ele.length }`);
    //Ler elementos do NodeList individual
    console.log(`Elemento da posição 0: ${ ele[0]['value']}`);
    console.log(`Elemento da posição 1: ${ ele[1]['value']}`);
    console.log(`Elemento da posição 2: ${ ele[2]['value']}`);

    for(var i = 0; i < ele.length; i++){
        console.log(`Elemento da posição ${ i }: ${ ele[i]['value']}`);
    }

}

function exemplo3(){
    var ele = document.getElementsByTagName("span");
    console.log(ele);

    console.log(`Tamanho do HTMLColection ${ ele.length }`);
    //Ler elementos do NodeList individual
    console.log(`Elemento da posição 0: ${ ele[0]['innerText']}`);
    console.log(`Elemento da posição 1: ${ ele[1]['innerText']}`);
    console.log(`Elemento da posição 2: ${ ele[2]['innerText']}`);

    for(var i = 0; i < ele.length; i++){
        console.log(`Elemento da posição ${ i }: ${ ele[i]['innerText']}`);
    }

}

function exemplo4(){
    var ele = document.getElementsByTagName("li");
    console.log(ele);

    console.log(`Tamanho do HTMLColection ${ ele.length }`);
    //Ler elementos do NodeList individual
    console.log(`Elemento da posição 0: ${ ele[0]['innerHTML']}`);
    console.log(`Elemento da posição 1: ${ ele[1]['innerHTML']}`);
    console.log(`Elemento da posição 2: ${ ele[2]['innerHTML']}`);

    for(var i = 0; i < ele.length; i++){
        console.log(`Elemento da posição ${ i }: ${ ele[i]['innerHTML']}`);
    }
}

function exemplo5(){
    var ele = document.getElementsByClassName("produto");
    console.log(ele);

    console.log(`Tamanho do HTMLColection ${ ele.length }`);
    //Ler elementos do NodeList individual
    console.log(`Elemento da posição 0: ${ ele[0]['innerHTML']}`);
    console.log(`Elemento da posição 1: ${ ele[1]['innerHTML']}`);
    console.log(`Elemento da posição 2: ${ ele[2]['innerHTML']}`);

    for(var i = 0; i < ele.length; i++){
        console.log(`Elemento da posição ${ i }: ${ ele[i]['innerHTML']}`);
    }
}