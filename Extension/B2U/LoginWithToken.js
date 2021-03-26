function loginToken() {
		const request = new XMLHttpRequest();
		request.open('GET', 'https://back.bitcointoyou.com:443/api/v1/get-afilio-stores');
		request.onload = function () {
			let result = JSON.parse(this.responseText);

		 chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        	 var url = tabs[0].url;               
         });  
			// var url = window.location.href; //Usado no PopUp injetado
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
					   window.open(retorno, '_blank');	//window.open(retorno, '_self');
					});
				}
			}
		};
		request.send();
	}