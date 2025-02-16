const picture = document.querySelector('picture');
const main = document.querySelector('.main');
const form = document.querySelector('form');
const alertMsg = document.querySelector('.alert__msg');
const input = document.getElementById('email');
const submitBtn = document.getElementById('submit');
const success = document.querySelector('.success');
const givenEmail = document.querySelector('.given__email');
const dismissBtn = document.getElementById('dismiss__btn');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const email = input.value;
  
  function valid(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);

  }

  function removeAlert() {
    alertMsg.classList.remove('active');
    input.classList.remove('error');
  }

  if (valid(email)) {
    picture.classList.add('hidden');
    main.classList.add('hidden');
    success.classList.remove('hidden');
    givenEmail.innerText = email;
    
  } else {
    alertMsg.classList.add('active');
    input.classList.add('error');

    setInterval(removeAlert, 5000);

  }

})

dismissBtn.addEventListener('click', () => {
  success.classList.add('hidden');
  picture.classList.remove('hidden');
  main.classList.remove('hidden');
  
})