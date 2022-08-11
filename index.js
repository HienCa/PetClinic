
var dateToday = function () {
    var myDate = document.getElementById("getDate");
    var today = new Date();
    myDate.value = today.toISOString().substring(0,10);
  }
dateToday();

var form = document.getElementById("form");
var validateForm = function(){
var name = document.myForm.name;
var tel = document.myForm.tel;
var note = document.myForm.note;
    if( name.value == "" ) {
        alert( "Please provide your name!" );
        name.focus() ;
        name.style.border = "2px solid red";
        return false;
     }
     
     if( tel.value == "" || isNaN( tel.value ) ||tel.value.length < 10) {
        alert( "Please provide exactly tel." );
        tel.style.border = "2px solid red";
        tel.focus() ;
        return false;
     }
     if( note.value == "" ) {
        alert( "Please provide your pet'health!" );
        note.style.border = "2px solid red";
        note.focus() ;
        return false;
     }
     return( true );
    
}
//validateForm();
