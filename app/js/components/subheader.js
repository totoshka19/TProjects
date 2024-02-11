// получение кнопки в subheader
const subheaderTitle = document.querySelector('#subheader__title');

// получение кнопок в выпадающем меню subheader
const subheaderTabs = document.querySelector('.subheader-tabs');
const tabsLinks = document.querySelectorAll('.subheader-tabs__link');
let tabsLinkActive = document.querySelector('.subheader-tabs__link-active');

// слушатель открытия/закрытия subheader при нажатии на "работа с задачами"
subheaderTitle.addEventListener('click', () => {
    subheaderTabs.classList.toggle('hidden');
});

// закрытие subheader, если пользователь щелкнет за его пределами
window.addEventListener("click", function (event) {
    if (!event.target.matches("#subheader__title")) {
        if (!event.target.matches(".subheader-tabs__link")) {
            if (!event.target.matches(".subheader-tabs__inner")) {
                if (!event.target.matches(".subheader-tabs__lock img")) {
                    if (!event.target.matches(".subheader-tabs")) {
                        subheaderTabs.classList.add("hidden");
                    }
                }
            }
        }
    }
});

// переключение активной кнопки в subheader
for (let i = 0; i <tabsLinks.length; i++ ) {
    tabsLinks[i].addEventListener('click', () => {
        tabsLinkActive.classList.remove('subheader-tabs__link-active');
        tabsLinks[i].classList.add('subheader-tabs__link-active');
        tabsLinkActive = tabsLinks[i];
    });
}
