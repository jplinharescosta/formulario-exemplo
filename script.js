var nome = document.getElementById('nome');
var sobrenome = document.getElementById('sobrenome');
var email = document.getElementById('email');
var experiencia = document.getElementById('experiencia');

nome.addEventListener('focus', ()=>{
    nome.style.borderColor = "#4A5F6A";
});

nome.addEventListener('blur', ()=>{
    nome.style.borderColor = "#ccc"
});

sobrenome.addEventListener('focus', ()=>{
    sobrenome.style.borderColor = "#4A5F6A";
});

sobrenome.addEventListener('blur', ()=>{
    sobrenome.style.borderColor = "ccc";
});

email.addEventListener('focus', ()=>{
    email.style.borderColor = "#4A5F6A";
})

email.addEventListener('blur', ()=>{
    email.style.borderColor = "#ccc";
})

experiencia.addEventListener('focus', ()=>{
    experiencia.style.borderColor = "#4A5F6A";
})

experiencia.addEventListener('blur', ()=>{
    experiencia.style.borderColor = "#ccc";
})