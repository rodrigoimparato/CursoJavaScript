var posicao = ["Primeiro", "Segundo", "Terceiro", "Antepenúltimo", "Penultimo"];

//Contar a quantidade de item no array;
console.log(`Quantidade de elementos ${ posicao.length }`);

//Acessar primeiro item do Array
console.log(`Primeiro item de elementos chama-se ${ posicao[0] }`);

//Acessar item no meio do Array
console.log(`A posição 3 no array de elementos chama-se ${ posicao[3] }`);

//Acessar o último item do Array
console.log(`Último item de elementos chama-se ${ posicao[posicao.length-1] }`);

//Ler o Array Completo
posicao.forEach(function(item, indice, array){
    console.log(`Nome do elemento ${ item }; Tem Indice ${ indice}`);
});

//Adicionar um item ao final do Array
posicao.push("Último");

posicao.forEach(function(item, indice, array){
    console.log(`Nome do elemento ${ item }; Tem Indice ${ indice}`);
});

//Adicionar ao início do Array mais um item
posicao.unshift("Zero");

posicao.forEach(function(item, indice, array){
    console.log(`Nome do elemento ${ item }; Tem Indice ${ indice}`);
});

//Removendo o último item do array
posicao.pop();
posicao.forEach(function(item, indice, array){
    console.log(`Nome do elemento ${ item }; Tem Indice ${ indice}`);
});

//Removendo o primeiro item do array
posicao.shift();
posicao.forEach(function(item, indice, array){
    console.log(`Nome do elemento ${ item }; Tem Indice ${ indice}`);
});

//Removendo um item a partir de um índice
// xx.splice(pos,n) -> pos é o índice e n a quantidade a partir daquela posição ao fim do array.
//Após a exclusão, os índices são reordenados automaticamente.
posicao.splice(2, 1);

posicao.forEach(function(item, indice, array){
    console.log(`Nome do elemento ${ item }; Tem Indice ${ indice}`);
});

posicao.splice(2, 2); // Removendo 2 itens 
posicao.forEach(function(item, indice, array){
    console.log(`Nome do elemento ${ item }; Tem Indice ${ indice}`);
});