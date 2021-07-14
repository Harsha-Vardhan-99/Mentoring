

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
    Display();
    document.getElementById("summarytitle").style.display = "block";
    document.getElementById("summaryinfo").style.display = "block";
    window.scrollTo(0,document.body.scrollHeight);
});

function Display(){
  document.getElementById("sname").innerHTML = name;
    document.getElementById("sphone").innerHTML = phone;
    document.getElementById("sgender").innerHTML = gender;
    document.getElementById("sprobdesc").innerHTML = probdesc;
    document.getElementById("sdateandtime").innerHTML = dateandtime;
   
}

let reschedule = document.getElementById('reschedule');
  reschedule.addEventListener("click",()=>{
    document.getElementById("rname").value = name;
    document.getElementById("rphone").value = phone;
    document.getElementById("r"+gender).setAttribute("checked",true);
    document.getElementById("rproblemDescription").value = probdesc;
    document.getElementById("rdateandtime").value = dateandtime;
  });


  let update = document.getElementById('myform2');
  update.addEventListener("submit",(event)=>{
    event.preventDefault();
    name = event.target.rname.value;
    phone = event.target.rphone.value;
    gender = event.target.rgender.value;
    probdesc = event.target.rproblemDescription.value;
    dateandtime = event.target.rdateandtime.value;
    Display();
    $("#rescheduleModal").modal("toggle");
  });

}