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
  if (this.status != 200) return;
  console.log(this)
  var jsonString = this.responseText;
  var beers = JSON.parse(jsonString);
  populateList(beers)
}

var populateList = function(beers) {
  var ul = document.querySelector('#beer-list');
  beers.forEach(function(beer) {
    var li = document.createElement('li')
    li.innerText = beer.name;
    ul.appendChild(li);
  });
}

window.addEventListener('load', app);
