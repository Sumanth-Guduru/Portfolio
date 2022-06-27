function sendMail() {
  // var email = document.getElementById("input_email").value;
  // var emailFormat =
  //   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // var error_msg = document.getElementById("error_msg");
  // if (email.match(emailFormat)) {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "gudurusumanthwgl@gmail.com",
    Password: "Sumanthreddy",
    To: "gudurusumanthwgl@gmail.com",
    From: document.getElementById("input_email").value,
    Subject: document.getElementById("sub").value,
    Body: document.getElementById("msg").value,
  }).then((message) => alert("Message Sent Successfully!!"));
  var form = document.getElementById("contact-form");

  error_msg.innerHTML = "";
  document.getElementById("contact-form").reset();
  // } else {
  //   text = "please enter valid mail";
  //   error_msg.innerHTML = text;
  //   error_msg.style.color = "#ff0000";
  // }
}
