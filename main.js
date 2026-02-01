const slider = document.querySelector('.scroll_container');
const slider1 = document.querySelector('.scroll_container1');
const slider2 = document.querySelector('.scroll_container2');
const slider3 = document.querySelector('.scroll_container3');
const slider4 = document.querySelector('.scroll_container4');

slider.addEventListener('wheel', (e) => {
  e.preventDefault();
  const scrollAmount = 300; 
  const direction = e.deltaY > 0 ? 1 : -1;
  
  slider.scrollBy({
    left: scrollAmount * direction,
    behavior: 'smooth'
  });
});

slider1.addEventListener('wheel', (e) => {
  e.preventDefault();
  const scrollAmount = 300; 
  const direction = e.deltaY > 0 ? 1 : -1;
  
  slider1.scrollBy({
    left: scrollAmount * direction,
    behavior: 'smooth'
  });
});

slider2.addEventListener('wheel', (e) => {
  e.preventDefault();
  const scrollAmount = 300; 
  const direction = e.deltaY > 0 ? 1 : -1;
  
  slider2.scrollBy({
    left: scrollAmount * direction,
    behavior: 'smooth'
  });
});

slider3.addEventListener('wheel', (e) => {
  e.preventDefault();
  const scrollAmount = 300; 
  const direction = e.deltaY > 0 ? 1 : -1;
  
  slider3.scrollBy({
    left: scrollAmount * direction,
    behavior: 'smooth'
  });
});

slider4.addEventListener('wheel', (e) => {
  e.preventDefault();
  const scrollAmount = 300; 
  const direction = e.deltaY > 0 ? 1 : -1;
  
  slider4.scrollBy({
    left: scrollAmount * direction,
    behavior: 'smooth'
  });
});

/*  */

const headerEl = document.getElementById('header')

window.addEventListener('scroll', function() {
  const scrollPos = window.scrollY

  console.log(scrollPos)
  if (scrollPos > 500) {
    headerEl.classList.add('header_mini')
  } else {
    headerEl.classList.remove('header_mini')
  }
})

/* button */

const button = document.querySelector('.btn_gallery')
const cards = document.querySelector('.invisible_cards')
const card_scroll = document.querySelector('.glr_card_scroll')

let i = 0
button.addEventListener('click', function() {
  if (i % 2 != 0) {
    cards.classList.add('invisible_js')
    button.innerHTML = "Посмотреть всё"

    card_scroll.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    })
  } else {
    cards.classList.remove('invisible_js')
    button.innerHTML = "Убрать"

    cards.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    })
  }


  i += 1;

})

const pashalka = document.querySelector('.paskalka')
const sofg = document.querySelector('.sofg')

let count = 0
pashalka.addEventListener('click', function() {

  if (count > 10) {
    sofg.classList.add('visible_pashalka')
    count += 1
  } else {
    count += 1
  }
})