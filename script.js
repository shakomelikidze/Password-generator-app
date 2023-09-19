console.log('Hello World');

const password = document.querySelector('.password').textContent;
const copiedTxt = document.querySelector('.copied-txt');
const copyBtn = document.querySelector('.copy-img');
const slider = document.querySelector('.priceslider');
const output = document.querySelector('.char-length-p');
const uppercaseLetters = document.querySelector('.uppercase-letters');
const lowercaseLetters = document.querySelector('.lowercase-letters');
const numbers = document.querySelector('.numbers');
const symbols = document.querySelector('.symbols');
const tooWeak = document.querySelector('.too-weak');
const weak = document.querySelector('.weak');
const medium = document.querySelector('.medium');
const strong = document.querySelector('.strong');
const passwordResult = document.querySelector('.password');
const generateBtn = document.querySelector('.generate-button');
const passwordStrength = document.querySelector('.password-strength-scale-p');
const checkboxes = document.querySelectorAll('.checkbox-input');

// Copy button
copyBtn.addEventListener('click', ()=> {
    const textarea = document.createElement('textarea');
    textarea.textContent = password;
    console.log(textarea.textContent);
    copiedTxt.innerHTML = 'COPIED';
    copiedTxt.style.color = '#A4FFAF';
});

// slider
slider.addEventListener("input", () => {
    output.innerHTML = slider.value;
    let value = slider.value;
    slider.innerHTML = slider.value;
    slider.style.background =
      "linear-gradient(to right, #A4FFAF 0%, #A4FFAF " +
      value * 5 +
      "%, #18171F " +
      value * 5 +
      "%, #18171F 100%)";
});

// Function which generates password
generateBtn.addEventListener('click', ()=> {
    passwordGenerator();
});

function passwordGenerator() {
    copyBtn.classList.add = "position-relative";
    let characterSet = "";
  
    if (uppercaseLetters.checked) {
      characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (lowercaseLetters.checked) {
      characterSet += "abcdefghijklmnopqrstuvwxyz";
    }
    if (numbers.checked) {
      characterSet += "0123456789";
    }
    if (symbols.checked) {
      characterSet += "~!@#$%^&()_+{}[]|:;<>,>./";
    }
  
    let randomPassowrd = "";
  
    if (
      !uppercaseLetters.checked &&
      !lowercaseLetters.checked &&
      !numbers.checked &&
      !symbols.checked
    ) {
      passwordResult.innerHTML = "";
      return;
    }
  
    for (let i = 0; i < slider.value; i++) {
      const randomIndex = Math.floor(Math.random() * characterSet.length);
      randomPassowrd += characterSet[randomIndex];
    }
    passwordResult.innerText = randomPassowrd;
}





























