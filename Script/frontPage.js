const btn1 = document.querySelector('#IDprestador');

btn1.addEventListener('click', function () {
    btn1.classList.add('active')
    btn2.classList.remove('active')
});


const btn2 = document.querySelector('#IDcliente');

btn2.addEventListener('click', function () {
    btn2.classList.add('active')
    btn1.classList.remove('active')
});


/*a ideia disso ai era deixar
 os botões do prestador/cliente em 
 active pra pessoa poder saber qual 
 apertou por ultimo.*/
//Já tinha antes mas pude
//arrumar;

//não faz mal a ausencia disso né?