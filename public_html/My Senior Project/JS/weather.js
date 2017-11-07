function map(data) {

    var newContent = '';

    newContent += '<figure><img id="satellite"></img></figure>';

    document.getElementById('map').innerHTML = newContent;
	document.getElementById('satellite').setAttribute("src", "http://api.wunderground.com/api/7e4c86fb56de7f8c/animatedradar/animatedsatellite/image.gif?num=5&delay=50&rad.noclutter=1&rad.centerlat=51.516&centerlon=-0.092&rad.radius=300&rad.width=640&rad.height=480&rad.rainsnow=1&rad.reproj.automerc=1&rad.basemap=1&rad.num=5&sat.lat=51.516&sat.lon=-0.092&sat.radius=300&sat.width=640&sat.height=480&sat.key=sat_ir4_bottom&sat.gtt=107&sat.proj=me&sat.timelabel=0&sat.borders=1&sat.basemap=1&sat.num=5");
	
}

function weather(data) {

    var newContent = '';

    var co = data.current_observation;

    newContent += '<p>' + co.display_location.full + '<br />';
    newContent += co.temperature_string + '<br />'
    newContent += 'Weather: ' + co.weather +'<br />';
	newContent += 'Feels Like: ' + co.feelslike_f + 'F'+ '<br />'; 
	newContent += 'Humidity: ' + co.relative_humidity + '<br />';
    newContent += 'Wind from the ' + co.wind_dir + ' at ' + co.wind_mph + ' mph' + '<br />'; 
    newContent += co.local_time_rfc822 + '</p>';
    document.getElementById('current').innerHTML = newContent;
}
