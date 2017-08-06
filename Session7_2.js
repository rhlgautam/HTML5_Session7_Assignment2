/*Write a helper Note by creating a form with field as name, age, city. Use a closure
concept which on by click to text field it should display the helpful note for as follows:
name as “Please input the username”
Age as “Please input the age”
City as “Please input the city” */

function help(controlName){
	var text= textHelp(controlName);

	var pHelper= document.getElementById("helper");
	pHelper.innerHTML = text();
	pHelper.style.display="block";
}


function textHelp(textField){

	this.textField= textField;
	// Closure: inner function using variable of outer function and parameter of outer function to retun the message.
	return function helperText(){
		return "Please input the " + textField;
	}
}




