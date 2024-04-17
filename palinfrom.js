const userInput = document.getElementById('text-input');
const checkPalindromeBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

const checkForPalindrome = input => {
  const originalInput = input; 

  if (input === '') {
    alert('Please input a value');
    return;
  }

  
  resultDiv.replaceChildren();

  const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  let resultMsg = `<strong>${originalInput}</strong> ${
    lowerCaseStr === [...lowerCaseStr].reverse().join('') ? 'is' : 'is not'
  } a palindrome.`;

  const pTag = document.createElement('p');
  pTag.className = 'user-input';
  pTag.innerHTML = resultMsg;
  resultDiv.appendChild(pTag);


  resultDiv.classList.remove('hidden');
};

checkPalindromeBtn.addEventListener('click', () => {
  checkForPalindrome(userInput.value);
  userInput.value = '';
});

userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkForPalindrome(userInput.value);
    userInput.value = '';
  }
});



/*
document.getElementById('check-btn').addEventListener('click', function() {
    var inputValue = document.getElementById('text-input').value.toLowerCase().replace(/[^a-z0-9\s]/g, ''); // Convertir en minuscules pour ignorer la casse
    var reversedValue = inputValue.split('').reverse().join(''); // Inverser la chaîne
    var resultat = document.getElementById('resultat');
    if (inputValue === ''){

        alert ('veuiller saisir une valeur')
    }
    if (inputValue === reversedValue) {
       resultat.textContent = inputValue + '  is a palindrome'; 
    } else {
        resultat.textContent = inputValue + ' is not a palindrome'; 
    }
});*/
