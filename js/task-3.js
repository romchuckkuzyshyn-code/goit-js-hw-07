const inputName = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

inputName.addEventListener('input', event => {
  const value = event.target.value.trim();

  output.textContent = value === '' ? 'Anonymous' : value;
});
