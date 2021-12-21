/* Consegna
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro. */


let btn = document.getElementById("btn-play");
let bomb = [];
console.log(arrayBomb())

btn.addEventListener("click",function(){
    let grid = document.getElementById('grid');
    let level =  document.getElementById('level').value;
    grid.innerHTML = "";
    if(level == 1){
        for(i = 1; i <= 100; i++){
            grid.innerHTML += `<div class="box box1 d-flex justify-content-center align-items-center">${i}</div>`
        }
    }else if(level == 2){
        for(i = 1; i <= 81; i++){
            grid.innerHTML += `<div class="box box2 d-flex justify-content-center align-items-center">${i}</div>`
        }
    }else{
        for(i = 1; i <= 49; i++){
            grid.innerHTML += `<div class="box box3 d-flex justify-content-center align-items-center">${i}</div>`
        }
    }
    
    let box = document.getElementsByClassName('box');
        for (i = 0; i < box.length; i++) {
            box[i].addEventListener("click",function(){
                this.classList.add("safe")
                console.log(this.innerHTML);
            })
        }
})



/* Consegna
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà 
prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l’utente clicca su una cella: se il numero è presente nella lista dei 
numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la 
partita termina, altrimenti la cella cliccata si colora di azzurro e l’utente può 
continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero 
massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero 
di volte che l’utente ha cliccato su una cella che non era una b. */

function arrayBomb(){
    for(i = 0; i < 16;){
        let num = Math.floor((Math.random())* 100) + 1;
        console.log(num)
        if(!bomb.includes(num)){
            i++;
            bomb.push(num)
        }
    }
    console.log(bomb);
    return bomb
}

