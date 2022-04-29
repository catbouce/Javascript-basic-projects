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
const innerDeadline = document.querySelector('.deadline');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

/*
  - const date = new Date(2022,04,27,12,59,0);
    --> this method give wrong weekday
  - "tempMonth + 1" to add extra month to the month
*/

const date = new Date(tempYear,tempMonth,tempDay,17,40,0);

let year = date.getFullYear();
let month = months[date.getMonth()];
let day = date.getDate();
let weekday = weekdays[date.getDay()];
let hour = date.getHours();
let minute = date.getMinutes();

giveAway.textContent = `Giveaway Ends On ${weekday},${day} ${month} 
                      ${year}, ${hour}:${minute}`;

/*
  - setInterval() method, offered on the Window and Worker interfaces, 
  repeatedly calls a function or executes a code snippet, with a fixed 
  time delay between each call
    + This method returns an interval ID which uniquely identifies the 
    interval, so you can remove it later by calling clearInterval()
*/

function getRemainingTime(){
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
console.log(remainingTime);

let days = Math.floor(remainingTime / oneDay);
let hours = Math.floor((remainingTime%oneDay)/oneHour);
let mins = Math.floor((remainingTime%oneHour)/oneMin);
let seconds = Math.floor((remainingTime%oneMin)/1000);

const value = [days,hours,mins,seconds];

function format(item){
  if(item < 10){
    return `0${item}`;
  }
  return item;
}
deadline.forEach(function(item,index){
  item.innerHTML = format(value[index]);
})

//remainingTime == 0 doesn't work since remainingTime never = 0
if (remainingTime < 0){
  clearInterval(timeInterval);
  innerDeadline.innerHTML = `<h4 class="expired"> sorry, the giveaway has expired!</h4>`;
}
}

let timeInterval = setInterval(getRemainingTime,1000);

getRemainingTime();
