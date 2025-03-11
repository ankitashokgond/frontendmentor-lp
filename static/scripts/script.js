const body = document.querySelector('body');
const appearanceBtn = document.getElementById('appearance__btn');
const apBtnIcon = document.querySelector('.material-symbols-outlined');

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  body.classList.add('darkmode');
  apBtnIcon.innerText = "light_mode";
}

appearanceBtn.addEventListener('click', () => {

  if (!body.classList.contains('darkmode')) {

    body.classList.add('darkmode');
    apBtnIcon.innerText = "light_mode";
  } else {

    body.classList.remove('darkmode');
    apBtnIcon.innerText = "dark_mode";
  }
})