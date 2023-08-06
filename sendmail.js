
function sendMail() {

  //alert("hit");
  var email = document.getElementById("input_email").value;
  var emailFormat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var error_msg = document.getElementById("error_msg");

  if (!email.match(emailFormat)) {
    error_msg.innerHTML = "Please enter a valid email";
    error_msg.style.color = "#ff0000";
    return;
  }
  var params={
  from_name: document.getElementById("name").value,
  subject: document.getElementById("sub").value,
  email: email,
  message: document.getElementById("msg").value,
  }

  emailjs.send("service_aje3frd","template_kxzmr18",params).then(function(res){
    alert("Sucess!"+ res.status);
   
    })


}

