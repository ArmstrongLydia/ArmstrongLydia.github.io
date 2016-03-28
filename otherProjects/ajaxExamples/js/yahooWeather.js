

var url ="https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22toronto%2C%20on%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";


$.getJSON(url, function( data ) {

//navbarCollapse
console.dir(data);
console.log("d"+data.query.results.channel.item.description);
$("#myWeather").append(data.query.results.channel.item.description);

})

.fail(function(data){
console.log(data);
});

$.ajax({
  "url": "https://ismaelc-pinterest.p.mashape.com/jwmoz/pins?page=2",
  "X-Mashape-Key": "13CZm6qOkgmshczMBwGNG1VpxnVpp1M2DMLjsnNkE5Guke6z1M",
  "Accept": "application/json"
}).done(function(data) {
  console.log(data)
}).fail(function(data){

  console.log("fail");
});
