let counter = document.querySelector('.count');
let add = document.querySelector('.add-btn');
let minus = document.querySelector('.minus-btn');
let reset = document.querySelector('.reset-btn');

let i = 0;
add.onclick = () => {
    i++;
    counter.innerHTML = i;
};

minus.onclick = () => {
    i--;
    counter.innerHTML = i;
};

reset.onclick = () => {
    i = 0;
    counter.innerHTML = 0;
};