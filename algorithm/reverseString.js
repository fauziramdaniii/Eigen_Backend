// function reverse(value) {  
//     return Array.from(
//       String(value || '')
//     ).reverse().join('')
//   }

// console.log(reverse("NEGIE1"));

function reverseAlphabet(value) {
    const letters = value.match(/[A-Za-z]/g) || [];
    const numbers = value.match(/[0-9]/g) || [];
    
    const reversedLetters = letters.reverse().join('');
    
    return reversedLetters + numbers.join('');
  }
  
  console.log(reverseAlphabet("NEGIE1")); // Output: "EIGEN1"
  