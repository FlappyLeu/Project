// step1
const xhr = new XMLHttpRequest();

// step2
xhr.onreadystatechange = function () {
  const navbar = document.querySelector("#navbar");

  navbar.innerHTML = this.responseText;
};
// step3
xhr.open("GET", "/navbar.html", true);

// step4
xhr.send();
