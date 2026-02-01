const form = document.querySelector('.login-form');

// btn.preventDefaul();
form.addEventListener('submit', event => {
  event.preventDefault();
  const inputEmail = event.currentTarget.elements.email.value;
  const inputPassword = event.currentTarget.elements.password.value;
  if (inputEmail.trim() === '' || inputPassword.trim() === '') {
    alert('All form fields must be filled in');
  }
  const res = { inputEmail, inputPassword };
  console.log(res);
  event.currentTarget.reset();
});
