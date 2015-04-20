$(document).ready(function() {
  
  // function tweetsAppend{
    
  // }
  $('.sign-up').on('click', function(e) {
    e.preventDefault();
    var usernameInput = $('#newUsername').val();
    var passwordInput = $('#newPassword').val();
    var emailInput = $('#newEmail').val();

    console.log("Done FER!");
    $.ajax ({
      type: "POST",
      url: "http://localhost:3000/users",
      data: {
        user: {
          username: usernameInput,
          password: usernameInput,
          email: emailInput
        }
      },
      success: function(response) {
        console.log(response);
      }
    });
  });

  // $.ajax ({
  //   type: "POST",
  //   url: "http://localhost:3000/sessions",
  //   data: {
  //     user: {
  //       username: 'yang',
  //       password: 'cantilever'
  //     }
  //   },
  //   xhrFields: {
  //     withCredentials: true
  //   },
  // })


  // $.ajax({
  //     type: "POST",
  //     url: "http://localhost:3000/sessions",
  //     data: {
  //       user: {
  //         username: "harry",
  //         password: "harryharry"
  //       }
  //     },
  //     xhrFields: {
  //       withCredentials: true
  //     },
  //     success: function(response){
  //       console.log("create session / logged in", response);
  //     }
  //   });

  $(".after-login").hide();
})