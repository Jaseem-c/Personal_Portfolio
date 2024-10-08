// function sendMail(){
//     var params={
//         from_name:document.getElementById("name").value,
//         email_id:document.getElementById("email").value,
//         message:document.getElementById("message").value
//     }
//     emailjs.send("service_2qkccbr","template_as64taj",params).then(function (res){
//         // alert("success!"+res.status)
//         Toastify({
//             text: "Message sent successfully!",
//             duration: 3000,
//             close: true,
//             gravity: "top",
//             position: "center",
//             backgroundColor: "#4CAF50",
//           }).showToast();
//         document.getElementById("name").value="",
//         document.getElementById("email").value="",
//         document.getElementById("message").value="";
//     }), function(error) {
//        alert("failed")
//       };
// }
function sendMail() {
    // Get form values
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var message = document.getElementById("message").value
  
    // Basic validation checks
    if (name ==="" || email=="" || message=="") {
      Toastify({
        text: "Please fill form completely",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "center",
        backgroundColor: "#FF0000",
      }).showToast();
      return; // Exit function if validation fails
    }
  
    // Email validation using regular expression
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      Toastify({
        text: "Please enter a valid email address",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "center",
        backgroundColor: "#FF0000",
      }).showToast();
      return; // Exit function if validation fails
    }
  
    
  
    // If validations pass, send the email
    var params = {
      from_name: name,
      email_id: email,
      message: message
    };
  
    emailjs.send("service_2qkccbr", "template_as64taj", params)
      .then(function (res) {
        Toastify({
          text: "Message sent successfully!",
          duration: 3000,
          close: true,
          gravity: "top",
          position: "center",
          backgroundColor: "#4CAF50",
        }).showToast();
  
        // Clear form inputs after success
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
      })
      .catch(function (error) {
        Toastify({
          text: "Oops! An error occurred, please try again.",
          duration: 3000,
          close: true,
          gravity: "top",
          position: "center",
          backgroundColor: "#FF0000",
        }).showToast();
      });
  }
  