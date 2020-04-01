// submit = #submitBtn, input = #message, alert = .feedback + .show
const form = document.getElementById('message-form');
const btn = document.getElementById('submitBtn'); 

form.addEventListener('click', displayMsg);

function displayMsg() {
  const input = document.getElementById('message').value;
  const msg = document.querySelector('.message-content');
  const alert = document.getElementById('alert');  
  if (input) {
    alert.classList.remove('show');
    msg.innerHTML = input;
  } else {
    alert.classList.add('show');
  }
  return false;
};