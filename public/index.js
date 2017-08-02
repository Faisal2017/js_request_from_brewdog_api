var app = function () {
  var url = "https://api.punkapi.com/v2/beers";
  makeRequest(url, requestComplete);
}

var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();
  request.addEventListener('load', callback);

  request.open('GET', url);
  request.send();
}

var requestComplete = function() {
  console.log(this);
}



window.addEventListener('load', app);
