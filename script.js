//this is single line comment in JavaScript

/*this is a 
multi-line
comment in JavaScript*/

var howl = 0;
var spirited = 0;
var mononoke = 0;
var castle = 0;
var ponyo = 0;

const result = [];

function findmax(a, b, c, d, e) {
  return Math.max(a, Math.max(b, Math.max(c, Math.max(d, e))));
}

function match(ans) {
  if (ans == "Howl") {
    howl++;
  }
  if (ans == "Spirited") {
    spirited++;
  }
  if (ans == "Mononoke") {
    mononoke++;
  }
  if (ans == "Castle") {
    castle++;
  }
  if (ans == "Ponyo") {
    ponyo++;
  }
}

function processinput() {
  var q1a1 = document.getElementById("q1a1");
  var q1a2 = document.getElementById("q1a2");
  var q1a3 = document.getElementById("q1a3");
  var q1a4 = document.getElementById("q1a4");

  if (q1a1.checked) {
    spirited += 2;
    howl += 1;
  }
  else if (q1a2.checked) {
    castle += 2;
    ponyo += 1;
  }
  else if (q1a3.checked) {
    howl += 2;
    castle += 1;
  }
  else if (q1a4.checked) {
    mononoke += 2;
    castle += 1;
  }

  var q2a1 = document.getElementById("q2a1");
  var q2a2 = document.getElementById("q2a2");
  var q2a3 = document.getElementById("q2a3");
  var q2a4 = document.getElementById("q2a4");

  if (q2a1.checked) {
    ponyo += 2;
  }
  else if (q2a2.checked) {
    mononoke += 2;
    spirited += 1;
  }
  else if (q2a3.checked) {
    castle += 2;
    howl += 1;
  }
  else if (q2a4.checked) {
    spirited += 2;
  }

  var q3a1 = document.getElementById("q3a1");
  var q3a2 = document.getElementById("q3a2");
  var q3a3 = document.getElementById("q3a3");
  var q3a4 = document.getElementById("q3a4");

  if (q3a1.checked) {
    howl += 2;
    castle += 1;
  }
  else if (q3a2.checked) {
    spirited += 2;
    ponyo += 1;
  }
  else if (q3a3.checked) {
    mononoke += 2;
  }
  else if (q3a4.checked) {
    ponyo += 2;
  }

  var q4a1 = document.getElementById("q4a1");
  var q4a2 = document.getElementById("q4a2");
  var q4a3 = document.getElementById("q4a3");
  var q4a4 = document.getElementById("q4a4");

  if (q4a1.checked) {
    castle += 2;
    howl += 1;
  }
  else if (q4a2.checked) {
    ponyo += 2;
    spirited += 1;
  }
  else if (q4a3.checked) {
    howl += 2;
    mononoke += 1;
  }
  else if (q4a4.checked) {
    mononoke += 2;
  }

}
document.getElementById("get_results").addEventListener("click", displayresult);

function displayresult() {
  console.log("Hello");
  processinput();

  var max = findmax(howl, spirited, mononoke, castle, ponyo);
  if (max == howl) {
    result.push("Howl's Moving Castle");
    howl = true;
  }
  else {
    howl = false;
  }
  if (max == spirited) {
    result.push("Spirited Away");
    spirited = true;
  }
  else {
    spirited = false;
  }
  if (max == mononoke) {
    result.push("Mononoke Hime");
    mononoke = true;
  }
  else {
    mononoke = false;
  }
  if (max == castle) {
    result.push("Castle in The Sky");
    castle = true;
  }
  else {
    castle = false;
  }
  if (max == ponyo) {
    result.push("Ponyo");
    ponyo = true;
  }
  else {
    ponyo = false;
  }

  var button = document.getElementById("get_results");
  button.style.display = "none";

  var results = document.getElementById("results");
  if (result.length == 1) {
    results.innerHTML = "Your movie is: ".concat(result.join(", "));
  }
  else {
    results.innerHTML = "Your movies are: ".concat(result.join(", "));
  }
  results.style.display = "inline-block";
  results.width = "100%";


  rw = document.getElementById("results_wrapper");
  rw.style.margin = "10vw 15vw";

  var src = document.getElementById("result_image");
  src.style.display = "block"

  if (howl) {
    var img1 = document.createElement("img");
    img1.src = "Howl.jpg";
    img1.className = "end_image";
    src.style.width = (img1.style.width + parseInt(src.style.width)).toString();
    src.appendChild(img1);
  }

  if (ponyo) {
    var img2 = document.createElement("img");
    img2.src = "Ponyo.jpg";
    img2.className = "end_image";
    src.style.width = (img2.style.width + parseInt(src.style.width)).toString();
    src.appendChild(img2);
  }
  if (mononoke) {
    var img3 = document.createElement("img");
    img3.src = "Mononoke.jpg";
    img3.className = "end_image";
    src.style.width = (img3.style.width + parseInt(src.style.width)).toString();
    src.appendChild(img3);
  }
  if (spirited) {
    var img4 = document.createElement("img");
    img4.src = "Spirited.jpg";
    img4.className = "end_image";
    src.style.width = (img4.style.width + parseInt(src.style.width)).toString();
    src.appendChild(img4);
  }
  if (castle) {
    var img5 = document.createElement("img");
    img5.src = "Castle.jpg";
    img5.className = "end_image";
    src.style.width = (img5.style.width + parseInt(src.style.width)).toString();
    src.appendChild(img5);
  }
}



