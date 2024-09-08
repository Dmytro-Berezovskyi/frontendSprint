const linkDropdown = document.querySelectorAll(".link__dropdown");
const dropdownWrapper = document.querySelectorAll('.dropdown-wrapper');

console.log(linkDropdown);
console.log(dropdownWrapper);

linkDropdown.forEach((link, index) => {
    link.addEventListener("click", function() {
        dropdownWrapper[index].classList.toggle('active');
        linkDropdown[index].classList.toggle('active');
    })
});