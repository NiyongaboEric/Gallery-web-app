//form validation
function validate () {
	let comment = document.querySelector(".comment").value;
	let rate = document.querySelector(".rate").value;

	error = (err) => {
		document.querySelector(".input_errors").innerHTML = `${err} is required`;
		document.querySelector(".input_errors").style.color = "red";
	}
	if (comment.length === 0){
		error("comment");
		return false;
	}
	if (rate.length === 0){
		error("rate");
		return false;
	}
return true;
}