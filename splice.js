let playlist = ['funk', 'Hip-Hop', 'Rock', 'jazz'];

console.log(`Antes do splice: ${playlist}`);

let elementosRemovidos = playlist.splice(2, 2);
let desafio = playlist.splice(2,3);

console.log(`Depois do splice: ${playlist}`);
console.log(`elementos removidos: ${elementosRemovidos} `);

console.log(`Depois do splice desafio: ${playlist}`);
