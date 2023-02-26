// window.onload = function() {
      
// }



// // wait for the DOM to be loaded before accessing elementss
// document.addEventListener("DOMContentLoaded", function() {
  
//   // get form elements
//   const signUpForm = document.querySelector(".sign-up-form form");
//   const nameInput = signUpForm.querySelector("input[type='text'][placeholder='Имя']");
//   const emailInput = signUpForm.querySelector("input[type='text'][placeholder='Email']");
//   const passwordInput = signUpForm.querySelector("input[type='password'][placeholder='Пароль']");
//   const repeatPasswordInput = signUpForm.querySelector("input[type='password'][placeholder='Повторите пароль']");
//   const driverRadioButton = signUpForm.querySelector("#driver");
//   const buyerRadioButton = signUpForm.querySelector("#buyer");
//   const errorMessage = signUpForm.querySelector("#error-message");
//   const continueButton = signUpForm.querySelector("#continue_button");
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const container = document.querySelector('.container');
  
//   // add event listener to the continue button
//   continueButton.addEventListener("click", function(event) {
//     event.preventDefault(); // prevent form submission
    
//     // validate fields
//     if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || passwordInput.value.trim() === "" || repeatPasswordInput.value.trim() === "" || (!driverRadioButton.checked && !buyerRadioButton.checked)) {
//       showErrorMessage("Пожалуйста, заполните все поля",true);
//       return;
//     }
    
//     // validate passwords
//     if (passwordInput.value !== repeatPasswordInput.value) {
//       showErrorMessage("Пароли не совпадают",true);
//       return;
//     }
//     if (!emailRegex.test(emailInput.value)) {
//       showErrorMessage("Email введен неправильно!",true);
//       return;
//     }

//   });

  
//   // define function to show error message
//   function showErrorMessage(message, clear = false) {
//     errorMessage.textContent = message;
//     if (clear) {
//       setTimeout(function() {
//         errorMessage.textContent = "";
//       }, 3000); // display message for 3 seconds
//     }
//     errorMessage.style.color = "red"; // set color to red
//   }
  
// });


$(document).ready(function() {
    const signIn = document.querySelector("#signInButton");
    const signUp = document.querySelector("#signUpButton");
    const signInForm = document.querySelector(".container .sign-in-form");
    const signUpForm = document.querySelector(".container .sign-up-form");
    const overlay_container = document.querySelector(
      ".container .overlay-container"
    );
    const overlay = document.querySelector(
      ".container .overlay-container .overlay"
    );

    signIn.addEventListener("click", () => {
      overlay_container.style.transform = "translateX(100%)";
      overlay.style.transform = "translateX(-50%)";
      signInForm.classList.add("active");
      signUpForm.classList.remove("active");
    });
    signUp.addEventListener("click", () => {
      overlay_container.style.transform = "translateX(0)";
      overlay.style.transform = "translateX(0)";
      signUpForm.classList.add("active");
      signInForm.classList.remove("active");
    
    // add click event listeners to buttons
    
    });

  // Function to validate the date of birth input
   function validateDob() {
      var dobInput = $('input[name="dob_user"]');
      var dob = dobInput.val();
      var dobDate = new Date(dob);
      var today = new Date();
      var age = today.getFullYear() - dobDate.getFullYear();
      var m = today.getMonth() - dobDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < dobDate.getDate())) {
          age--;
      }
      if (age < 18) {
        dobInput.addClass('invalid');
        return false;
      } else {
        dobInput.removeClass('invalid');
        return true;
      }
    }

    // Function to validate the phone number input
   function validatePhone() {
      var phoneInput = $('input[name="phone_num_user"]');
      var phone = phoneInput.val();
      var phoneRegex = /^\+?\d{1,3}\s*\(\d{2}\)\s*\d{3}(-\d{2}){2}$/;
      if (!phoneRegex.test(phone)) {
        phoneInput.addClass('invalid');
        return false;
      } else {
        phoneInput.removeClass('invalid');
        return true;
      }
    }


    function validateDobDriver() {
      var dobInput = $('input[name="dob_driver"]');
      var dob = dobInput.val();
      var dobDate = new Date(dob);
      var today = new Date();
      var age = today.getFullYear() - dobDate.getFullYear();
      var m = today.getMonth() - dobDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < dobDate.getDate())) {
          age--;
      }
      if (age < 18) {
        dobInput.addClass('invalid');
        return false;
      } else {
        dobInput.removeClass('invalid');
        return true;
      }
    }

    // Function to validate the phone number input
   function validatePhoneDriver() {
      var phoneInput = $('input[name="phone_num_driver"]');
      var phone = phoneInput.val();
      var phoneRegex = /^\+?\d{1,3}\s*\(\d{2}\)\s*\d{3}(-\d{2}){2}$/;
      if (!phoneRegex.test(phone)) {
        phoneInput.addClass('invalid');
        return false;
      } else {
        phoneInput.removeClass('invalid');
        return true;
      }
    }
   function getValue(input) {
    switch (input) {
    case "A":
      return 1;
    case "B":
      return 2;
    case "C":
      return 3;
    default:
      return null; 
      }
    }

  $('#create_driver_account').click(function(e) {
      e.preventDefault(); // prevent default form submission behavior
      const storedFormData = localStorage.getItem('formData');
      const formData = JSON.parse(storedFormData);
      var category_licence = $('#drvier_select_category option:selected').text();
      var formDataUserInitial = {
          dob: $('input[name="dob_driver"]').val(),
          first_name: $('input[name="first_name_driver"]').val(),
          last_name: $('input[name="last_name_driver"]').val(),
          phone_num: $('input[name="phone_num_driver"]').val(),
          card_id: $('input[name="card_id_driver"]').val(),
        };
      var dobIsValid = validateDobDriver();
      var phoneIsValid = validatePhoneDriver();

      if (storedFormData) {
        if (formDataUserInitial.dob == '') {
              $('#error-message-driver').text('Дата рождения не выбрана!').css('color', 'red');
              setTimeout(function() {
                $('#error-message-driver').text('').css('color', '');
              }, 3000);
              return;
            }
        if (formDataUserInitial.first_name == '') {
              $('#error-message-driver').text('Имя не заполнено!').css('color', 'red');
              setTimeout(function() {
                $('#error-message-driver').text('').css('color', '');
              }, 3000);
              return;
            }
        if (formDataUserInitial.last_name == '') {
              $('#error-message-driver').text('Фамилия не заполнена!').css('color', 'red');
              setTimeout(function() {
                $('#error-message-driver').text('').css('color', '');
              }, 3000);
              return;
            }
        if (formDataUserInitial.phone_num == '') {
              $('#error-message-driver').text('Номер телефона не заполнен!').css('color', 'red');
              setTimeout(function() {
                $('#error-message-driver').text('').css('color', '');
              }, 3000);
              return;
            }
        if (category_licence == 'Не выбрано' || category_licence == undefined) {
              $('#error-message-driver').text('Категория прав не выбрана!').css('color', 'red');
              setTimeout(function() {
                $('#error-message-driver').text('').css('color', '');
              }, 3000);
              return;
            }
        if (dobIsValid === false) {
            $('#error-message-driver').text('Вам должно быть больше 18 лет!').css('color', 'red');
                  setTimeout(function() {
                    $('#error-message-driver').text('').css('color', '');
                  }, 3000);
                  return;
            }
        if (phoneIsValid === false) {
            $('#error-message-driver').text('Введите действительный номер!').css('color', 'red');
                  setTimeout(function() {
                    $('#error-message-driver').text('').css('color', '');
                  }, 3000);
                  return;
            }
        const category_id = getValue(category_licence); // result will be 1
        console.log(category_id)
        $.ajax({
              type: 'POST',
              url: 'http://127.0.0.1:8000/api/users/register/driver/',
              data: JSON.stringify({
                  'role':formData.role,
                  'username': formData.name,
                  'email': formData.email,
                  'password': formData.password,
                  'phone_number': formDataUserInitial.phone_num,
                  'user_dob': formDataUserInitial.dob,
                  'first_name': formDataUserInitial.first_name,
                  'last_name': formDataUserInitial.last_name,
                  'card_id': formDataUserInitial.card_id,
                  'category': category_id,
              }),
              // data: JSON.stringify(formData.role,formData.name, formData.password),
              contentType: 'application/json',
              success: function(response) {
                //   тут успех
              },
              error: function(response) {
                  var jsonString = JSON.stringify(response);
                  var jsonObject = JSON.parse(jsonString);
                  var error_msg = jsonObject['responseText'];
              }

            });
        }
    });
  $('input[name="dob_driver"]').on('change', function() {
  validateDob();
    });

  $('input[name="phone_num_driver"]').on('change', function() {
  validatePhone();
  });
  $('input[name="phone_num_driver"]').mask("+375 (99) 999-99-99");

  $('input[name="dob_user"]').on('change', function() {
  validateDob();
    });

  $('input[name="phone_num_user"]').on('change', function() {
  validatePhone();
  });

  $('input[name="phone_num_user"]').mask("+375 (99) 999-99-99");

  $('#create_user_account').click(function(e) {
      e.preventDefault(); // prevent default form submission behavior
      const storedFormData = localStorage.getItem('formData');
      const formData = JSON.parse(storedFormData);
      var formDataUserInitial = {
          dob: $('input[name="dob_user"]').val(),
          first_name: $('input[name="first_name_user"]').val(),
          last_name: $('input[name="last_name_user"]').val(),
          phone_num: $('input[name="phone_num_user"]').val(),
        };
      var dobIsValid = validateDob();
      var phoneIsValid = validatePhone();

      if (storedFormData) {
        console.log(formDataUserInitial.dob)
        if (formDataUserInitial.dob == '') {
              $('#error-message-user').text('Дата рождения не выбрана!').css('color', 'red');
              setTimeout(function() {
                $('#error-message-user').text('').css('color', '');
              }, 3000);
              return;
            }
        console.log(formDataUserInitial.dob)
        if (formDataUserInitial.first_name == '') {
              $('#error-message-user').text('Имя не заполнено!').css('color', 'red');
              setTimeout(function() {
                $('#error-message-user').text('').css('color', '');
              }, 3000);
              return;
            }
        console.log(formDataUserInitial.dob)
        if (formDataUserInitial.last_name == '') {
              $('#error-message-user').text('Фамилия не заполнена!').css('color', 'red');
              setTimeout(function() {
                $('#error-message-user').text('').css('color', '');
              }, 3000);
              return;
            }
        console.log(formDataUserInitial.dob)
        if (formDataUserInitial.phone_num == '') {
              $('#error-message-user').text('Номер телефона не заполнен!').css('color', 'red');
              setTimeout(function() {
                $('#error-message-user').text('').css('color', '');
              }, 3000);
              return;
            }
        if (dobIsValid === false) {
            $('#error-message-user').text('Вам должно быть больше 18 лет!').css('color', 'red');
                  setTimeout(function() {
                    $('#error-message-user').text('').css('color', '');
                  }, 3000);
                  return;
            }
        if (phoneIsValid === false) {
            $('#error-message-user').text('Введите действительный номер!').css('color', 'red');
                  setTimeout(function() {
                    $('#error-message-user').text('').css('color', '');
                  }, 3000);
                  return;
            }
        $.ajax({
              type: 'POST',
              url: 'http://127.0.0.1:8000/api/users/register/customer/',
              data: JSON.stringify({
                  'role':formData.role,
                  'username': formData.name,
                  'email': formData.email,
                  'password': formData.password,
                  'phone_number': formDataUserInitial.phone_num,
                  'user_dob': formDataUserInitial.dob,
                  'first_name': formDataUserInitial.first_name,
                  'last_name': formDataUserInitial.last_name,
              }),
              // data: JSON.stringify(formData.role,formData.name, formData.password),
              contentType: 'application/json',
              success: function(response) {
                //   тут успех
              },
              error: function(response) {
                  var jsonString = JSON.stringify(response);
                  var jsonObject = JSON.parse(jsonString);
                  var error_msg = jsonObject['responseText'];
              }

            });
        }
    });

  $('#continue_button').click(function(e) {
    e.preventDefault(); 
    
    // get form data
    var formData = {
      name: $('input[name="name"]').val(),
      email: $('input[name="email_input"]').val(),
      password: $('input[name="pass_input"]').val(),
      repassword: $('input[name="repass_input"]').val(),
      role: $('input[name="contact"]:checked').val()
    };

    if (formData.role == undefined) {
      $('#error-message').text('Поля выбора обязательно к заполнению!').css('color', 'red');
      setTimeout(function() {
        $('#error-message').text('').css('color', '');
      }, 3000);
      return;
    }
    
    if (formData.name == '') {
      $('#error-message').text('Поле имя пользователя не может быть пустым!').css('color', 'red');
      setTimeout(function() {
        $('#error-message').text('').css('color', '');
      }, 3000);
      return;
    }
    if (formData.email == '') {
      $('#error-message').text('Поле email не может быть пустым!').css('color', 'red');
      setTimeout(function() {
        $('#error-message').text('').css('color', '');
      }, 3000);
      return;
    }
    var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(formData.email)) {
      $('#error-message').text('Пожалуйста, введите действительный email!').css('color', 'red');
      setTimeout(function() {
        $('#error-message').text('').css('color', '');
      }, 3000);
      return;
    }

    if (formData.password == '') {
      $('#error-message').text('Поле пароль не может быть пустым!').css('color', 'red');
      setTimeout(function() {
        $('#error-message').text('').css('color', '');
      }, 3000);
      return;
    }

    // check that password and confirmation fields match
    if (formData.password !== formData.repassword) {
      $('#error-message').text('Введенные пароли не совпадают!').css('color', 'red');
      setTimeout(function() {
        $('#error-message').text('').css('color', '');
      }, 3000);
      return;
    }
    localStorage.setItem('formData', JSON.stringify(formData));
    // Отправка на апи водитель
    $.ajax({
      type: 'POST',
      url: 'http://127.0.0.1:8000/api/users/check/',
      data: JSON.stringify({
          'role':formData.role,
          'username': formData.name,
          'email': formData.email,
          'password': formData.password,
      }),
      // data: JSON.stringify(formData.role,formData.name, formData.password),
      contentType: 'application/json',
      success: function(response) {
      	if (formData.role == '3') {
          $('.main_user_info_form').hide();
          $('.initial_driver_info_form').show();
      	}
      	if (formData.role == '2') {
      	  $('.main_user_info_form').hide();
          $('.initial_user_info_form').show();
      	}
      },
      error: function(response) {
          var jsonString = JSON.stringify(response);
          var jsonObject = JSON.parse(jsonString);
          var error_msg = jsonObject['responseText'];
          if (error_msg.includes('password') || error_msg.includes('пароль')) {
            $('#error-message').text('Пароль слишком простой!').css('color', 'red');
              setTimeout(function() {
                $('#error-message').text('').css('color', '');
              }, 3000);
              }
        if (error_msg.includes('логином') || (error_msg.includes("username"))) {
            $('#error-message').text('Такое имя пользователя уже занято!').css('color', 'red');
              setTimeout(function() {
                $('#error-message').text('').css('color', '');
              }, 3000);
              }
        if (error_msg.includes('email') || error_msg.includes('почта')) {
            $('#error-message').text('Почта уже зарегистрирована!').css('color', 'red');
              setTimeout(function() {
                $('#error-message').text('').css('color', '');
              }, 3000);
              }
      }

    });

  });

});
