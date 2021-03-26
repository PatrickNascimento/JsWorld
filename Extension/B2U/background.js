chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === "BackSend") {
            console.log("backResquest")  
        }
    }
);

var nav = new NavigationCollector();

var count = 0
chrome.webNavigation.onBeforeNavigate.addListener(function(data) {
// console.log(data.frameId);
// console.log(data);
//SOCKET
var Mytime = setInterval(myTimer, 2000);
function myTimer() { 
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        var _param = tabs[0].url;
        console.log(_param);
        var _io = _param.indexOf("utm_source=");
        if (_io != -1) {         
          chrome.tabs.executeScript(null, {file: 'inject.js'});      
          clearInterval(Mytime);
        }
    });
}


    const request = new XMLHttpRequest()
    request.open('GET', 'https://back.bitcointoyou.com:443/api/v1/get-afilio-stores')

    request.onload = function() {
        let result = JSON.parse(this.responseText);

        if (data.frameId == 0) {
            count += 1;

            for (var [key, value] of Object.entries(result)) {
                //console.log(data.url);
                //console.log(result[key].url);

                urlOne = data.url.split("/"); 
                urlTwo = result[key].url.split("/"); 

                console.log(urlOne);
                console.log(urlTwo);
                

                if (urlOne[2] == urlTwo[2]) {
                    chrome.browserAction.setIcon({
                        path: "icontrue.png"
                    });

                    chrome.browserAction.setBadgeText({
                        text: "" + count + ""
                    });

                    chrome.tabs.executeScript(null, {
                        file: 'inject.js'
                    });

                    chrome.runtime.onMessage.addListener(
                        function(request, sender, sendResponse) {
                            chrome.runtime.sendMessage({
                                "message": "haveStore"
                            });
                        });

                    chrome.runtime.onMessage.addListener(
                        function(request, sender, sendResponse) {
                            if (request.message === "backSend") {
                                console.log("backend result")
                            }
                        });
                } else
                    console.log("Nothing");
            }
        }

    }

    request.send()

});

chrome.runtime.onStartup.addListener(function() {
    nav.resetDataStorage();
});