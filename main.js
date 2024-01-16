
const carousel = document.querySelector('.carousel'); 
const images = Array.from(carousel.querySelectorAll('img')); 
const indicatorsContainer = document.querySelector('.carousel-indicators');
let currentIndex = 0; 

            images[currentIndex].classList.add('active'); 
const prevButton = carousel.querySelector('.prev');
const nextButton = carousel.querySelector('.next');

prevButton.addEventListener('click', () => updateCarousel(currentIndex - 1));
nextButton.addEventListener('click', () => updateCarousel(currentIndex + 1)); 
            

setInterval(() => updateCarousel(currentIndex + 1), 3000); 


//--------Indicators defined---------//

/* image is the current image being processed, and index is its index in the images array. The function creates a new div, adds the carousel-indicator class to it, sets up a click event listener that calls updateCarousel(index), appends the new div to indicatorsContainer, and then returns the new div. The map() function then returns a new array containing all these new div elements.*/

const indicators = images.map((image, index) => {
const indicator = document.createElement('div');
                indicator.classList.add('carousel-indicator');
                indicator.addEventListener('click', () => updateCarousel(index));
indicatorsContainer.appendChild(indicator); 
                return indicator;
            });

 //--------Function to change image---------//
const updateCarousel = (newIndex) => { 
 images[currentIndex].classList.remove('active'); 
currentIndex = (newIndex + images.length) % images.length; 
 images[currentIndex].classList.add('active'); 
updateIndicators(); 
            };

 //--------Function to update indicators---------//
const updateIndicators = () => {
    indicators.forEach((indicator, index) => { 
       if (index === currentIndex) { 
         indicator.classList.add('active');
                    } else {
                        indicator.classList.remove('active'); 
                    } 
                });
            };

            updateIndicators(); 