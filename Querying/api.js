// $(document).ready(function (){
var myHeaders = new Headers();
myHeaders.append("Host", "api.shipengine.com");
myHeaders.append("API-Key", "TEST_J6h+wzVuOOQlnxi4H6VwhZoBWolFjnM61n6J3K1bTcY");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Access-Control-Allow-Origin", "*");
var address = address;
var city = city;
var zip = zip;
var state= state;

var raw = JSON.stringify([{
    "address_line1":"525 S Winchester Blvd",
    "city_locality":"San Jose",
    "state_province":"CA",
    "postal_code":"95128",
    "country_code":"US"}]);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://api.shipengine.com/v1/addresses/validate", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
$("#validationButton").on("click", function(event){
    event.preventDefault();
    
    
})
// })
