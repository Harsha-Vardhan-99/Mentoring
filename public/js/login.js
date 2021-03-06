
window.onload = function(){
    const loginform = document.getElementById("login");
    loginform.addEventListener("submit",(event)=>{
        event.preventDefault();
        let email = event.target.email.value;
        let pwd = event.target.pwd.value;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if(xhr.response)
              window.location.assign('/add-appointment');
              else{
                  window.alert("Invalid Login Credentials");
              }
            }
          }
        xhr.open("POST", "http://localhost:3000/login/authenticate", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
      email:email,
      pwd:pwd,
  }));

    })
}
