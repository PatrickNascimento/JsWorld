  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;  
          var io = url.indexOf("utm_source=");
          if (io != -1) { 
          console.log("Logado");
          $("#Primary").hide();  
          $("#Secundary").show();  
    }
       
  }); 