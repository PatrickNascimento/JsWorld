$(function() {
  // Send a message to content.js to fetch all the top domains
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "reqMsg"});
  });

  // Add a listener to handle the response from content.js
  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.message === "ReqBack" ) {          
        chrome.runtime.sendMessage({"message": "BackSend"});      
      }
    }
  );
});