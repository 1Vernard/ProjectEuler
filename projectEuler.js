
  // Add event listeners when DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Attach event listener to the form within the Problem 1 tab
  document.getElementById("nav-problem1").querySelector('.input-form').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission

      // Retrieve user input
      const userInput = parseInt(document.getElementById('Input').value);

      // Check if userInput is a valid number
      if (!isNaN(userInput) && userInput > 0) {
          const result = multiplesOf3or5(userInput);
          
          // Display the result to the user
          document.getElementById('result1').textContent = `The sum of all multiples of three or five below ${userInput} is: ${result}`;
      } else {
          // Display error message if userInput is invalid
          document.getElementById('result1').textContent = 'Please enter a valid positive number.';
      }
  });

  // Attach event listener to the form within the Problem 2 tab
  document.getElementById("nav-profile").querySelector('.input-form').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission

      // Retrieve user input
      const userInput = parseInt(document.getElementById('Input2').value);

      // Check if userInput is a valid number
      if (!isNaN(userInput) && userInput > 0) {
          // Calculate and display the result for Problem 2
          const sumFib =sumEvenFibonacci(userInput);
          document.getElementById('result2').textContent = `The sum of the even valued below ${userInput} is: ${sumFib}`;
      } else {
          // Display error message if userInput is invalid
          document.getElementById('result2').textContent = 'Please enter a valid positive number.';
      }
  });

  // Attach event listener to the form within the Problem 3 tab
  document.getElementById("nav-contact").querySelector('.input-form').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission

      // Retrieve user input
      const userInput = parseInt(document.getElementById('Input3').value);

      // Check if userInput is a valid number
      if (!isNaN(userInput) && userInput > 0) {
          // Calculate and display the result for Problem 3
          const largePrime = largestPrimeFactor(userInput)
          document.getElementById('result3').textContent = `The largest prime factor of ${userInput} is ${largePrime}  .`;
      } else {
          // Display error message if userInput is invalid
          document.getElementById('result3').textContent = 'Please enter a valid positive number.';
      }
  });
});

// Function to calculate the sum of multiples of 3 or 5 below a given number
function multiplesOf3or5(number){
  const arr = [];
  for(let i = 0; i < number; i++){
      arr.push(i);
  }
  const filteredArr = arr.filter(function(number){
      return number % 3 === 0 || number % 5 === 0;
  });

  const sum = filteredArr.reduce((accumulator, initialValue) => accumulator + initialValue, 0);

  return sum;
}


function sumEvenFibonacci(limit) {
  let sum = 0;
  let prev = 1;
  let curr = 2;
  
  while (curr <= limit) {
      if (curr % 2 === 0) {
          sum += curr;
      }
      
      let next = prev + curr;
      prev = curr;
      curr = next;
  }
  
  return sum;
}
function largestPrimeFactor(number) {
  // If the number is less than 2, return 0
  if (number < 2) return 0;

  // Initialize the largest factor to 1
  let largestFactor = 1;

  // Iterate from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    // While i divides number, update the largestFactor and divide number by i
    while (number % i === 0) {
      largestFactor = i;
      number /= i;
    }
  }

  // If the number is greater than 1 after the loop, it is the largest prime factor
  if (number > 1) {
    largestFactor = number;
  }

  // Return the largest prime factor
  return largestFactor;
}

