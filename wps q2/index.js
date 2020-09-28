const randomQuote = ["Reload for random Quote", "If you want the rainbow you have to put up with the rain!", "Make every day a little less ordinary!", "Tomorrow is a blank page, try to write a good one!", "What we dwell on is what we become!", "Act as if what you do makes a difference. It does!", "Don't stop until you're proud!"];

const dayArray = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

var randomNumber1=Math.floor(Math.random()*6)+1;
var today = new Date().getDay();

document.querySelector(".randomQuote").innerHTML = randomQuote[randomNumber1];
document.querySelector(".imageText").innerHTML = dayArray[today];
document.querySelector(".todayImg").setAttribute("src", "images/"+ dayArray[today] + ".jpg");
