function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  var form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  var email = document.getElementById('email').value;
  if (validateEmail(email)) {
    alert('Email address is valid');
  } else {
    alert('Email address is invalid');
  }
});
