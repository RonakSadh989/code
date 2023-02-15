async function ip() {
  let ipurl = "http://ip-api.com/json/";
  let ip = await (await fetch(ipurl)).json();
  console.log(ip.city);

  // var city = document.getElementById("cityname").value;
  var weatherurl = `https://api.openweathermap.org/data/2.5/weather?q=${ip.city}&appid=008e0e472ff21f75c942f6ef947e54f0`;
  var obj = await (await fetch(weatherurl)).json();
  console.log(obj);

  var cityinfo = document.getElementById("cityinfo");
  var info = document.getElementById("info");
  var get = document.getElementById("get");

  get.style.display = "inline";
  cityinfo.innerHTML = obj["name"];
  info.innerHTML =
    "Weather:  " +
    obj["weather"]["0"]["description"] +
    "<br><br>" +
    "Wind:  " +
    obj["wind"]["speed"] +
    "<br><br>" +
    "Humidity:  " +
    obj["main"]["humidity"];
}

async function load() {
  var city = document.getElementById("cityname").value;
  var weatherurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=008e0e472ff21f75c942f6ef947e54f0`;
  var obj = await (await fetch(weatherurl)).json();
  console.log(obj);

  var cityinfo = document.getElementById("cityinfo");
  var info = document.getElementById("info");
  var get = document.getElementById("get");

  get.style.display = "inline";
  cityinfo.innerHTML = obj["name"];
  info.innerHTML =
    "Weather:  " +
    obj["weather"]["0"]["description"] +
    "<br>" +
    "Wind:  " +
    obj["wind"]["speed"] +
    "<br>" +
    "Humidity:  " +
    obj["main"]["humidity"];
}
