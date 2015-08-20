function move(dir) {
	xmlhttp = new XMLHttpRequest();
	xmlhttp.open("POST","/move",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send('dir=' + dir);
}
