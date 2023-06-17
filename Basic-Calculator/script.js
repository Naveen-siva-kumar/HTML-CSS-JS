const buttonsEl = document.querySelectorAll("button");

const inputFieldEl = document.getElementById("result");

for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", () => {
    const buttonValue = buttonsEl[i].textContent;
    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } else if(buttonValue === "x"){
        reduceExpressionSizeByOne();
    }else {
      appendValue(buttonValue);
    }
  });
}

function validate(evt) {
    var theEvent = evt || window.event;
  
    
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    
    var regex = /[0-9]|\(|\)|\.|\+|\-|\*|\/|\x/;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }

function clearResult() {
  inputFieldEl.value = "";
}

function calculateResult() {
  inputFieldEl.value = eval(inputFieldEl.value);
}

function appendValue(buttonValue) {

    inputFieldEl.value += buttonValue;
  
}
function reduceExpressionSizeByOne(){
    let length = inputFieldEl.value.length;
    if(length !== 0){
        inputFieldEl.value = inputFieldEl.value.slice(0,length-1);
    }
     
}

