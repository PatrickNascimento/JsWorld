  var token = getToken();
  var fp = getFingerPrint();
	var email = "";
	var password = "";

	function PopulateFields() {
		email = $("#email").val();
		password = $("#password").val();				
		fp = fprint;

		console.log(email);
		console.log(password);
		console.log(token);
		console.log(fp);

		const request = new XMLHttpRequest()
		var Url = "https://homologback.bitcointoyou.com/api/v1/auth/login/check";
		request.open("POST", Url);
		request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

		request.onload = function () {    		

    		let data = JSON.parse(this.responseText);
    		
    		console.log(data.data);

    		let resultado = JSON.parse(this.status);
    		if (resultado !== 200) {
    			$("#errorlogin").show();    			
				setTimeout(function(){$('#errorlogin').hide();}, 3000);
    		} else {
    			console.log("login-OK")
				alert("achouuuuu");
    			const request = new XMLHttpRequest()
    		
    			request.open('GET', 'https://back.bitcointoyou.com:443/api/v1/get-afilio-stores')    			

    		    request.onload = function() {
		        let result = JSON.parse(this.responseText);        
		        let url = window.location.href;			        

		        for (var [key, value] of Object.entries(result)) {					
		            if (url == result[key].url) {
		            	alert("achouuuuu");
		            } 
		    	}
			}

			request.send()

    		}
		}

		request.send(JSON.stringify({ "email": email, "password": password, "browserToken": token, "fingerprint" : fp }));
	}

