var swiper= new Swiper(".treatments-slider", {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  slidesPerView: 3,
  spaceBetween: 30,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".treatments-slider .swiper-button-next",
    prevEl: ".treatments-slider .swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    601: {
      spaceBetween: 24,
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }
});


document.addEventListener('DOMContentLoaded', function() {
  const accordionItems = document.querySelectorAll('.accordion-item');

  if (accordionItems) {
    accordionItems.forEach(item => {
      const trigger = item.querySelector('.accordion-item-header');
      const content = item.querySelector('.accordion-item-content');

      trigger.addEventListener('click', function() {
        const parent = this.parentNode;

        if (parent.classList.contains('active')) {
          parent.classList.remove('active');
          content.style.height = '0';
        } else {
          document.querySelectorAll('.accordion-item').forEach(child => {
            child.classList.remove('active');
            child.querySelector('.accordion-item-content').style.height = '0';
          });
          parent.classList.add('active');
          content.style.height = content.scrollHeight + 'px';
        }
      });
    });
  }
});


document.addEventListener('DOMContentLoaded', function() {
  var weightRange = document.getElementById('weight-range');
  var weightLoss = document.getElementById('weight-loss');
  var currentWeight = document.getElementById('current-weight');

  function updateWeightValues() {
    var weightLossValue = weightRange.value;
    weightLoss.textContent = weightLossValue;

    // Assuming the initial weight is 252 lbs
    var initialWeight = 252;
    var newWeight = initialWeight + parseInt(weightLossValue, 10);
    currentWeight.textContent = newWeight;

    // Update the background size based on the value
    var percentage = (weightLossValue / weightRange.max) * 100;
    weightRange.style.background = `linear-gradient(to right, #A970AF ${percentage}%, #E7DBE8 ${percentage}%)`;
  }

  // Initial update on page load
  updateWeightValues();

  // Update values when the slider is moved
  weightRange.addEventListener('input', updateWeightValues);
});
