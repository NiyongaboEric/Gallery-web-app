
let input = document.querySelector('.file');
input.addEventListener('change', readFile, false);

function readFile (e) {
	const reader = new FileReader();
	reader.onload = function() {
		let image = document.querySelector(".verify_image");
		image.src = reader.result;
		document.querySelector(".verify_image").style.width = "200px";
		document.querySelector(".verify_image").style.width = "200px";
	}
	reader.readAsDataURL(input.files[0]);
}

validate =() => {
	let file_image = document.querySelector(".file").value;
	let description = document.querySelector(".description").value;
	//upload image_src to server
	let image_src = document.querySelector(".verify_image").src;
	//show error
	err = (msg) => {
		document.querySelector(".input_errors").innerHTML = `${msg}`;
		document.querySelector(".input_errors").style.color = "red";
	}
	if (file_image.length === 0){
		err("image is required");
		return false;
	}
	if (description.length === 0){
		err("a description is required");
		return false
	}
	return true;
}
