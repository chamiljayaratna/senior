document.getElementById('news').onclick = function() {
document.getElementById('row').style.display = 'none';
document.getElementById('newscontent').style.display = 'block';
document.getElementById('contactContent').style.display = 'none';
document.getElementById('weatherContent').style.display = 'none';
}

document.getElementById('home').onclick = function() {
document.getElementById('row').style.display = '';
document.getElementById('weatherContent').style.display = 'none';
document.getElementById('newscontent').style.display = 'none';
document.getElementById('contactContent').style.display = 'none';
}

$(function() {
$('#contact').click(function() {
$('#row').hide();
$('#newscontent').hide();
$('#contactContent').show();		
$('#weatherContent').hide();
});

$('#weather').click(function() {
$('#row').hide();
$('#newscontent').hide();
$('#contactContent').hide();		
$('#weatherContent').show();
});

});

date = new Date();
day = date.getDate();
month = date.getMonth();
year = date.getFullYear();
today = date.getDay();
hour = date.getHours();
minutes = zero(date.getMinutes());
seconds = zero(date.getSeconds());

function zero(i)
{
  if (i < 10)
  {
     i = "0" + i;
  }
return i;
}

if(month == 3 || month == 4 || month == 5)
{
theme = "Spring Time!!";
} else if(month == 6 || month == 7 || month == 8)
{
theme = "Summer Time!!";
} else if(month == 9 || month == 10 || month == 11)
{
theme = "Fall Time!!";
}else
{
theme = "Winter Time!!";
}


weekdays = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
allmonths = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
display = weekdays[today] + ' ' + allmonths[month] + ' ' + day + ', ' + year;


document.write(display + "</br>");
document.write(hour + ":" + minutes + ":" + seconds + "</br>");
document.write(theme);
