var btnToggle = document.querySelector('#btn')
var icon = document.querySelector('#icon')
var sidebar = document.querySelector('.coluna1')


btnToggle.addEventListener('click', function () {
    sidebar.classList.toggle('hiddenSuave')

    if (icon.classList == "fa-solid fa-arrow-left") {
        $(icon).removeClass("fa-solid fa-arrow-left");
        $(icon).addClass("fa-solid fa-arrow-right");

    } else if (icon.classList == "fa-solid fa-arrow-right") {
        $(icon).removeClass("fa-solid fa-arrow-right");
        $(icon).addClass("fa-solid fa-arrow-left");
    }
    console.log("amogs")
    console.log(icon)
})

//concluir foi a melhor parte, ficou massa