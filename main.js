const linkDropdown = document.querySelectorAll(".link__dropdown");
const dropdownWrapper = document.querySelectorAll('.dropdown-wrapper');

linkDropdown.forEach((link, index) => {
    link.addEventListener("click", function() {
        dropdownWrapper[index].classList.toggle('active');
        linkDropdown[index].classList.toggle('active');
    })
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