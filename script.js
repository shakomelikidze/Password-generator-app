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
    passwordStrengthIndicator();
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
    for (let i = 0; i < slider.value; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        randomPassowrd += characterSet[randomIndex];
    }
    passwordResult.innerText = randomPassowrd;
  
    if (
      !uppercaseLetters.checked &&
      !lowercaseLetters.checked &&
      !numbers.checked &&
      !symbols.checked
    ) {
      passwordResult.innerHTML = "";
      medium.textContent = "";
    } else {
    passwordResult.innerText = randomPassowrd;
    }
};

function passwordStrengthIndicator() {
    let passwordStrength = 0;

    if (uppercaseLetters.checked) {
        passwordStrength++;
    }
    if (lowercaseLetters.checked) {
        passwordStrength++;
    }
    if (numbers.checked) {
        passwordStrength++;
    }
    if (symbols.checked) {
        passwordStrength++;
    }

    if (passwordStrength == 1) {
        medium.textContent = "TOO WEAK!";
        weak.style.background = "#F64A4A";
        weak.style.border = "#F64A4A";
    } else {
        weak.style.background = "";
        weak.style.border = "";
    }
    if (passwordStrength == 2) {
        medium.textContent = "WEAK";
        weak.style.background = "#FB7C58";
        weak.style.border = "#FB7C58";
        tooWeak.style.background = "#FB7C58";
        tooWeak.style.border = "#FB7C58";
    } else {
        tooWeak.style.background = "";
        tooWeak.style.border = "";
    }
    if (passwordStrength == 3) {
        medium.textContent = "MEDIUM";
        tooWeak.style.background = "#F8CD65";
        tooWeak.style.border = "#F8CD65";
        weak.style.background = "#F8CD65";
        weak.style.border = "#F8CD65";
        medium.style.background = "#F8CD65";
        medium.style.border = "#F8CD65";
    } else {
        medium.style.background = "";
        medium.style.border = "";
    }
    if (passwordStrength == 4) {
        medium.textContent = "STRONG";
        tooWeak.style.background = "#A4FFAF";
        tooWeak.style.border = "#A4FFAF";
        weak.style.background = "#A4FFAF";
        weak.style.border = "#A4FFAF";
        medium.style.background = "#A4FFAF";
        medium.style.border = "#A4FFAF";
        strong.style.background = "#A4FFAF";
        strong.style.border = "#A4FFAF";
    } else {
        strong.style.background = "";
        strong.style.border = "";
    }
};





























