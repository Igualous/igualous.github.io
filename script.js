const no = document.querySelector('.no');
const yes = document.querySelector(".yes");
const modal = document.querySelector('.modal');

// EVENTS
no.addEventListener('mouseover', function(e) {
    e.preventDefault();
  const random1 = Math.floor(Math.random() * 80);
  const random2 = Math.floor(Math.random() * 80);
  no.style = `
    position: fixed;
    top: ${random1}%;
    left: ${random2}%;
  `
}) 
no.addEventListener('click', function() {
    const random = Math.floor(Math.random() * 80);
    no.style = `
      position: fixed;
      top: ${random}%;
      left: ${random}%;
    `
  }) 

yes.addEventListener('click', function(e) {
    e.preventDefault();
    modal.style.display = 'flex';
})
