var saveBtn = document.getElementById("saveButton");
//decleration of current time 
const now = new Date();
const current = now.getHours();
console.log(current);

//function of current date
function currentDay(){
let date = new Date();
document.getElementById("currentDay").innerHTML = date
}setInterval(currentDay, 1000);
//saving to the local storage with setItem
var info1 = $(".saveBtn1");
info1.on("click", function(){
  localStorage.setItem("events1", $(".event1").val());
})
var info2 = $(".saveBtn2");
info2.on("click", function(){
  localStorage.setItem("events2", $(".event2").val());
})
var info3 = $(".saveBtn3");
info3.on("click", function(){
  localStorage.setItem("events3", $(".event3").val());
})
var info4 = $(".saveBtn4");
info4.on("click", function(){
  localStorage.setItem("events4", $(".event4").val());
})
var info5 = $(".saveBtn5");
info5.on("click", function(){
  localStorage.setItem("events5", $(".event5").val());
})
var info6 = $(".saveBtn6");
info6.on("click", function(){
  localStorage.setItem("events6", $(".event6").val());
})
var info7 = $(".saveBtn7");
info7.on("click", function(){
  localStorage.setItem("events7", $(".event7").val());
})
var info8 = $(".saveBtn8");
info8.on("click", function(){
  localStorage.setItem("events8", $(".event8").val());
})
var info9 = $(".saveBtn9");
info9.on("click", function(){
  localStorage.setItem("events9", $(".event9").val());
})

$(".saveBtn").on("click", function(){
  var isSaved = true;
  return isSaved;
});
//getting the info with getItem
if ($(".saveBtn")){
  var eventOfDay = localStorage.getItem("events1");
  $(".event1").text(eventOfDay);

  var eventOfDay = localStorage.getItem("events2");
  $(".event2").text(eventOfDay);

  var eventOfDay = localStorage.getItem("events3");
  $(".event3").text(eventOfDay);
  
  var eventOfDay = localStorage.getItem("events4");
  $(".event4").text(eventOfDay);
  
  var eventOfDay = localStorage.getItem("events5");
  $(".event5").text(eventOfDay);
 
  var eventOfDay = localStorage.getItem("events6");
  $(".event6").text(eventOfDay);
  
  var eventOfDay = localStorage.getItem("events7");
  $(".event7").text(eventOfDay);
  
  var eventOfDay = localStorage.getItem("events8");
  $(".event8").text(eventOfDay);
 
  var eventOfDay = localStorage.getItem("events9");
  $(".event9").text(eventOfDay);
}
//decleration of the hours
var hours = [$(".hour1"), $(".hour2"), $(".hour3"), $(".hour4"),$(".hour5")
,$(".hour6"), $(".hour7"), $(".hour8"), $(".hour9")];
//setting colors for each time
var time = [9, 10 ,11, 12, 13, 14, 15, 16, 17]
for (i = 0; i < time.length; i++){
  if (current > time[i]){
    hours[i].css("background", "#d3d3d3");
    if (current == time[i]){
    hours[i].css("background", "#ff6961");
  }

}
}