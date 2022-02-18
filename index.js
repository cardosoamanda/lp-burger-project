//Declarando Variáveis

var toggleMenu = document.querySelectorAll('.b-toggle-menu');
var menuMobile = document.querySelector('.b-menu-mob');
var btnMenuMobIcon = document.querySelector('.b-btn-menu-mob ion-icon');
var index = 0;


//Abrindo e Fechando o Menu Mobile
for (var m = 0; m < toggleMenu.length; m++) {
    toggleMenu[m].addEventListener('click', function () {
        var overlay = document.querySelector('.b-menu-overlay');
        overlay.classList.toggle('b-is-open');
        menuMobile.classList.toggle('b-menu-is-closed');
        menuMobile.classList.toggle('b-menu-is-open');

        var icon = btnMenuMobIcon.getAttribute('name');

        if (icon === 'menu') {
            btnMenuMobIcon.setAttribute('name', 'close');
        } else {
            btnMenuMobIcon.setAttribute('name', 'menu');
        }

    });
}

//Fazendo o slide de passagem automática

var index = 0;

function slide() {
    var imgArr = document.getElementById('b-imgContainer').getElementsByTagName('img');

    var tamanhoTotal = imgArr.length - 1;
    var indexAnterior = index - 1;

    if (index > tamanhoTotal) {
        index = 0;
        indexAnterior = tamanhoTotal;
        imgArr[indexAnterior].style.display = "none";
        imgArr[index].style.display = "block";
    }
    else {
        if (index == 0) {
            indexAnterior = tamanhoTotal;
        }
        imgArr[indexAnterior].style.display = "none";
        imgArr[index].style.display = "block";
    }

    index++;
}

setInterval(slide, 2000); 