  
//saving the user name and the password 

$(document).ready(function () {

      $("#singn").submit(function () {

// declaring a varibale that he hold the user name value
           var user = $("#user1").val()


// declaring a varible that hold the password value
        var psw = $("#pass1").val()
// saving the user using the localstorge.setItem
          localStorage.setItem("n1", user)

// saving the pasword using the localstorge.setItem
              localStorage.setItem("p1", psw)

      });

      $("#login").submit(function () {
          var pressName = $("#user2").val()
        

        var yourPass = $("#pass2").val()
// declaring a varible and we assigne it to the user name stored with the localstorge.getItem to get the 
//value of the key stored ech time we pass the key
        var nameStor = localStorage.getItem("n1")
  //  declaring a varible and we assigne it to the user name stored with the localstorge.getItem to get the 
 // declaring a varible and we assigne it to the password stored with the localstorge.getItem to get the 
 //value of the key stored ech time we pass the key

          var storedPass = localStorage.getItem("p1")
// cheking if the user name pressed in the login is matching the one  is stored 
// cheking if the password pressed in the login is matching the one is stored
        if (pressName == nameStor && yourPass == storedPass) {
       // if the user name and the password are matching alert welcome        

              alert("Welcome!")

        }
        // if the user name and the password are differetn alert access denied
        else {
          alert("Access Denied please try agin!")
        }

      })
         })
//NB : if the passworrd is wrong the alert Acces Denied please try again show but it took me to
// the second page mabye the prob with the tag action 



// creating a function that add one
function plusTeen(){
	// tagging the id of the buuton addteenager 
var count = document.getElementById('counter')
// incremanting the count +1 
count.innerHTML++
}


function plusAdult(){
	//tagging the id of the button addadult
var count = document.getElementById('count')
// increamanting the count by 1
count.innerHTML++
}

function plusOld(){
	// taging the id of the button addold 
var count = document.getElementById('counts')
// increamanting the count by 1
count.innerHTML++
}



//NB : I try to do the button add with this function but a face some echo with it


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



 $(function() {
  // creating unordered list
  var $list, $newPerson
  // targiting newperson div
     $list = $('ul')
  
     $newPerson = $('#newPerson')
  // creatin new event including callback function that append a text that we took from an input
  $newPerson.on('submit', function(e) {
       e.preventDefault();
           var text = $('input:text').val()
    
        $list.append('<li>' + text + '</li>')
    $('input:text').val('');
  })

   