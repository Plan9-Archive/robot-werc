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

	var key = String.fromCharCode(event.charCode).toLowerCase();
	switch (key) {
	case 'w':
		move('f');
		break;
	case 'd':
		move('r');
		break;
	case 'a':
		move('l');
		break;
	case 'r':
		move('u');
		break;
	case 'f':
		move('d');
		break;
	default:
		break;
	}
}
