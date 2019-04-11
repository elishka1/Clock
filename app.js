


var getDate1 = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("date").innerHTML = getDate1.getFullYear();
document.getElementById("date").innerHTML = getDate1.getDate();
document.getElementById("date").innerHTML = months[getDate1.getMonth()];
let order =  getDate1.getDate() + " " + months[getDate1.getMonth()] + " " + getDate1.getFullYear();
document.getElementById("date").innerText = order
    

