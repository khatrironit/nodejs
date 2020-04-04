var buttons = document.getElementsByClassName('btn');
var display = document.getElementById('display');
var op1 = null;
var op2 = null;
var operator = null;


for(var i=0;i<buttons.length;i++){
	buttons[i].addEventListener('click',function(){
		var value = this.getAttribute("data-value");
		if(value == "+" || value == "-" || value == "*" || value == "/"){
			if(display.textContent == ""){
				display.textContent = "ERROR";
			}
			else if(display.textContent=="+"||display.textContent=="-"||display.textContent=="*"||display.textContent=="/"){
				display.textContent = "ERROR";
			}else{
				op1 = display.textContent;
				operator = value;
				display.textContent = value;
			}
			
		}else if(value == "="){
			op2 = display.textContent;
			display.textContent = eval(op1 + operator + op2);
		}
		else if(value == "AC"){
			display.textContent = "";
			op1 = null;
			op2 = null;
			operator = null;
		}else if(value == "+/-"){
			op1 = display.textContent;
			display.textContent = eval("-" + " " + op1);
			op1 = null;
			op2 = null;
			operator = null;
		}
		else if(value == "%"){
			op1 = display.textContent;
			display.textContent = op1/100;
			op1 = null;
			op2 = null;
			operator = null;
		}
		else{
			if(display.textContent=="+"||display.textContent=="-"||display.textContent=="*"||display.textContent=="/"){
				display.textContent = "";
			}
			display.textContent += value;
		}
	});
}