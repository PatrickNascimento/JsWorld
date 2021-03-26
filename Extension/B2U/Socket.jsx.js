var Mytime = setInterval(myTimer, 1000);

function myTimer() {
	_param = window.location.href;
	console.log(param);
	var _io = _param.indexOf("utm_source=");
	if (_io != -1) {
		document.getElementById("containerlogado").style.visibility = "visible";
		console.log("autenticado");
		clearInterval(Mytime);
	}
}