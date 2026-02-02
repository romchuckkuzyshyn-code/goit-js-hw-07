const form = document.querySelector('.login-form');

// btn.preventDefaul();
form.addEventListener('submit', event => {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  if (email.trim() === '' || password.trim() === '') {
    return alert('All form fields must be filled in');
  }
  const res = { email, password };
  console.log(res);
  event.currentTarget.reset();
});
