

var name;
var phone;
var probdesc;
var dateandtime;
var gender;

window.onload=function(){

  let form = document.getElementById('myform');
  
  form.addEventListener("submit",(event)=>{
    event.preventDefault();
    name = event.target.name.value;
    phone = event.target.phone.value;
    gender = event.target.gender.value;
    probdesc = event.target.problemDescription.value;
    dateandtime = event.target.dateandtime.value;


    document.getElementById("sname").innerHTML = name;
    document.getElementById("sphone").innerHTML = phone;
    document.getElementById("sgender").innerHTML = gender;
    document.getElementById("sprobdesc").innerHTML = probdesc;
    document.getElementById("sdateandtime").innerHTML = dateandtime;
  
   document.getElementById("summarytitle").style.display = "block";
   document.getElementById("summaryinfo").style.display = "block";
});

}