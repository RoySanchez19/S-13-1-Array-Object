// Guardando el Array
let jugadores = gamers;

// Declarando Variables internas
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');

// Declarando Botones
const btnone = document.getElementById('1');
const btntwo = document.getElementById('2');
const btnthree = document.getElementById('3');

// Declarando Eventos de los Botones
btnone.addEventListener('click', primero);
btntwo.addEventListener('click', segundo);
btnthree.addEventListener('click',tercero);

// La función del 1er Boton
function primero(){
    i = 0;
    let printName = jugadores[i].name;
    let printNickName = jugadores[i].nickName;
    let printAge = jugadores[i].age;
    one.innerHTML = `${printName}`;
    two.innerHTML = `${printNickName}`;
    three.innerHTML = `${printAge}`;
}

// La función del 2do Boton
function segundo(){
    i = 1;
    let printName = jugadores[i].name;
    let printNickName = jugadores[i].nickName;
    let printAge = jugadores[i].age;
    one.innerHTML = `${printName}`;
    two.innerHTML = `${printNickName}`;
    three.innerHTML = `${printAge}`;
}

// La función del 3er Boton
function tercero(){
    i = 2;
    let printName = jugadores[i].name;
    let printNickName = jugadores[i].nickName;
    let printAge = jugadores[i].age;
    one.innerHTML = `${printName}`;
    two.innerHTML = `${printNickName}`;
    three.innerHTML = `${printAge}`;
}
