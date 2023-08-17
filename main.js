let search = document.querySelector(".inp-oth");

search.onclick = function(){
    url = "https://www.google.com/search?q="+input.value;
    window.open(url);
}


// Clock Time 
let hour = document.getElementById("hour")
let min = document.getElementById("min")
let day = document.getElementById("day")
let month = document.getElementById("month")
let year = document.getElementById("year")

// let currentTime = new Date();
// console.log(currentTime);

setInterval(()=>{
    let currentTime = new Date();
    hour.innerHTML = currentTime.getHours();
    min.innerHTML = currentTime.getMinutes();

    
    // Date
    day.innerHTML = currentTime.getDate(),
    month.innerHTML = currentTime.getMonth(),
    year.innerHTML = currentTime.getFullYear();

    // Fail

    // var day = currentTime.getDate(),
    // month = currentTime.getMonth(),
    // year = currentTime.getFullYear();


    // Number.prototype.pad = function(digits){
    //     for(var n = this.toString(); n.length < digits; n = 0 + n);
    //     return n;
    // }

    // var months = ["January" , "January" , "February" , "March" , "April" , "May" , "Jun" , "July" , "August" , "September" , "October" , "November" , "December"];
    // var week = ["Monday" , "Tuesday" , "Wednesday" , "Friday" , "Saturday" , "Sunday"];
    // var id = ["day" , "month", "year"]
    // var value = [ week[day] , months[month], year];
    // for(var i = 0; i < id.lenght; i++)
    // document.getElementById(ids[i]).firstChild.nodeValue = value[i];

},1000)
