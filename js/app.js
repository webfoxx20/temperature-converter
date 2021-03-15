//global variable
// btn
const convertToCelsiusBtn = document.getElementById('convertToCelsiusBtn');
const convertToFahrenhietBtn = document.getElementById('convertToFahrenhietBtn');

//forms
const calculateFahrenhietForm = document.querySelector('#fahrenhietToCelsius')
const calculateCelciusForm = document.querySelector('#celsiusToFahrenhiet');

// calculated variable
const calculateFahrenhiet = document.querySelector('#CalculateFahrenhiet');
const calculateCelcius = document.querySelector('#calculateCelcius');
//result variable
const result = document.querySelector('#result');
const loadingGif = document.querySelector('#gif');
const celsiusAnswer = document.querySelector(' #answerToCelcius');
const fahrenhietAnswer = document.querySelector('#answerTofahrenhiet');




//show fahrenhiet to celsius form

convertToCelsiusBtn.addEventListener('click', () => {
  convertToFahrenhietBtn.classList.remove('active');
  convertToCelsiusBtn.classList.remove('not-active')
  hideResult(loadingGif, 'none');
  fahrenhietAnswer.style.display = 'none';
  showHide('block', 'none', true);
  document.querySelector('#celsius-form').value = '';

})

function addColor() {

}
convertToFahrenhietBtn.addEventListener('click', () => {
  // convertToFahrenhietBtn.classList.remove('btn-dark');
  convertToCelsiusBtn.classList.add('not-active');
  convertToFahrenhietBtn.classList.add('active');
  hideResult(loadingGif, 'none');
  celsiusAnswer.style.display = 'none';
  showHide('block', 'none', false);
  document.querySelector('#Fahrenheit-form').value = '';
})


calculateFahrenhiet.addEventListener('click', (e) => {
  // result hidden
  hideResult(celsiusAnswer, 'none');
  celsiusAnswer.style.display = 'none';
  // take the value of the input
  const fahrenhietInput = document.querySelector('#Fahrenheit-form').value;

  //convert the value from string to number
  const fahrenhietValue = parseFloat(fahrenhietInput);
  let fahrenhietToCelsius = (fahrenhietValue - 32) / 1.8;


  if (isFinite(fahrenhietToCelsius)) {
    fahrenhietToCelsius = fahrenhietToCelsius.toFixed(2)
    let celsiusValue = document.querySelector('#celsiusAnswer')
    celsiusValue.value = fahrenhietToCelsius;
    //clear input 
    // document.querySelector('#Fahrenheit-form').value = '';
    //show result
    displayResult('block', true);
    setTimeout(() => {
      //hide the gif
      displayResult('none', false);
      //show the result
      celsiusAnswer.style.display = 'block';
    }, 2000);



  } else {
    showError('Please input valid numbers');
  }



  e.preventDefault();
})



// convert celsius to fahrenhiet

calculateCelcius.addEventListener('click', (e) => {
  // result hidden
  hideResult(fahrenhietAnswer, 'none');

  // take the value of the input
  const celsiusInput = document.querySelector('#celsius-form').value;

  //convert the value from string to number
  const celsiusValue = parseFloat(celsiusInput);
  console.log(celsiusValue)
  let calculatedFahrenhiet = (celsiusValue * 1.8) + 32;




  if (isFinite(calculatedFahrenhiet)) {
    calculatedFahrenhiet = calculatedFahrenhiet.toFixed(2)
    let celsiusAnswer = document.querySelector('#fahrenhietAnswer')
    console.log(celsiusAnswer);
    celsiusAnswer.value = calculatedFahrenhiet;

    // clear input 
    // document.querySelector('#celsius-form').value = '';
    //show result
    displayResult('block', true);
    setTimeout(() => {
      //hide the gif
      displayResult('none', false)
      //show the result
      fahrenhietAnswer.style.display = 'block';
    }, 2000)



  } else {
    showError('Please input valid numbers');
  }



  e.preventDefault();
})

function showError(error) {
  let div = document.createElement('div');
  div.style.background = 'red';
  // div.style.marginBottom = '20px';
  // div.style.marginTop = '20px'
  div.className = 'error';

  div.appendChild(document.createTextNode(error));
  console.log(div);
  //after
  const afterDiv = document.querySelector('#converterContainer');
  //before
  const beforeDiv = document.querySelector('.card');

  beforeDiv.insertBefore(div, afterDiv);
  setTimeout(() => {
    div.style.display = 'none';
  }, 1500)

}


//display function

function displayResult(block, display) {
  if (display) {
    result.style.display = block;
    loadingGif.style.display = block;
  } else {
    loadingGif.style.display = block;
  }
}

// hide result

function hideResult(varName, display, ) {

  result.style.display = display;
  varName.style.display = display;
}

//show and hide form
function showHide(show, hide, display) {
  if (display) {
    calculateFahrenhietForm.style.display = show;
    calculateCelciusForm.style.display = hide;
  } else {
    calculateCelciusForm.style.display = show;
    calculateFahrenhietForm.style.display = hide;
  }

}