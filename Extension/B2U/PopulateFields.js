function PopulateFields() {	
		const request = new XMLHttpRequest();		
		request.open('GET', 'https://back.bitcointoyou.com:443/api/v1/get-afilio-stores');
		request.onload = function () {			
			let result = JSON.parse(this.responseText);
			var url = window.location.href;
			for (var [key, value] of Object.entries(result)) {
				urlOne = url.split("/"); 
                urlTwo = result[key].url.split("/"); 
                console.log(urlOne);
                console.log(urlTwo);               
                if (urlOne[2] == urlTwo[2]) {				
					console.log("URL-OK");
					$.ajax({
						url: "https://back.bitcointoyou.com:443/api/v1/get-afilio-deeplink?id=" + result[key].id + "&storeUrl=" + result[key].url,
						dataType: "html",
						method: "GET"
					}).done(function (retorno) {
						//window.open(retorno, '_blank');
						//window.close();					
						//window.location.assign(retorno)
						window.location.href = retorno;
					});
				}
			}
		};
		request.send();
}

	