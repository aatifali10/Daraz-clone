const carousel = document.querySelector(".carousel");
const images = Array.from(carousel.querySelectorAll("img"));
const indicatorsContainer = document.querySelector(".carousel-indicators");
let currentIndex = 0;

images[currentIndex].classList.add("active");
const prevButton = carousel.querySelector(".prev");
const nextButton = carousel.querySelector(".next");

prevButton.addEventListener("click", () => updateCarousel(currentIndex - 1));
nextButton.addEventListener("click", () => updateCarousel(currentIndex + 1));

setInterval(() => updateCarousel(currentIndex + 1), 3000);

const indicators = images.map((image, index) => {
  const indicator = document.createElement("div");
  indicator.classList.add("carousel-indicator");
  indicator.addEventListener("click", () => updateCarousel(index));
  indicatorsContainer.appendChild(indicator);
  return indicator;
});

const updateCarousel = (newIndex) => {
  images[currentIndex].classList.remove("active");
  currentIndex = (newIndex + images.length) % images.length;
  images[currentIndex].classList.add("active");
  updateIndicators();
};

const updateIndicators = () => {
  indicators.forEach((indicator, index) => {
    if (index === currentIndex) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  });
};

updateIndicators();

function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  const timeString = hours;
  const timeString2 = minutes;
  const timeString3 = seconds;
  document.getElementById("clock").textContent = timeString;
  document.getElementById("minutes").textContent = timeString2;
  document.getElementById("seconds").textContent = timeString3;
}

setInterval(updateTime, 1000);

updateTime();
