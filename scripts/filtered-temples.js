const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Bogotá Colombia",
    location: "Bogotá, Distrito Capital, Colombia",
    dedicated: "1999, April, 24",
    area: 53500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bogota-colombia/400x250/bogota-colombia-temple-lds-1029726-wallpaper.jpg",
  },
  {
    templeName: "Santiago Chile",
    location: "Santiago, Region Metropolitana (Santiago), Chile",
    dedicated: "1983, September, 15",
    area: 20831,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/santiago-chile/400x250/santiago-chile-lds-temple-1085562-wallpaper.jpg",
  },
  {
    templeName: "São Paulo Brazil",
    location: "São Paulo–SP, Brazil",
    dedicated: "1978, October, 30",
    area: 59246,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/400x250/sao-paulo-brazil-temple-lds-187030-wallpaper.jpg",
  },
  // Add more temple objects here...
];

function getDetailTempleCardElement(location, dedicated, area) {
  const ulElement = document.createElement("ul");
  const details = [
    { label: "Location", value: location },
    { label: "Dedicated", value: dedicated },
    { label: "Size", value: `${area} sq ft` },
  ];
  details.forEach((detail) => {
    const liElement = document.createElement("li");
    liElement.innerHTML = `<span>${detail.label}:</span> ${detail.value}`;
    ulElement.appendChild(liElement);
  });
  return ulElement;
}

function getImageTempleCardElement(imageUrl, templeName) {
  const pictureElement = document.createElement("picture");
  const imgElement = document.createElement("img");
  imgElement.src = imageUrl;
  imgElement.title = templeName;
  imgElement.alt = `Image of ${templeName}`;
  imgElement.width = 400;
  imgElement.height = 250;
  imgElement.lazyLoad = true;
  pictureElement.appendChild(imgElement);
  return pictureElement;
}

function getHeaderTempleCardElement(templeName) {
  const h3Element = document.createElement("h3");
  h3Element.textContent = templeName;
  return h3Element;
}

function createTempleCard(temple) {
  const cardElement = document.createElement("div");
  cardElement.classList.add("temple-card");
  cardElement.appendChild(getHeaderTempleCardElement(temple.templeName));
  cardElement.appendChild(
    getDetailTempleCardElement(temple.location, temple.dedicated, temple.area)
  );
  cardElement.appendChild(
    getImageTempleCardElement(temple.imageUrl, temple.templeName)
  );
  return cardElement;
}

function displayFilteredTemples(temples) {
  const templeContainer = document.getElementById("temple-container");
  templeContainer.innerHTML = ""; // Clear previous content
  temples.forEach((temple) => {
    const templeCard = createTempleCard(temple);
    templeContainer.appendChild(templeCard);
  });
}

// Old – temples built before 1900
// New – temples built after 2000
// Large – temples larger than 90,000 square feet
// Small – temples smaller than 10,000 square feet
// Home – displays all the temples stored in the array.

// <a href="/temples.html">Ho
// <a href="#old">Old</a>
// <a href="#new">New</a>
// <a href="#large">Large</a>
// <a href="#small">Small</a>

function filterTemplesByAnchor() {
  currentAnchor = document.location.hash;
  // fallback
  if (currentAnchor === "") {
    currentAnchor = "#home";
  }
  const filteredTemples = temples.filter((temple) => {
    switch (currentAnchor) {
      case "#old":
        return new Date(temple.dedicated).getFullYear() < 1900;
      case "#new":
        return new Date(temple.dedicated).getFullYear() > 2000;
      case "#large":
        return temple.area > 90000;
      case "#small":
        return temple.area < 10000;
      default:
        return true; // Home or any other case
    }
  });
  displayFilteredTemples(filteredTemples);
}

document.addEventListener("DOMContentLoaded", function () {
  const today = new Date();
  const buttonMenuMobileElement = document.getElementById("menu-mobile");
  const menuElement = document.getElementById("menu");
  const copyRightElement = document.getElementById("copyright");
  const lastChangeElement = document.getElementById("lastChangeFile");

  copyRightElement.textContent = `© ${today.getFullYear()} - 🚀 Julian A. Cuervo 🌐`;
  lastChangeElement.textContent = `Last Modification: ${document.lastModified}`;

  buttonMenuMobileElement.addEventListener("click", function () {
    menuElement.classList.toggle("active");
  });

  filterTemplesByAnchor();
  const anchors = document.querySelectorAll("a.filter-link");
  anchors.forEach((anchor) => {
    anchor.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default anchor behavior
      document.location.hash = this.getAttribute("href");
      filterTemplesByAnchor();
    });
  });
});
