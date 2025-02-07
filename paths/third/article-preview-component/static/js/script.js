shareSection = document.querySelector('.share__section');
shareBtn = document.querySelector('.share__btn');

shareBtn.addEventListener('click', function () {
  if (shareSection.classList.contains('hidden')) {
    shareSection.classList.remove('hidden');
    shareBtn.classList.add('dark');
  } else {
    shareSection.classList.add('hidden');
    shareBtn.classList.remove('dark');
  }
  
})