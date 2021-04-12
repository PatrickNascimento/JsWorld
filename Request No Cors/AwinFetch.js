var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer e0865c7f-5a45-4aa7-8eb4-2c660a69b0de");

var urlencoded = new URLSearchParams();

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

fetch("https://api.awin.com/publishers/789311/programmes", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


