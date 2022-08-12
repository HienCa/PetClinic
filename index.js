
var dateToday = function () {
   var myDate = document.getElementById("getDate");
   var today = new Date();
   myDate.value = today.toISOString().substring(0, 10);
}
dateToday();

var form = document.getElementById("form");
var validateForm = function () {
   var name = document.myForm.name;
   var tel = document.myForm.tel;
   var note = document.myForm.note;
   if (name.value == "" || isNumber(name.value)) {
      name.setAttribute("placeholder", "Please provide your name");
      name.focus();
      name.style.border = "2px solid red";
      return false;
   }

   if (tel.value == "" || isNaN(tel.value) || tel.value.length < 10) {
      showError("Please provide exactly tel.");
      //tel.style.border = "2px solid red";
      tel.focus();
      return false;
   }
   if (note.value == "") {
      alert("Please provide your pet'health!");
      //note.style.border = "2px solid red";
      note.focus();
      return false;
   }
   return (true);

}
checkOnchange = function () {
   var inputName = document.getElementById("name");
   inputName.onchange = function () {
      if (!this.value == "" || !isNumber(this.value)) {

         inputName.style.border = "2px solid #faa61a";
         return false;
      }
   }
}


function checkClick() {
   if (boxchat.classList.contains("active")) {
      boxchat.classList.remove("active");
   }
   else {
      boxchat.classList.add("active");
   }
}
function checkClickChat(){

}

var mess = document.getElementById("mess");
var boxchat = document.getElementById("box");
mess.addEventListener("click", checkClick);

var exit = document.getElementById("exit");
exit.addEventListener("click", checkClick);

var startchat = document.getElementById("startchat");

startchat.addEventListener("click", checkClickChat);


function clip() {
   // width of the banner container
   var contWidth = 425;
   // height of the banner container
   var contHeight = 90;
   
   var id1 = document.getElementById('slideA');
   var id2 = document.getElementById('slideB');
   
   id1.style.left = parseInt(id1.style.left)-1 + 'px';
   
   document.getElementById('slideCont').style.width = contWidth + "px";
   document.getElementById('slideCont').style.clip = 'rect(auto,'+ contWidth +'px,' + contHeight +'px,auto)';
   id2.style.display = '';
   if(parseFloat(id1.style.left) == -(contWidth)) {
   id1.style.left = '0px';
   }
   setTimeout(clip,25)
   }
   
   function addLoadEvent(func) {
   var oldonload = window.onload;
   if (typeof window.onload != 'function') {
   window.onload = func;
   } else {
   window.onload = function() {
   if (oldonload) {
   oldonload();
   }
   func();
   }
   }
   }
   
   addLoadEvent(function() {
   clip();
   });

