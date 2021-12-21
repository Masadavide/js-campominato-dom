let btn = document.getElementById("btn-play");

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

    let box = document.getElementsByClassName('box')
    for (i = 0; i < box.length; i++)
        box[i].addEventListener("click",function(){
            if (this.classList.contains("safe")){
                this.classList.remove("safe")
            }else{
                this.classList.add("safe")
                console.log(this.innerHTML);
            }
    })
})
