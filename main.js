const linkDropdown = document.querySelectorAll(".link__dropdown");
const dropdownWrapper = document.querySelectorAll('.dropdown-wrapper');
const dropdown = document.querySelectorAll('#dr-language li');

linkDropdown.forEach((link, index) => {
    link.addEventListener("click", function() {
        dropdownWrapper[index].classList.toggle('active');
        linkDropdown[index].classList.toggle('active');
    })
});

dropdown[0].addEventListener("click", () => {
    if (linkDropdown[1].textContent === "Ukr") {
        linkDropdown[1].textContent = dropdown[0].textContent;
        dropdown[0].textContent = "Ukr";
    } else {
        linkDropdown[1].textContent = dropdown[0].textContent;
        dropdown[0].textContent = "En";
    }
});

const discoverBtn= document.querySelectorAll(".discover__button");
const discoverCards = document.querySelectorAll(".discover__cards");

discoverBtn.forEach(button => {
    button.addEventListener("click", function() {
        discoverBtn.forEach(button => {
            button.classList.remove('active');
        })

        const cardFor = button.dataset.for;
        discoverCards.forEach(card => {
            card.classList.remove('active');
        });

        discoverCards.forEach( card => {
           const cardTab = card.dataset.tab;
           if (cardTab === cardFor) {
               card.classList.add('active');
           }
        });

        button.classList.add('active');
    })
});

const burgerBtn = document.querySelector('.burger-menu');
const burgerDropdownWrapper = document.querySelector('.burger__dropdown-wrapper');

burgerBtn.addEventListener("click", function() {
    burgerBtn.classList.toggle('active');
    burgerDropdownWrapper.classList.toggle('active');
})

const sitemapTitle = document.querySelectorAll('.sitemap__title');
const sitemapList = document.querySelectorAll('.sitemap__list');

sitemapTitle.forEach((title, index) => {
    title.addEventListener("click", function() {
        title.classList.toggle('active');
        sitemapList[index].classList.toggle('active');
    })
});