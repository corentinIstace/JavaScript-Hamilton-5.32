/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var today = new Date();

    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    if (time < "17:30:00"){
        document.getElementById("target").innerHTML = "hello";
    }
    else{
        document.getElementById("target").innerHTML = "Good evening";
    }
    // your code here

})();
