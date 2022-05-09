const menuButton = document.getElementById("menuButton"),
  sideList = document.getElementById("sideList"),
  menuCloseButton = document.getElementById("closeMenu");

function menuShowHide() {
  sideList.classList.toggle("hidden");
  sideList.classList.toggle("shown");
}

menuButton.onclick = function () {
  menuShowHide();
};

menuCloseButton.onclick = function () {
  menuShowHide();
};

/* getting a desert data from JSON file  */
const desertTitle = document.getElementById("desertTitle"),
  desertHead = document.getElementById("desertName"),
  desertParagraph = document.getElementById("desertParagraph"),
  desertImg = document.getElementById("desertImg"),
  dohaButton = document.getElementById("doha"),
  saharaButton = document.getElementById("sahara"),
  victoriaButton = document.getElementById("victoria"),
  kalahariButton = document.getElementById("kalahari"),
  deserts = document.getElementById("deserts"),
  desertsChildren = deserts.children;
const httpRequest = new XMLHttpRequest();

function getDesertData(id) {
  if (httpRequest.readyState === 4) {
    let jsObject = JSON.parse(httpRequest.responseText);
    desertTitle.innerHTML = `<span> ${jsObject[id].num} </span> ${jsObject[id].title}`;
    desertName.innerHTML = jsObject[id].title;
    desertImg.innerHTML = `<img src="${jsObject[id].src}"> `;
    desertParagraph.innerHTML = `<span>${jsObject[id].boldText}</span> ${jsObject[id].etc} `;
  }
}

httpRequest.open("GET", "index.json");
httpRequest.send();

// if we click a specific button remove the active from it's default to this.

dohaButton.onclick = function () {
  for (button of desertsChildren) {
    button.classList.remove("active");
  }
  this.classList.add("active");

  httpRequest.addEventListener("readystatechange", getDesertData("doha"));
};

saharaButton.onclick = function () {
  for (button of desertsChildren) {
    button.classList.remove("active");
  }
  this.classList.add("active");
  httpRequest.addEventListener("readystatechange", getDesertData("sahara"));
};

kalahariButton.onclick = function () {
  for (button of desertsChildren) {
    button.classList.remove("active");
  }
  this.classList.add("active");
  httpRequest.addEventListener("readystatechange", getDesertData("kalahari"));
};

victoriaButton.onclick = function () {
  for (button of desertsChildren) {
    button.classList.remove("active");
  }
  this.classList.add("active");
  httpRequest.addEventListener("readystatechange", getDesertData("victoria"));
};

/*
****************************************
****************************************
****************************************
****************************************

MODALS 
*/

const modal = document.getElementById("modal"),
  modalHead = document.getElementById("modalHead"),
  modalContent = document.getElementById("modalContent"),
  termsLink = document.getElementById("terms"),
  missionLink = document.getElementById("mission"),
  rightsLink = document.getElementById("copyrights");

const linksHttpRequest = new XMLHttpRequest();

function getLinkData(id) {
  if (linksHttpRequest.readyState === 4) {
    modal.classList.add("shownModal");
    modal.classList.remove("hiddenModal");
    let jsObject = JSON.parse(linksHttpRequest.responseText);

    console.log(linksHttpRequest.responseText);
    modalHead.innerHTML = jsObject[id].modalHead;
    modalImg.src = jsObject[id].modalImg;
    modalContent.innerHTML = jsObject[id].modalContent;
  }
}

linksHttpRequest.open("GET", "modals.json");
linksHttpRequest.send();

termsLink.onclick = function () {
  this.href = "#terms";
  getLinkData("terms");
};

missionLink.onclick = function () {
  this.href = "#mission";
  getLinkData("mission");
};

rightsLink.onclick = function () {
  this.href = "#copyrights";

  getLinkData("copyrights");
};

/* *******************************
*******************************
*******************************
*******************************

CLOSE BUTTON

***********************************
***********************************
*********************************** */

const modalCloseButton = document.getElementById("closeModal");

modalCloseButton.onclick = function () {
  modal.classList.remove("shownModal");
  modal.classList.add("hiddenModal");
};
