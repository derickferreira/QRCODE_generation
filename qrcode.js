"use strict";
const main = document.querySelector(".container");
const formContainer = document.querySelector("form");
const inputURL = document.querySelector("#url_input");
const buttonURL = document.querySelector("#url_button");
const img = document.querySelector("#qr_code_img img");
console.log(buttonURL);

const generateCode = () => {
  const url = inputURL.value;
  buttonURL.value = "Generating Code...";
  img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`;
  img.addEventListener("load", (e) => {
    main.classList.add("active");
    buttonURL.value = "Code Create";
  });
};

formContainer.addEventListener("submit", (e) => {
  e.preventDefault();
  generateCode();
});

formContainer.addEventListener("keydown", (e) => {
  if ((e.key = "enter")) {
    generateCode();
  }
});

inputURL.addEventListener("keyup", (e) => {
  if (!inputURL.value) {
    main.classList.remove("active");
    buttonURL.value = "Generate QR Code"
  }
});5