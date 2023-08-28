/// <reference types="../@types/jquery" />



$("#details .info .info-details .singer").on("click" , function({target}){


const currentElement = $(target).attr("id");


switch (currentElement) {
    case "singer1":


    $("#details .info .info-details .singer-info#singer1").slideToggle(500);
        
        break;


        case "singer2":


        $("#details .info .info-details .singer-info#singer2").slideToggle(500);

        break;


        case "singer3":


        $("#details .info .info-details .singer-info#singer3").slideToggle(500);

        break;


        case "singer4":


        $("#details .info .info-details .singer-info#singer4").slideToggle(500);

        break;




    default:
        break;
}


})








let countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
 var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"

  $("#days").html(days + "   Days");
  $("#hours").html(hours + "  Hours");
  $("#minutes").html(minutes + "  Minutes");
  $("#seconds").html(seconds +  "  Seconds");


  // If the count down is finished, write some text
  if (distance < 0) {
   
    clearInterval(x);
    
  }
}, 1);


function countCharacters() {

    
    var value= $("#textArea").val();
    var length = value.length;  
    
    
var remaining = 100-length ; 

$("#remaining").html(remaining);


if(length == 100){

    $("#textArea").attr("disabled" , "disabled");


}
    
    };


    $("#textArea").on("keydown" , function(){

        countCharacters();
    })




$("#submit").on("click" , function(){

    $("#textArea").val("");
})


$(".bars").on("click" , function(){

    $(".sidenav").css("display" , "block");
})


$("#close").on("click" , function(){

    $(".sidenav").css("display" , "none");
})



$(".sidenav a").on("click" , function({target}){



   const currentElement = $(target).attr("href");
   const currentOffset = $(currentElement).offset().top;

$("body , html").animate({scrollTop: currentOffset} , 2000);



})