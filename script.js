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
const passwordResult = document.querySelector('.password');
const generateBtn = document.querySelector('.generate-button');
const passwordStrength = document.querySelector('.password-strength-scale-p');

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

// Generate button
generateBtn.addEventListener('click', ()=> {
    generate();
});

function generate() {
    if (uppercaseLetters.checked) {
        tooWeak.style.backgroundColor = '#F64A4A';
        tooWeak.style.border = '#F64A4A'
        passwordStrength.innerHTML = 'TOO WEAK!'
    }

    if (uppercaseLetters.checked && lowercaseLetters.checked) {
        tooWeak.style.backgroundColor = '#FB7C58';
        tooWeak.style.border = '#FB7C58'
        weak.style.backgroundColor = '#FB7C58';
        weak.style.border = '#FB7C58'
        passwordStrength.innerHTML = 'WEAK'
    }

}



















// uppercaseLetters.addEventListener('click', ()=> {
//     if (uppercaseLetters.checked) {
//         tooWeak.style.backgroundColor = '#F64A4A';
//         tooWeak.style.border = '#F64A4A'
//     } else {
//         tooWeak.style.backgroundColor = '#18171F';
//         tooWeak.style.border = '2px solid #E6E5EA';
//     }
// });

// lowercaseLetters.addEventListener('click', ()=> {
//     if (uppercaseLetters.checked && lowercaseLetters.checked) {
//         tooWeak.style.backgroundColor = '#FB7C58';
//         tooWeak.style.border = '#FB7C58'
//         weak.style.backgroundColor = '#FB7C58';
//         weak.style.border = '#FB7C58'
//     } else {
//         weak.style.backgroundColor = '#18171F';
//         weak.style.border = '2px solid #E6E5EA';
//     }
//     if (lowercaseLetters.checked) {
//         tooWeak.style.backgroundColor = '#F64A4A';
//         tooWeak.style.border = '#F64A4A'
//     } 
// })






























// Generate password
// function passwordGenerator() {
//     // copyBtn.style.display = "none";
//     let characterSet = "";
  
//     if (uppercaseLetters.checked) {
//       characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//       console.log(uppercaseLetters.checked);
//     }
//     if (lowercaseLetters.checked) {
//       characterSet += "abcdefghijklmnopqrstuvwxyz";
//     }
//     if (numbers.checked) {
//       characterSet += "0123456789";
//     }
//     if (symbols.checked) {
//       characterSet += "~!@#$%^&()_+{}[]|:;<>,>./";
//     }
  
//     let randomPassowrd = "";
  
//     if (
//       !uppercaseLetters.checked &&
//       !lowercaseLetters.checked &&
//       !numbers.checked &&
//       !symbols.checked
//     ) {
//       passwordResult.innerHTML = "";
//       return;
//     }
  
//     for (let i = 0; i < slider.value; i++) {
//       const randomIndex = Math.floor(Math.random() * characterSet.length);
//       randomPassowrd += characterSet[randomIndex];
//     }
//     passwordResult.innerText = randomPassowrd;
//   }

