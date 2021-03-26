function PopulateFields() {
	user = $("#nome").val();
	password = $("#password").val();
	storage = "";	
	$.post("https://homologback.bitcointoyou.com/api/v1/auth/login/check", {
			email: user,
			password: password,
			browserToken: token,
			fingerprint: fprint
		},
		//for test
		//browserToken: "4e5f3c34-62da-443f-af60-e13449cb0df3",
		//fingerprint:"cee76dbf323c251b5a453c133da5e1e8"
		function (data, status, xhr) {
			console.log((JSON.stringify(data, null, '\t')) + "Status: " + xhr.status);
			storage = data.data.token;
		}).done(function () {
		    let key = 'keytoken';
    	    localStorage.setItem(key, storage);		
		    console.log("login-OK");
		
		$("#sucesslogin").show();
		setTimeout(function () {
			$('#sucesslogin').hide();
		}, 3000);

		const request = new XMLHttpRequest();
		request.open('GET', 'https://back.bitcointoyou.com:443/api/v1/get-afilio-stores');
		request.onload = function () {
			let result = JSON.parse(this.responseText);
			var url = window.location.href;
			for (var [key, value] of Object.entries(result)) {
				console.log(url);
				console.log(result[key].url);
				if (url == result[key].url) {
					console.log("URL-OK");
					$.ajax({
						url: "https://back.bitcointoyou.com:443/api/v1/get-afilio-deeplink?id=" + result[key].id + "&storeUrl=" + result[key].url,
						dataType: "html",
						method: "GET"
					}).done(function (retorno) {
						window.open(retorno, '_self');
					});
				}
			}
		};
		request.send();
	}).fail(function () {
		console.log("Erro de Autenticação");
		$("#errorlogin").show();
		setTimeout(function () {
			$('#errorlogin').hide();
		}, 3000);
	})
}