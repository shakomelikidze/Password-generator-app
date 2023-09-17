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

// Generate password
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

// Change rectangle colors

// too-weak: #F64A4A
// weak: #FB7C58
// medium: #F8CD65
// strong: #A4FFAF



// generateBtn.addEventListener('click', ()=> {
    // generate();
// });

// function countCheckedCheckboxes() {
//     let checkedCount = 0;
//     checkboxes.forEach(checkbox => {
//         if (checkbox.checked) {
//             checkedCount++;
//         }
//     });
//     return checkedCount;
// }
//     checkboxes.forEach(checkbox => {
//     checkbox.addEventListener('click', () => {
//         const checkedCount = countCheckedCheckboxes();
//         console.log(checkedCount);
//     });
// });





















//   if (checkedCount == 1) {
//     tooWeak.style.backgroundColor = '#F64A4A';
//     tooWeak.style.border = '#F64A4A';
//     passwordStrength.innerHTML = 'TOO WEAK!';
//     weak.style.backgroundColor = '#18171F';
//     weak.style.borderWidth = '2px';
//     weak.style.borderColor = '#E6E5EA';
//   }
//   if (checkedCount == 2) {
//     tooWeak.style.backgroundColor = '#FB7C58';
//     tooWeak.style.border = '#FB7C58'
//     weak.style.backgroundColor = '#FB7C58';
//     weak.style.border = '#FB7C58';
//     passwordStrength.innerHTML = 'WEAK';
//   }
//   if (checkedCount == 3) {
//     tooWeak.style.backgroundColor = ' #F8CD65';
//     tooWeak.style.border = ' #F8CD65';
//     weak.style.backgroundColor = ' #F8CD65';
//     weak.style.border = ' #F8CD65';
//     medium.style.backgroundColor = ' #F8CD65';
//     medium.style.border = ' #F8CD65';
//     passwordStrength.innerHTML = 'MEDIUM';
// }
// if (checkedCount == 4) {
//   tooWeak.style.backgroundColor = '#A4FFAF';
//   tooWeak.style.border = '#A4FFAF';
//   weak.style.backgroundColor = '#A4FFAF';
//   weak.style.border = ' #A4FFAF';
//   medium.style.backgroundColor = ' #A4FFAF';
//   medium.style.border = ' #A4FFAF';
//   strong.style.backgroundColor = '#A4FFAF';
//   strong.style.border = '#A4FFAF';
//   passwordStrength.innerHTML = 'STRONG';
// }



























