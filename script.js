const no = document.querySelector('.no');

no.addEventListener('mouseover', function() {
  const random = Math.floor(Math.random() * 100));
  no.style = `
    position: fixed;
    top: ${random}%;
    left: ${random}%;
  `
  {) 
