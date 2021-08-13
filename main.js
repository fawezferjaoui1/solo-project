
$(document).ready(function () {
      $("#singn").submit(function () {
           var user = $("#user1").val()
        var psw = $("#pass1").val()
          localStorage.setItem("n1", user)

              localStorage.setItem("p1", psw)

      });

      $("#login").submit(function () {
          var pressName = $("#user2").val()
        

        var yourPass = $("#pass2").val()

        var nameStor = localStorage.getItem("n1");
       

          var storedPass = localStorage.getItem("p1");

        if (pressName == nameStor && yourPass == storedPass) {
              alert("Welcome!");
        }
        else {
          alert("Access Denied please try agin!");
        }

      });
         });



function plusTeen(){
var count = document.getElementById('counter');
count.innerHTML++
}


function plusAdult(){
var count = document.getElementById('count');
count.innerHTML++
}

function plusOld(){
var count = document.getElementById('counts');
count.innerHTML++
}


// function totatl(){

// var obj={
// 	teenager: num,
// 	adult:num,
// 	old:num,
// 	totatl:num,
// }

//   function plusAdult(){
//   	var $adult=$('#adult').val();
//    obj.adult++
//    obj.total++
//    return obj.adult
//    alert('hello')
//   }
// function plusTeenager(){
// 	var $teenager=$('#teenager').val();
// obj.teenager++
// obj.total++
// return obj.teenager
// }


// function plusOld(){
// 	var $old=$('#old').val()
// 	obj.old++
// 	obj.total++
// 	return obj.old
// }



// }


