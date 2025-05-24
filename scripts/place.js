const today = new Date();

const copyRightElement = document.getElementById("copyright");
const lastChangeElement = document.getElementById("lastChangeFile");

copyRightElement.textContent = `© ${today.getFullYear()} - 🚀 Julian A. Cuervo 🌐`;
lastChangeElement.textContent = `Last Modification: ${document.lastModified}`;
