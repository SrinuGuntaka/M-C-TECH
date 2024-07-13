// timings of m&c
document.addEventListener('DOMContentLoaded', () => {
    const hoursElement = document.getElementById('hours');
    const hoursDropdown = document.getElementById('hours-dropdown');
    const todayHoursElement = document.getElementById('today-hours');

    const openingHours = {
        sunday: 'Closed',
        monday: '09:00 am - 05:00 pm',
        tuesday: '09:00 am - 05:00 pm',
        wednesday: '09:00 am - 05:00 pm',
        thursday: '09:00 am - 05:00 pm',
        friday: '09:00 am - 05:00 pm',
        saturday: 'Closed'
    };

    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 is Sunday, 6 is Saturday
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

    // Set today's hours
    todayHoursElement.textContent = openingHours[days[dayOfWeek]];

    hoursElement.addEventListener('click', () => {
        hoursDropdown.style.display = hoursDropdown.style.display === 'none' || hoursDropdown.style.display === '' ? 'block' : 'none';
    });

    document.addEventListener('click', (event) => {
        if (!hoursElement.contains(event.target)) {
            hoursDropdown.style.display = 'none';
        }
    });

    // Highlight today's hours
    document.getElementById(days[dayOfWeek]).classList.add('highlight');
});
// gallery images js
let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let thumbnails = document.getElementsByClassName("thumbnail");

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  for (i = 0; i < thumbnails.length; i++) {
    thumbnails[i].children[0].style.opacity = "0.6";
  }

  slides[slideIndex-1].style.display = "block";  
  thumbnails[slideIndex-1].children[0].style.opacity = "1";
}

// Auto slideshow
let autoIndex = 0;
function autoShowSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  let thumbnails = document.getElementsByClassName("thumbnail");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  autoIndex++;
  if (autoIndex > slides.length) {autoIndex = 1}    

  for (i = 0; i < thumbnails.length; i++) {
    thumbnails[i].children[0].style.opacity = "0.6";
  }

  slides[autoIndex-1].style.display = "block";  
  thumbnails[autoIndex-1].children[0].style.opacity = "1";

  setTimeout(autoShowSlides, 5000); // Change image every 5 seconds
}

autoShowSlides();
//sticky button js
function toggleLoginBox() {
    const loginBox = document.getElementById('loginBox');
    if (loginBox.style.display === 'none' || loginBox.style.display === '') {
        loginBox.style.display = 'block';
    } else {
        loginBox.style.display = 'none';
    }
}
