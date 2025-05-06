const keys = document.querySelectorAll('.key');
const display_input = document.querySelector('.display .input');
const display_output = document.querySelector('.display .output');

let input = "";
let result = "";
for (let key of keys) {
	const value = key.dataset.key;
	
	key.addEventListener('click', () => {
		if (value == "clear") {
			input = "";
			result="";
			display_input.innerHTML = "0";
			display_output.innerHTML = "";
		} else if (value == "backspace") {
			input = input.slice(0, -1);
			if(input == "")
			display_input.innerHTML ="0";
			else
			display_input.innerHTML =input;
		display_output.innerHTML ="";
		} else if (value == "=") {
			try{
			input =  display_input.innerHTML;
			result = eval(input);
		
			if(result == undefined){
				display_input.innerHTML ="";
				display_output.innerHTML = "Error";
			}
			else{
				if(result%1 !=0){
				  result = Math.round(result * 100) / 100;
				}
				display_output.innerHTML = result;
			}
			}
			catch(error){
				display_input.innerHTML ="";
				display_output.innerHTML = "Error";
			}
			
		}
		else if ((value == "+" && display_output.innerHTML!="") || (value == "*" && display_output.innerHTML!="") || (value == "/" && display_output.innerHTML!="")
			|| (value == "-" && display_output.innerHTML!="")) {
			display_input.innerHTML = "";
			display_input.innerHTML = display_output.innerHTML+value;
			input =  display_input.innerHTML;
			display_output.innerHTML = "";
		}
		else if ((value == "0" && display_output.innerHTML!="") || (value == "1" && display_output.innerHTML!="") || (value == "2" && display_output.innerHTML!="")
			|| (value == "3" && display_output.innerHTML!="") || (value == "4" && display_output.innerHTML!="") || (value == "5" && display_output.innerHTML!="")
			|| (value == "6" && display_output.innerHTML!="") || (value == "7" && display_output.innerHTML!="") || (value == "8" && display_output.innerHTML!="")
			|| (value == "9" && display_output.innerHTML!="")) {
			display_input.innerHTML = "";
			display_input.innerHTML = value;
			input =  display_input.innerHTML;
			display_output.innerHTML = "";
		}
		else if (value) {
				input += value;
				display_input.innerHTML = input;
		}
	});
	
}

document.onkeyup = function(event) {

	var key_press = String.fromCharCode(event.keyCode);
	var key_code = event.keyCode;
	var keys = document.querySelectorAll('.key');
	var display_input = document.querySelector('.display .input');
	var display_output = document.querySelector('.display .output');
	var inputVal = display_input.innerHTML;
	var lastChar = inputVal[inputVal.length - 1];
	var operators = ['+', '-', 'x', '÷', '^'];

	if(display_input.innerHTML == "0")
	  display_input.innerHTML = "";
    if(key_press==1 || key_press==2 || (key_press==3 || key_code == 32) || key_press==4 || key_press==5 || (key_press==6 && event.shiftKey == false) || key_press==7
	|| (key_press==8 && event.shiftKey == false) || key_press==9 || key_press==0) {
      display_input.innerHTML += key_press;
	}
	
	if(display_output.innerHTML!="" && (key_press==1 || key_press==2 || (key_press==3 || key_code == 32) || key_press==4 || key_press==5 || (key_press==6 && event.shiftKey == false) || key_press==7
	|| (key_press==8 && event.shiftKey == false) || key_press==9 || key_press==0)) {
			display_input.innerHTML = "";
			display_input.innerHTML = key_press;
			input =  display_input.innerHTML;
			display_output.innerHTML = "";
	}

    if ((inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 187 && event.shiftKey) || (key_code == 107) || (key_code == 61 && event.shiftKey)) {
      document.querySelector('.display .input').innerHTML += '+';
	}
    if ((inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 189 && event.shiftKey) || (inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 107)) {
      document.querySelector('.display .input').innerHTML += '-';
	}
    if ((inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 56 && event.shiftKey) || (inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 106)) {
      document.querySelector('.display .input').innerHTML += '*';
	}
    if ((inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 191) || (inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 111)) {
      document.querySelector('.display .input').innerHTML += '/';
	}
    if (display_output.innerHTML!="" && ((inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 187 && event.shiftKey) || (key_code == 107) || (key_code == 61 && event.shiftKey))) {
			display_input.innerHTML = "";
			display_input.innerHTML = display_output.innerHTML+'+';
			input =  display_input.innerHTML;
			display_output.innerHTML = "";
	}
    if (display_output.innerHTML!="" && ((inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 189 && event.shiftKey) || (inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 107))) {
			display_input.innerHTML = "";
			display_input.innerHTML = display_output.innerHTML+'-';
			input =  display_input.innerHTML;
			display_output.innerHTML = "";
	}
    if (display_output.innerHTML!="" && ((inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 56 && event.shiftKey) || (inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 106))) {
			display_input.innerHTML = "";
			display_input.innerHTML = display_output.innerHTML+'*';
			input =  display_input.innerHTML;
			display_output.innerHTML = "";
	}
    if (display_output.innerHTML!="" && ((inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 191) || (inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 111))) {
			display_input.innerHTML = "";
			display_input.innerHTML = display_output.innerHTML+'/';
			input =  display_input.innerHTML;
			display_output.innerHTML = "";
	}
    if(key_code==13 || key_code==187 && event.shiftKey == false) {
		try{
			result = eval(inputVal);
		
			if(result == undefined){
				display_input.innerHTML ="";
				display_output.innerHTML = "Error";
			}
			else{
				if(result%1 !=0){
				  result = Math.round(result * 100) / 100;
				}
				display_output.innerHTML = result;
			}
			}
			catch(error){
				display_input.innerHTML ="";
				display_output.innerHTML = "Error";
			}
	}
    if(key_code==8 || key_code==46) {
			input =  display_input.innerHTML.slice(0, -1);
			if(input == "")
				display_input.innerHTML ="0";
			else
				display_input.innerHTML =input;
			display_output.innerHTML =display_output.innerHTML.slice(0, -1);
	}
}

