const responsiveImage = document.getElementById('responsive-image-4');

// Define the URLs of the images for small and large screens
const smallScreenImageUrl = 'styles-conference/assets/image_4_mob.png';
const largeScreenImageUrl = 'styles-conference/assets/image_4_dsk.png';

// Arrow function to update the image source based on screen width
const updateImageSource = () => {
  if (window.matchMedia('(min-width: 768px)').matches) {
    responsiveImage.src = largeScreenImageUrl;
  } else {
    responsiveImage.src = smallScreenImageUrl;
  }
};

// Initial image update
updateImageSource();

// Listen for the window resize event and update the image source
window.addEventListener('resize', updateImageSource);