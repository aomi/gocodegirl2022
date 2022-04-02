function addElement(element) {
  document.getElementById("app").append(element);
}

export function addBigTitle(text, id) {
  var newH1 = document.createElement("h1");
  newH1.setAttribute("id", id);
  newH1.appendChild(document.createTextNode(text));
  addElement(newH1);
}

export function addSmallTitle(text, id) {
  var newH4 = document.createElement("h4");
  newH4.setAttribute("id", id);
  newH4.appendChild(document.createTextNode(text));
  addElement(newH4);
}

export function addImage(query, id) {
  var newImage = document.createElement("img");
  newImage.setAttribute("id", id);
  newImage.setAttribute(
    "src",
    `https://source.unsplash.com/random/100x100/?${query}`
  );
  addElement(newImage);
}

export function addText(text, id) {
  var newP = document.createElement("p");
  newP.setAttribute("id", id);
  newP.appendChild(document.createTextNode(text));
  addElement(newP);
}
