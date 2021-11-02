let add = document.querySelector(".add");
let minus = document.querySelector(".minus");
let reset = document.querySelector(".reset");
let counter = document.querySelector(".counter");

add.addEventListener('click',addCounter);
minus.addEventListener('click',minCounter);
reset.addEventListener('click',resetCounter);

function addCounter(){
    counter_num = counter.innerHTML
    counter.innerHTML=parseInt(counter_num)+1
}

function minCounter(){
    counter_num = counter.innerHTML
    if(counter_num == 0){
        return false
    }
    counter.innerHTML=parseInt(counter_num)-1
}

function resetCounter(){
    counter.innerHTML = 0;
    alert("reset successfully!")
}