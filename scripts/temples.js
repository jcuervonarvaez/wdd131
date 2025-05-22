const today = new Date();
const buttonMenuMobileElement = document.getElementById("menu-mobile")
const menuElement = document.getElementById("menu")
const copyRightElement = document.getElementById("copyright");
const lastChangeElement = document.getElementById("lastChangeFile");

copyRightElement.textContent = `© ${today.getFullYear()} - 🚀 Julian A. Cuervo 🌐`
lastChangeElement.textContent = `Last Modification: ${document.lastModified}`;

buttonMenuMobileElement.addEventListener('click', function(){
    menuElement.classList.toggle('active')
})
