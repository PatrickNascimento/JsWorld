var data = "";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api.awin.com/publishers/789311/programmes");
xhr.setRequestHeader("Authorization", "Bearer e0865c7f-5a45-4aa7-8eb4-2c660a69b0de");

xhr.send(data);