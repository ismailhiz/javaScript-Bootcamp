//  function topla(){
//     let number1 = parseFloat(document.getElementById('sayi1').value);
//     let number2 = parseFloat(document.getElementById('sayi2').value);
//     let sonuc = number1 + number2;
//     document.getElementById('result').innerText= sonuc;
//  }

//  function carp() {

//     let number1 = parseFloat(document.getElementById('sayi1').value);
//     let number2 = parseFloat(document.getElementById('sayi2').value);
//     let sonuc = number1*number2;
//     document.getElementById('result').innerText = 'sonuc :' + sonuc;
//  }


let currentInput = '';
let operator = '';
let firstOperand = null;
let waitingForSecondOperand = false;

function updateDisplay() {
    const display = document.getElementById('display');
    display.value = currentInput || '0';
}

function clearDisplay() {
   currentInput = '';
   operator = '';
   firstOperand = null;
   waitingForSecondOperand = false;
   updateDisplay();
}



function inputNumber(number){
   if(waitingForSecondOperand){
      currentInput = number.toString();
      waitingForSecondOperand = false;

   }else{
      currentInput = currentInput === '0' ? number.toString() : currentInput + number.toString();
   }
   updateDisplay()
}

function inputDecimal(){

      if( ! currentInput.includes('.')){
         currentInput += '.';
         
      }
   updateDisplay()


}

function inputOperator(nextOperator){
   if(firstOperand === null){
      firstOperand =parseFloat(currentInput);
   }
   else if(operator){
      const result = calculate(firstOperand, parseFloat(currentInput), operator);
      currentInput = result.toString();
      firstOperand =result;
   }
   waitingForSecondOperand = true;
   operator = nextOperator;
   updateDisplay();
}

function calculateResult(){
   if(operator && !waitingForSecondOperand){
      const result = calculate(firstOperand, parseFloat(currentInput), operator);
      currentInput = result.toString();
      firstOperand = null;
      operator = '';
      updateDisplay();
   }
}

function calculate(firstOperand, secondOperand, operator){
   switch (operator){ 
      case '+':
         return firstOperand +secondOperand;
         case '-':
            return firstOperand - secondOperand;
            case '*':
               return firstOperand * secondOperand;;
               case '/':
                  return firstOperand / secondOperand;
                  default:
                     return secondOperand;
      }
}