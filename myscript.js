/* Consegna
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro. */

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


let btn = document.getElementById('btn-play');
let grid = document.getElementById('grid');
let bomb = [];
let box = '';







btn.addEventListener("click", function(){
    bomb = [];
    
    function generaGriglia(numeroCelle){
        for(i = 1; i <= numeroCelle; i++){
            grid.innerHTML += `<div class="box d-flex justify-content-center align-items-center">${i}</div>`
        }
        box =document.getElementsByClassName('box');

        function generaBomba(num){
            console.log(bomb.length)
            while (bomb.length < num) {
                let numBomb = Math.floor(Math.random()* box.length + 1);
                if(!bomb.includes(numBomb)){
                    bomb.push(numBomb)
                }
            }
        }
        generaBomba(16);
        console.log(bomb);
    }

    let level =  document.getElementById('level').value;
    grid.innerHTML = "";

    if(level == 1){
        generaGriglia(100);
            
        let allBox = document.querySelectorAll('.box');
        for(i=0; i<100; i++){
            allBox[i].classList.add('box1');
        }
    }else if(level == 2){
        generaGriglia(81);
        let allBox = document.querySelectorAll('.box');
        for(i=0; i<81; i++){
            allBox[i].classList.add('box2');
        }
    }else{
        generaGriglia(49);
        let allBox = document.querySelectorAll('.box');
        for(i=0; i<49; i++){
            allBox[i].classList.add('box3');
        }
    }
    
    console.log(box.length);



    for (i = 0; i < box.length; i++) {
        box[i].addEventListener("click",function(){
            const numeroCella = parseInt(this.innerHTML);
            if(bomb.includes(numeroCella)) {
                fineGioco();
            }else{
                this.classList.add("safe");
            }
        })
    }

})


function fineGioco(){
    for(i = 0; i < box.length; i++){

        if(bomb.includes(parseInt(box[i].innerHTML))){
            box[i].classList.add("tnt")
        }

    }
    let fine = document.getElementById('fine_gioco');
    fine.classList.remove('fine');
    fine.classList.add('block');
}

