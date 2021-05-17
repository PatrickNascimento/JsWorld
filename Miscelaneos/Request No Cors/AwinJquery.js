
var settings = {  
  'dataType': "jsonp",
  "async": true,
  "crossDomain": true,
  "url": "https://api.awin.com/publishers/789311/programmes",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "Authorization": "Bearer e0865c7f-5a45-4aa7-8eb4-2c660a69b0de",
    "accept": "application/json",
    "Access-Control-Allow-Origin":"*"
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

<script>

