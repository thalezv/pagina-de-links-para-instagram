let button_action = document.querySelector('.button-compartilhar');
let compartilhamentos = document.querySelector('.menu-compartilhar');

button_action.addEventListener('click', function (event){
    event.stopPropagation();
    compartilhamentos.classList.toggle('hidden')
});

document.addEventListener('click', function(event){
    if (!compartilhamentos.contains(event.target)){
        compartilhamentos.classList.add('hidden')
    }
});