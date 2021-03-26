var myToken = localStorage.getItem("keytoken");
param = window.location.href;
var io = param.indexOf("ref=");
if (io != -1) {
	var Token = param.substr(io + 4);
	console.log(Token);	
	 let key = "keytoken";
     localStorage.setItem(key, Token);		
	 console.log("Token armazenado");
	 PopulateFields();
} else {
	if (myToken != null) {
		param = window.location.href;
 		var io = param.indexOf("utm_source=");
 		if (io != -1) {	
			console.log("Logado");
			document.getElementById("containerlogado").style.visibility = "visible";	
		}else{
			PopulateFields();		
		}
	} else {
		console.log("não logado");
		document.getElementById("container").style.visibility = "visible";
	}
}





