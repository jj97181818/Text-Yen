function Addabar(){
	var input = document.createElement('input');
	input.type = 'text';
	document.getElementById('added').appendChild(input);
}

function main() {
	var addbottom = document.getElementById('add');
	addbottom.addEventListener("click",Addabar,false);
}

window.onload = main;
