document.addEventListener("DOMContentLoaded", function(event) {
  // document.querySelector('button.submit-form').addEventListener('click', () => {
  //   submitForm();
  // })
  document.querySelector('#password').addEventListener('change', () => {
    matchPasswords();
  })
  document.querySelector('#confirm-password').addEventListener('change', () => {
    matchPasswords();
  })
})

function matchPasswords() {
  password = document.querySelector('#password')
  confirmPassword = document.querySelector('#confirm-password')
  if (password.value !== confirmPassword.value) {
    password.setCustomValidity("Passwords must match!");
  } else {
    password.setCustomValidity("");
  }
}