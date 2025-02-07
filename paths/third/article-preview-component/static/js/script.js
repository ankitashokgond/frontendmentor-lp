const shareSection = document.querySelector('.share__section');
const shareBtn = document.querySelector('.share__btn');

const currentUrl = encodeURIComponent(window.location.href);
const facebookShare = document.querySelector('.facebook');
const twitterShare = document.querySelector('.twitter');
const pinterest = document.querySelector('.pinterest');

shareBtn.addEventListener('click', function () {
  if (shareSection.classList.contains('hidden')) {
    shareSection.classList.remove('hidden');
    shareBtn.classList.add('dark');
  } else {
    shareSection.classList.add('hidden');
    shareBtn.classList.remove('dark');
  }
  
})

facebookShare.href = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
twitterShare.href = `https://twitter.com/intent/tweet?url=${currentUrl}`;
pinterestShare.href = `https://www.pinterest.com/pin/create/button/?url=${currentUrl}`;