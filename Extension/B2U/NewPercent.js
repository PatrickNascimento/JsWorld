  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;  
        console.log("url");
        const request = new XMLHttpRequest();
        request.open('GET', 'https://back.bitcointoyou.com:443/api/v1/get-afilio-stores');
        request.onload = function () {
          let result = JSON.parse(this.responseText);          
          for (var [key, value] of Object.entries(result)) {                        
                urlOne = url.split("/"); 
                urlTwo = result[key].url.split("/");
            if (urlOne[2] == urlTwo[2]) {                          
              $("#percentNumber").html(result[key].saleprice + '%');  
            }
          }
        };
        request.send();
  }); 