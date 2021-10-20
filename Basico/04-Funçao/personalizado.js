function nome_funcao(){
    alert("Clicou na função");
};

function somar(a,b){
    var total = a + b;
    alert(`Valor da soma é ${ total }`);
};

function desconto(a,b){
    var totalDesc = a - b;
    return totalDesc;
}
var resultTotalDesc = desconto(10,5);
document.write(`Valor final com desconto ${resultTotalDesc}`);