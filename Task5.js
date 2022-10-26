function openN(id){	
	let full = document.getElementById(id);
	let smoke = document.getElementById("smoke");
	full.style.visibility = "visible";
    smoke.style.visibility = "visible";
}
function closeN(){
	let smoke = document.getElementById("smoke");
	let full = document.getElementsByClassName("fullNews");
    smoke.style.visibility = "hidden";
	for (let i = 0; i <= 3; i++){
	full[i].style.visibility = "hidden";
	}
}