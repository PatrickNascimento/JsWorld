// content.js

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "reqMsg" ) {
 
      chrome.runtime.sendMessage({"message": "ReqBack"});
    }
  }
);