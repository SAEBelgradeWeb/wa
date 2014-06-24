$('#city').on('change', function(){
	get_weather($(this).val());
})

function get_weather(city){
	var url = "http://api.openweathermap.org/data/2.5/weather?units=metric&q=" + city;
	uzmi_podatke(url);
}

function get_weather_geo(lat, lon){
	var url = "http://api.openweathermap.org/data/2.5/weather?units=metric&lat=" + lat + "&lon=" + lon;
	uzmi_podatke(url);


}

function uspelo(position){
	var lat = position.coords.latitude;
	var lon = position.coords.longitude;
	get_weather_geo(lat,lon);

}

function neuspelo(){
	get_weather('Belgrade')
}


function uzmi_podatke(url){
	$.post( url , function( data ) {
		console.log(data)
		var city = data.name;
		var temp = Math.round(data.main.temp);
		var desc = data.weather[0].description;
		var icon = data.weather[0].icon;

		$('h1').text(city);
		$('h2').text(temp);
		$('h3').text(desc);
		var icon_url = "http://openweathermap.org/img/w/" + icon + ".png";
		$('img').attr('src', icon_url);
	});

}

navigator.geolocation.getCurrentPosition(uspelo, neuspelo);
