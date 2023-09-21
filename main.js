import * as small from './small_data.js';
import * as large from './large_data.js';

// Select responsive DOM elements
const responsiveGuaranteeImage = document.getElementById('responsive-guarantee-img');
const responsiveStars = document.getElementById('stars');
const responsiveClarifionImage = document.getElementById('image-removebg');
const responsivePaymentMethods = document.getElementById('payment-methods');

// Arrow function to update the sources based on screen width
const updateImageSource = () => {
  if (window.matchMedia('(min-width: 768px)').matches) {
    responsiveGuaranteeImage.src = large.GUARANTEE_IMG_URL;
    responsiveStars.innerHTML = large.STARS;
    responsiveClarifionImage.src = large.CLARIFION_IMAGE_URL;
    responsivePaymentMethods.innerHTML = large.PAYMENT_METHODS;
  } else {
    responsiveGuaranteeImage.src = small.GUARANTEE_IMG_URL;
    responsiveStars.innerHTML = small.STARS;
    responsiveClarifionImage.src = small.CLARIFION_IMAGE_URL;
    responsivePaymentMethods.innerHTML = small.PAYMENT_METHODS;
  }
};

// Initial elements load
updateImageSource();

// Listen for the window resize event and update the image source
window.addEventListener('resize', updateImageSource);