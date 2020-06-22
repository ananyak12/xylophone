var r = document.getElementById("red");
r.addEventListener('click',myPlay);
var audio1 = new Audio('note1.wav');
function myPlay(){
  audio1.play();

}
var o = document.getElementById("orange");
o.addEventListener('click',myPlay1);
var audio2 = new Audio('note2.wav');
function myPlay1(){
  audio2.play();
}
var y = document.getElementById("yellow");
y.addEventListener('click',myPlay2);
var audio3 = new Audio('note3.wav');
function myPlay2(){
  audio3.play();
}
var g = document.getElementById("green");
g.addEventListener('click',myPlay3);
var audio4 = new Audio('note4.wav');
function myPlay3(){
  audio4.play();
}
var b = document.getElementById("blue");
b.addEventListener('click',myPlay4);
var audio5 = new Audio('note5.wav');
function myPlay4(){
  audio5.play();
}
var i = document.getElementById("indigo");
i.addEventListener('click',myPlay5);
var audio6 = new Audio('note6.wav');
function myPlay5(){
  audio6.play();
}
var v = document.getElementById("violet");
v.addEventListener('click',myPlay6);
var audio7 = new Audio('note7.wav');
function myPlay6(){
  audio7.play();
}
window.addEventListener("keypress",function(event){
  switch(event.key){
    case "c" :
    case "C" : myPlay();
    break;
    case "d":
    case "D":myPlay1();
    break;
    case "e":
    case "E":myPlay2();
    break;
    case "f":
    case "F":myPlay3();
    break;
    case "g":
    case "G":myPlay4();
    break;
    case "a":
    case "A":myPlay5();
    break;
    case "b":
    case "B":myPlay6();
    break;
  }
});
// 88 minutes for javascript
/*
$("#red").click(function f1(){
    var audio = new Audio("note1.wav");
     audio.play();
  });
$("#orange").click(function f2(){
      var audio = new Audio("note2.wav");
       audio.play();
    });
$("#yellow").click(function f3(){
        var audio = new Audio("note3.wav");
         audio.play();
      });
$("#green").click(function f4(){
          var audio = new Audio("note4.wav");
           audio.play();
        });
$("#blue").click(function f5(){
            var audio = new Audio("note5.wav");
             audio.play();
          });
$("#indigo").click(function f6(){
              var audio = new Audio("note6.wav");
               audio.play();
            });
$("#violet").click(function f7(){
                var audio = new Audio("note7.wav");
                 audio.play();
              });
$(document).on('keypress', function(e){
  switch (e.keyCode){
    case 97:
    case 65: var audio = new Audio("note6.wav");
     audio.play();
     break;
     case 98:
     case 66:var audio = new Audio("note7.wav");
      audio.play();
      break;
      case 99:
      case 67:var audio = new Audio("note1.wav");
       audio.play();
       break;
       case 100:
       case 68:var audio = new Audio("note2.wav");
        audio.play();
        break;
        case 101:
        case 69:var audio = new Audio("note3.wav");
         audio.play();
         break;
         case 102:
         case 70:var audio = new Audio("note4.wav");
          audio.play();
          break;
          case 103:
          case 71:var audio = new Audio("note5.wav");
           audio.play();
           break;
  }
});
46 minutes for jQuery
*/
