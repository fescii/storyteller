document.addEventListener('DOMContentLoaded', () => {
  const bookBtns = document.querySelectorAll('#book-now')
  const modalContainer = document.querySelector('div#modal-container')
  const modal = `
    <modal-book
      url="/good/"
      id="1"
    >
    </modal-book>
  `
  if (bookBtns) {
    bookBtns.forEach(bookBtn => {
      bookBtn.addEventListener('click', (e) => {
        e.preventDefault()
        modalContainer.innerHTML = modal
        // body.insertAdjacentElement('beforeend', modal)
      })
    });				
  }

  // Slider
  const dots = document.querySelectorAll('div.categories > div.category.long > .dots > span.dot');
  let activeDot = document.querySelector('div.categories > div.category.long > .dots > span.dot.active');
  const slides = document.querySelectorAll('div.categories > div.category.long > .slide');
  let currentIndex = 0;
  let reverse = 1; // 1 for forward, -1 for backward

  if (dots && activeDot && slides) {
    function showSlide(index) {
      if (dots && activeDot){
        activeDot.classList.remove('active')
        dots[index].classList.add('active')
        activeDot = dots[index]
      }
      slides.forEach((slide, i) => {
        if( !index === i) {
          const offset = -(i - index)  * 100 * direction;
          slide.style.transform = `translateX(${offset}%)`;
        }
        else{
          const offset = -index  * 100;
          slide.style.transform = `translateX(${offset}%)`;
        }
      });
   }
  
    function nextSlide() {
      if (currentIndex >= 3){
        reverse = -1 // Reverse direction at the start or end
        //currentIndex += reverse
      }
      else if(currentIndex <= 0) {
        reverse = 1; // Reverse direction at the start or end
        //currentIndex += reverse
      }
  
      currentIndex += reverse;
  
  
      showSlide(currentIndex);
    }
  
    setInterval(nextSlide, 2500); // Adjust the interval (in milliseconds) for automatic sliding
  }

})