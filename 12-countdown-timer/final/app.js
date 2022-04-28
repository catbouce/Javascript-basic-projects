const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

/*
  - 
*/
const giveAway = document.querySelector('.giveaway');
const deadline = document.querySelectorAll('.deadline h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

/*
  - const date = new Date(2022,04,27,12,59,0);
    --> this method give wrong weekday
  - "tempMonth + 1" to add extra month to the month
*/

const date = new Date(tempYear,tempMonth + 1,tempDay,11,30,0);

let year = date.getFullYear();
let month = months[date.getMonth()];
let day = date.getDate();
let weekday = weekdays[date.getDay()];
let hour = date.getHours();
let minute = date.getMinutes();

giveAway.textContent = `Giveaway Ends On ${weekday},${day} ${month} ${year}, ${hour}:${minute}`

//1s = 1000
//1min = 60s
//1hour= 60min
//1day = 24h
const oneDay = 24*60*60*1000;
const oneHour = 60*60*1000;
const oneMin = 60*1000;

const futureTime = date.getTime();
const today = new Date().getTime();
const remainingTime = futureTime - today;

let days = Math.floor(remainingTime / oneDay);
let hours = Math.floor((futureTime%oneDay)/oneHour);
let mins = Math.floor((futureTime%oneHour)/oneMin);
let seconds = Math.floor((futureTime%oneMin)/1000);

const value = [days,hours,mins,seconds];

deadline.forEach(function(item,index){
  item.innerHTML = value[index];
})
console.log(days); 