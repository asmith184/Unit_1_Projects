"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Aspen Smith
   Date: 1-16-20  

*/

//declaring variables for new dates and putting/displaying it in the html
var thisTime = new Date ();

var timeStr = thisTime.toLocaleString();

document.getElementById("timeStamp").innerHTML = timeStr;

//variables for time and map
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();
var mapNum = (2 * thisMonth + thisHour) % 24;

//variable changing the value of map into mapnum
var imgStr = "<img src='sd_sky" + mapNum + ".png'/>";


//inserting the value of imgStr directly after element tag
document.getElementById("planisphere").insertAdjacentHTML('afterbegin', imgStr);




