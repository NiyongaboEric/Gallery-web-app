//check user read our privacy policy
document.querySelector(".checkbox").addEventListener("click", isPolicyCheked);
function isPolicyCheked(){
	let isChecked = document.querySelector(".checkbox").value;

	if (isChecked === "on"){
		return document.querySelector(".checkbox").value = "true";
	}
	if (isChecked ==="true"){
		return document.querySelector(".checkbox").value = "false";
	}
	if (isChecked === "false") {
		return document.querySelector(".checkbox").value = "true";
	}
}

function validate(){
	let first_name = document.querySelector(".first_name").value;
	let last_name = document.querySelector(".last_name").value;
	let address = document.querySelector(".address").value;
	let email = document.querySelector(".email").value;
	let password = document.querySelector(".password").value;
	let confirm_password = document.querySelector(".confirm_password").value;
	let checkbox = document.querySelector(".checkbox").value;

	error = (err) => {
		document.querySelector(".input_errors").innerHTML = `${err}`;
		document.querySelector(".input_errors").style.color = "red";
	}

	if (first_name === "") {
		error("first name is required *");
		return false;
	}

	if (last_name === "") {
		error("last name is required *");
		return false;
	}

	isEmailValid = (email) => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	} 

	if (address === "") {
		error("address is required *");
		return false;
	}

	if (email === "" || isEmailValid(email) === false) {
		error("a valid email is required *");
		return false;
	}
	
	isPasswordMatch = true ? password === confirm_password : false;
	if(!isPasswordMatch){
		error("a password should match *");
		return false;
	}

	isPwdLengthZero = true ? password.length === 0 || confirm_password.length === 0 : false;
	if(isPwdLengthZero){
		error("a password length should be greater than zero *");
		return false;
	}

	if(checkbox !== "true"){
		error("you must read our privacy *");
		return false;	
	}
	return true;
}