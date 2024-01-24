let hours = document.getElementById("hrs");
let mintues = document.getElementById("min");
let seconds = document.getElementById("sec");

let btn = document.createElement("button");
let AMPM = document.getElementById("am-pm");
AMPM.appendChild(btn);

setInterval(()=>{
let currentTime = new Date();
// console.log(currentTime);
// console.log(currentTime.getHours())
// console.log(currentTime.getMonth())
// console.log(currentTime.getFullYear())
// console.log(currentTime.getSeconds())
// console.log(currentTime.getMinutes())

btn.innerHTML = currentTime.getHours() >= 12 ? 'PM' : 'AM';
hours.innerHTML = (currentTime.getHours() < 10 ? "0":"")+currentTime.getHours();
mintues.innerHTML = (currentTime.getMinutes() < 10 ? "0":"")+currentTime.getMinutes();
seconds.innerHTML = (currentTime.getSeconds() < 10 ? "0":"")+currentTime.getSeconds();

}, 1000);