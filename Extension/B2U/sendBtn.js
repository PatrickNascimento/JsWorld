document.getElementById("BtnSend").addEventListener("click", function() {	
 chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;  
        console.log("url");
        newURL = "https://teste2.bitcointoyou.com/sign-in?ext="+url;            	
   		chrome.tabs.remove(tabs[0].id);
        chrome.tabs.create({ url: newURL });        
  }); 
});