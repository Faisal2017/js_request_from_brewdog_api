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
  printBeers(beers)
}

var printBeers = function(beers) {

  beers.forEach(function(beer) {
    var nameLi = createName(beer);
    var imageLi = createImage(beer);

    var beerList = document.querySelector('#beer-list');
    beerList.appendChild(nameLi);
    beerList.appendChild(imageLi);
  })
}

var createImage = function(beers) {
  var li = document.createElement('li');
  var image = document.createElement('img');
  image.src = beers.image_url;
  image.style.width = "150px";
  image.style.height = "300px";
  return li.appendChild(image);
}

var createName = function(beer) {
  var li = document.createElement('li');
  li.innerText = beer.name;
  return li;
}

window.addEventListener('load', app);

// var ul = document.querySelector('#beer-list');
// beers.forEach(function(beer) {
//   var li = document.createElement('li')
//   var img = document.createElement('img');
//   img.src = beer.image_url
//   li.innerText = beer.name 
//   ul.appendChild(li);
// });