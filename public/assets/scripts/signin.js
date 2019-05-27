//form validation
validate = () => {
	let email = document.querySelector(".email").value;
	let password = document.querySelector(".password").value;

	error = (err) => {
		document.querySelector(".input_errors").innerHTML = `${err} is required`;
		document.querySelector(".input_errors").style.color = "red";
	}
	if (email.length === 0){
		error("email");
		return false;
	}
	if (password.length === 0){
		error("password");
		return false;
	}
	return true;
}