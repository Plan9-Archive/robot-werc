function move(dir) {
	xmlhttp = new XMLHttpRequest();
	xmlhttp.open("POST","/move",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send('dir=' + dir);
}

function say(dir) {
	xmlhttp = new XMLHttpRequest();
	xmlhttp.open("POST","/say",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send('dir=' + dir);
}

function keypress(event) {
	if (event.keyCode == 13) {
		say(document.getElementById("tts").value);
		document.getElementById("tts").value = "";
	}
}

document.onkeypress = function(event) {
	if (event.target.nodeName.toUpperCase() == 'INPUT'
	 && event.target.type.toUpperCase() == 'TEXT')
		return;

	switch (event.keyCode & ~32) {
	case 87:
		move('f');
		break;
	case 68:
		move('r');
		break;
	case 65:
		move('l');
		break;
	case 82:
		move('u');
		break;
	case 70:
		move('d');
		break;
	default:
		break;
	}
}
