// Adicionando um elemento no final do array

let playlist = ['Funk', 'Rock', 'Sertanejo']
console.log("Antes do push:", playlist);

// Adicionando uma nova música à playlist 
playlist.push('Trap');

console.log("Depos do push:", playlist);

// Adicionando mais um
playlist.push('Samba');
console.log("Mais um push:", playlist);

console.log('--------------------------------');

// Remover o último elemento de um array
let playlist1 = ['Funk', 'Hip Hop', 'git config --global user.name "Seu Nome"Pop']

console.log("Antes do pop", playlist1);

// Removendo a última música da playlist
let musicaRemovida = playlist1.pop();

console.log("Depois do pop:", playlist1);
console.log("Música removida", musicaRemovida);

let musicaRemovida2 = playlist1.pop();
console.log("Segunda música removida:", musicaRemovida2);


console.log('-----------------------------');

// Usando shift que remove o primeiro elemento de array

let playlist2 = ['Funk', 'Hip Hop', 'Pop'];

console.log("Antes do shift:", playlist2);

// Removeno a primeira música da playlist

let musicaRemovida3 = playlist2.shift();

console.log("Depois do shift", playlist2);
console.log("Música removida:", musicaRemovida3);
console.log("------------------");


let playlist4 = ['Funk', 'Hip Hop', 'Pop'];

console.log("Antes do unshift:", playlist4);

// Adicionando uma nova música no ínicio da playlist 
playlist4.unshift('Rock');

console.log("Depois do unshift:", playlist4);

let playlist5 = ['Funk', 'Hip Hop', 'Pop', ' Sertanejo', 'Opera'];

console.log("A playlist inclui 'Funk'?", playlist4.includes('Funk'));
console.log("A playlist inclui 'Rock'?", playlist4.includes('Country'));

// Converter o array em uma string

let playlist6 = ['Funk', 'Hip Hop', 'Pop', 'Trap'];

console.log(`Playlis como string: ${playlist6.join(', ')}`);
