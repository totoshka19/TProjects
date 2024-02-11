const headerBtnMore = document.querySelector('.header__btn-more');
const headerContextMenu = document.querySelector('.header__context-menu');

// слушатель открытия/закрытия меню при нажатии на три точки
headerBtnMore.addEventListener('click', () => {
    headerContextMenu.classList.toggle('hidden');
});

// закрытие меню, если пользователь щелкнет за его пределами
window.addEventListener("click", function (event) {
    if (!event.target.matches(".header__btn-more")) {
        headerContextMenu.classList.add("hidden");
    }
});

