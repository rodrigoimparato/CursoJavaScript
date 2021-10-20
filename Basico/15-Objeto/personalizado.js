document.writeln(`<h2>Objeto literal</h2>`);
var cadeira = {
    cor: "Preta",
    altura: 118,
    largura: 74,
    profundidade: 64
}

document.writeln(`Cor da cadeira ${cadeira.cor}`);

document.writeln(`<h2>Adicionando propriedade</h2>`);

cadeira.peso = 17;
document.writeln(`Peso da cadeira ${cadeira.peso} <hr>`);


document.writeln(`<h2>Deletando propriedade</h2>`);
document.writeln(`Profundidade da cadeira ${cadeira.profundidade}`);
delete cadeira.profundidade;
document.writeln(`Profundidade da cadeira ${cadeira.profundidade}`); // mostrará: undefined

document.writeln(`<h2>Objeto não literal</h2>`);

var mesa = new Object();
mesa.cor = "Preto";
mesa.largura = 220;
document.writeln(`Cor da mesa ${mesa.cor}`);
document.writeln(`Largura da mesa ${mesa.largura}`);

delete mesa.largura;
document.writeln(`Largura da mesa ${mesa.largura}`);