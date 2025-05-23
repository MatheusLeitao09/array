// push() - Adiciona elementos ao final do array

let playlist = ['Funk', 'Rock', 'Sertanejo']
console.log("Antes do push:", playlist);

// Adicionando uma nova música à playlist 
playlist.push('Trap');

console.log("Depos do push:", playlist);

// Adicionando mais um
playlist.push('Samba');
console.log("Mais um push:", playlist);

console.log('--------------------------------');

// pop() - Remove o último elemento do array
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


// include() - Verifica se o array contém um determinado elemento

let playlist5 = ['Funk', 'Hip Hop', 'Pop', ' Sertanejo', 'Opera'];

console.log("A playlist inclui 'Funk'?", playlist4.includes('Funk'));
console.log("A playlist inclui 'Rock'?", playlist4.includes('Country'));
console.log('---------------------');

// Converter o array em uma string


let playlist6 = ['Funk', 'Hip Hop', 'Pop', 'Trap'];

console.log(`Playlis como string: ${playlist6.join(', ')}`);
console.log('---------------------');


// Usando o slice: indicie inicial(inclusivo) e o final (esclusivo)

let playlist7 = ['Funk', 'Hip Hop', 'Pop', ' Sertanejo', 'Opera', ' Balé', 'Indie'];

console.log("Parte da playlist (índices 2 a 5):", playlist7.slice(2, 6)); //['Pop', 'Rock', 'Jazz', 'Reggae']
console.log("Parte da playlist (índices 0 a 3):", playlist7.slice(0, 4)); //['Funk', 'Hip-Hop', 'Pop', 'Sertanejo']
console.log("Parte da playlist (índices 0 a 3):", playlist7.slice(3, 4)); // mostrar só o sertanejo
console.log('---------------------');

// Alterra o conteudo do array splice

let playlist8 = ['Funk', 'Hip Hop', 'Pop', ' Sertanejo', 'Opera', 'Hino'];

console.log(`Antes do splice: ${playlist8}` );


// Removendo 2 elementos a partir do indice 3
let elementosRemovidos1 = playlist8.splice(3, 2)
console.log(`Elementos removidos: ${elementosRemovidos1}` );
console.log('----------------');

let playlist9 = ['Funk', 'Hip Hop', 'Pop'];
let playlist10 = ['Rock', 'Jazz'];

console.log(`Playlist combinada: ${playlist9.concat(playlist10).join(', ')}`);
console.log('------------------');

// Tranformar o texto no array em letra maiuscula colar com o map

let playlist11 = ['Funk', 'Hip Hop', 'Pop'];
let playlistEmCaps = playlist11.map(musica => musica.toUpperCase());

console.log("Playlist em maiúsculas:", playlistEmCaps);

// Tranformar em letra minuscula

let minuscula = playlist11.map(item => item.toLocaleLowerCase());
console.log(`maiúsculas com map(): ${minuscula.join(', ')}`);
console.log('-------------------------------------');

// Mesma coisa para letra maiscula

let numeros = [10, 20, 30, 40, 50];

let dobrados = numeros.map(n => n * 2);
console.log(`Valores dobrados: ${dobrados.join(', ')}`);

let metades = numeros.map(n => n / 2);
console.log(`Valores pela metade: ${metades.join(', ')}`);


let comoTexto = numeros.map(n => `${n} pts`);
console.log(`Como texto: ${comoTexto.join(', ')}`);
console.log('----------------------');


// filter() - Cria um novo array com elementos que passam em uma condicao

let playlist12 = ['Funk', 'Hip-Hop', 'Pop', 'Rock', 'Jazz'];

let playlistFiltrada = playlist12.filter(musica => musica.length > 4);

console.log("Playlist filtrada (músicas com mais de 4 letras):", playlistFiltrada);
console.log('--------------------------');


// sort() - Ordena os elementos do array

let playlist13 = ['Funk', 'Hip-Hop', 'Pop', 'Rock', 'Jazz'];

let playlistOrdenada = playlist13.sort();

console.log("Playlist ordenada:", playlistOrdenada);
console.log('---------------------------------');


// reverse() - Inverte a ordem dos elementos do array

let playlist14 = ['Funk', 'Hip-Hop', 'Pop', 'Rock', 'Jazz'];

let playlistInvertida = playlist14.reverse();

console.log("Playlist invertida:", playlistInvertida); 

// sort() - Ordena os elementos do array

let numeros1 = [10, 5, 100, 50, 1];

console.log("Antes do sort:", numeros1);

// Ordenando os números de forma crescente

let numerosOrdenadosCrescentes = numeros1.sort((a, b) => a - b);

console.log("Números em ordem crescente:", numerosOrdenadosCrescentes);

// Ordenando os números de forma decrescente

let numerosOrdenadosDecrescentes = numeros1.sort((a, b) => b - a);
console.log("Números em ordem decrescente:", numerosOrdenadosDecrescentes);
