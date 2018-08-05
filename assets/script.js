// // create firebase database for train times 
// //retrieve information with moment.js
// When adding trains, administrators should be able to submit the following:
// Train Name
// Destination 
// First Train Time -- in military time
// Frequency -- in minutes
// Code this app to calculate when the next train will arrive; this should be relative to the current time.
// Users from many different machines must be able to view same train times.
$(document).ready(function(){
    var config = {
        apiKey: "AIzaSyC3sHQPt4eabaBy4hcYbrb5qvUtQ3G4BZw",
        authDomain: "train-times-39504.firebaseapp.com",
        databaseURL: "https://train-times-39504.firebaseio.com",
        projectId: "train-times-39504",
        storageBucket: "train-times-39504.appspot.com",
        messagingSenderId: "272656045415"
      };
      firebase.initializeApp(config);
   
   // Assumptions
   var tFrequency = 3;

   // Time is 3:30 AM
   var firstTime = "03:30";

   // First Time (pushed back 1 year to make sure it comes before current time)
   var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
   console.log(firstTimeConverted);

    


   // Current Time
   var currentTime = moment();
   console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

   // Difference between the times
   var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
   console.log("DIFFERENCE IN TIME: " + diffTime);

   // Time apart (remainder)
   var tRemainder = diffTime % tFrequency;
   console.log(tRemainder);

   // Minute Until Train
   var tMinutesTillTrain = tFrequency - tRemainder;
   console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

   // Next Train
   var nextTrain = moment().add(tMinutesTillTrain, "minutes");
   console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));


   var trains = [{
     
    tFrequency: 10,
     firstTime: "1:10"
 }, {
     tFrequency:6,
     firstTime: "2:30"
 },{
     tFrequency:25,
     firstTime: "1:00"
 }]

// function trainArriving(){
//  $(".trainInfo").text(nextTrain)

// }
// trainArriving()
function generate_table() {
    // get the reference for the body
    var body = document.getElementsByTagName("body")[0];
   
    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
   
    // creating all cells
    for (var i = 0; i < 0; i++) {
      // creates a table row
      var row = document.createElement("tr");
   
      for (var j = 0; j < 2; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        var cell = document.createElement("td");
        var cellText = document.createTextNode("cell in row "+i+", column "+j);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
   
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
   
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);
    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "2");
  }

})


