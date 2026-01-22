var hours = document.getElementById('houre')
var min = document.getElementById('min')
var sec = document.getElementById('sec')
var day = document.getElementById('day')
var month = document.getElementById('month')
var date = document.getElementById('date')
var year = document.getElementById('year')
var pmam = document.getElementById('pm')

var dateObject = new Date();
var currentDay = dateObject.getDay();
var currentMonth = dateObject.getMonth();
var currentFullYear = dateObject.getFullYear();
var currentDate = dateObject.getDate();
var currentHours = dateObject.getHours();
var currentMinutes = dateObject.getMinutes();
var currentSeconds = dateObject.getSeconds();

function getCurrentTime(){

    var dateObject = new Date();
    var currentHours = dateObject.getHours();
    var currentMinutes = dateObject.getMinutes();
    var currentSeconds = dateObject.getSeconds();


    if( currentMinutes < 10){
        min.innerText = '0'+currentMinutes;
    }
    else{
        min.innerText = currentMinutes;
    }
    
    if(currentSeconds < 10){

        sec.innerText = '0'+ currentSeconds;
    }
    else{
        sec.innerText = currentSeconds;
    }
    if(currentHours < 10){
        
        hours.innerText = '0'+ currentHours;
    }
    else{
        hours.innerText = currentHours;
    }
    
    if(currentHours == 0){

        hours.innerText = 12 
        pmam.innerText = 'am' 
    }
    else if(currentHours >=1 && currentHours <= 11 ){ 

        hours.innerText = currentHours
        pmam.innerText = 'am' 

    }
    else if(currentHours == 12){

        hours.innerText = currentHours
        pmam.innerText = 'pm' 

    }
    else{  

        hours.innerText = currentHours - 12;
        pmam.innerText = 'pm' 

    }

    var days = ['Sun', 'Mon', 'Tue', 'Wed','Thur', 'Fri', 'Sat' ];

    var months = ['jun','Feb','Mar','Apr','May','Jun','July','Aug','Sep','Oct','Nov','Dec'];

    day.innerText = days[currentDay] + " / ";
    month.innerText = months[currentMonth];
    date.innerText = currentDate + " / "
    year.innerText = currentFullYear;

}


setInterval( getCurrentTime , 1000 ) 