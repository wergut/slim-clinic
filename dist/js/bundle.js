/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 145:
/***/ (() => {

var swiper = new Swiper(".treatments-slider", {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  slidesPerView: 3,
  spaceBetween: 30,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".treatments-slider .swiper-button-next",
    prevEl: ".treatments-slider .swiper-button-prev"
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 24
    },
    601: {
      spaceBetween: 24,
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});
var swiper1 = new Swiper(".before-after-slider", {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  slidesPerView: 1,
  spaceBetween: 30,
  watchSlidesProgress: true,
  allowTouchMove: false,
  navigation: {
    nextEl: ".before-after-slider .swiper-button-next",
    prevEl: ".before-after-slider .swiper-button-prev"
  }
});
var swiper2 = new Swiper(".specialists-slider", {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  slidesPerView: 3,
  spaceBetween: 24,
  watchSlidesProgress: true,
  allowTouchMove: false,
  freeMode: true
});
document.addEventListener('DOMContentLoaded', function () {
  const accordionItems = document.querySelectorAll('.accordion-item');
  if (accordionItems) {
    accordionItems.forEach(item => {
      const trigger = item.querySelector('.accordion-item-header');
      const content = item.querySelector('.accordion-item-content');
      trigger.addEventListener('click', function () {
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
document.addEventListener('DOMContentLoaded', function () {
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
    var percentage = weightLossValue / weightRange.max * 100;
    weightRange.style.background = `linear-gradient(to right, #A970AF ${percentage}%, #E7DBE8 ${percentage}%)`;
  }

  // Initial update on page load
  updateWeightValues();

  // Update values when the slider is moved
  weightRange.addEventListener('input', updateWeightValues);
});
(function ($) {
  var $dragMe = $(".dragme"),
    $container = $(".sl-container"),
    $viewAfter = $(".view-after");
  $dragMe.draggable({
    containment: "parent",
    drag: function () {
      $viewAfter.css({
        width: parseFloat($(this).css('left')) + 5
      });
    }
  });
  $container.on("click", function (event) {
    var eventLeft = event.pageX - $container.offset().left - 15;
    animateTo(eventLeft);
  });
  animateTo("40%");
  function animateTo(_left) {
    $dragMe.animate({
      left: _left
    }, 'slow', 'linear');
    $viewAfter.animate({
      width: _left
    }, 'slow', 'linear');
  }
})(jQuery);
document.addEventListener('DOMContentLoaded', function () {
  const btnMenuMobile = document.querySelector('.btn-popup-menu');
  const headerMobileWrapper = document.querySelector('.header-nav');
  btnMenuMobile.addEventListener('click', function () {
    headerMobileWrapper.classList.toggle('show');
    if (headerMobileWrapper.classList.contains('show')) {
      btnMenuMobile.classList.add('cross');
    } else {
      btnMenuMobile.classList.remove('cross');
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const locationsBtn = document.querySelector('.btn-locations');
  const locationsCards = document.querySelector('.locations-list');
  locationsBtn.addEventListener('click', function () {
    locationsCards.classList.toggle('hidden');
    locationsBtn.classList.toggle('rotate');
  });
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(145);
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_script__WEBPACK_IMPORTED_MODULE_0__);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NvdXJjZS9qcy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NvdXJjZS9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgc3dpcGVyID0gbmV3IFN3aXBlcihcIi50cmVhdG1lbnRzLXNsaWRlclwiLCB7XG4gIG9ic2VydmVyOiB0cnVlLFxuICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcbiAgb2JzZXJ2ZVNsaWRlQ2hpbGRyZW46IHRydWUsXG4gIHNsaWRlc1BlclZpZXc6IDMsXG4gIHNwYWNlQmV0d2VlbjogMzAsXG4gIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6IFwiLnRyZWF0bWVudHMtc2xpZGVyIC5zd2lwZXItYnV0dG9uLW5leHRcIixcbiAgICBwcmV2RWw6IFwiLnRyZWF0bWVudHMtc2xpZGVyIC5zd2lwZXItYnV0dG9uLXByZXZcIixcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICAzMjA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBzcGFjZUJldHdlZW46IDI0LFxuICAgIH0sXG4gICAgNjAxOiB7XG4gICAgICBzcGFjZUJldHdlZW46IDI0LFxuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICB9LFxuICAgIDEwMjQ6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICBzcGFjZUJldHdlZW46IDMwLFxuICAgIH0sXG4gIH1cbn0pO1xuXG52YXIgc3dpcGVyMSA9IG5ldyBTd2lwZXIoXCIuYmVmb3JlLWFmdGVyLXNsaWRlclwiLCB7XG4gIG9ic2VydmVyOiB0cnVlLFxuICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcbiAgb2JzZXJ2ZVNsaWRlQ2hpbGRyZW46IHRydWUsXG4gIHNsaWRlc1BlclZpZXc6IDEsXG4gIHNwYWNlQmV0d2VlbjogMzAsXG4gIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSxcbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogXCIuYmVmb3JlLWFmdGVyLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXG4gICAgcHJldkVsOiBcIi5iZWZvcmUtYWZ0ZXItc2xpZGVyIC5zd2lwZXItYnV0dG9uLXByZXZcIixcbiAgfSxcbn0pO1xuXG52YXIgc3dpcGVyMiA9IG5ldyBTd2lwZXIoXCIuc3BlY2lhbGlzdHMtc2xpZGVyXCIsIHtcbiAgb2JzZXJ2ZXI6IHRydWUsXG4gIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxuICBvYnNlcnZlU2xpZGVDaGlsZHJlbjogdHJ1ZSxcbiAgc2xpZGVzUGVyVmlldzogMyxcbiAgc3BhY2VCZXR3ZWVuOiAyNCxcbiAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcbiAgYWxsb3dUb3VjaE1vdmU6IGZhbHNlLFxuICBmcmVlTW9kZTogdHJ1ZSxcbn0pO1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgY29uc3QgYWNjb3JkaW9uSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uLWl0ZW0nKTtcblxuICBpZiAoYWNjb3JkaW9uSXRlbXMpIHtcbiAgICBhY2NvcmRpb25JdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgY29uc3QgdHJpZ2dlciA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbi1pdGVtLWhlYWRlcicpO1xuICAgICAgY29uc3QgY29udGVudCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbi1pdGVtLWNvbnRlbnQnKTtcblxuICAgICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG5cbiAgICAgICAgaWYgKHBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgIGNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gJzAnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb24taXRlbScpLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICBjaGlsZC5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uLWl0ZW0tY29udGVudCcpLnN0eWxlLmhlaWdodCA9ICcwJztcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgY29udGVudC5zdHlsZS5oZWlnaHQgPSBjb250ZW50LnNjcm9sbEhlaWdodCArICdweCc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59KTtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gIHZhciB3ZWlnaHRSYW5nZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWlnaHQtcmFuZ2UnKTtcbiAgdmFyIHdlaWdodExvc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VpZ2h0LWxvc3MnKTtcbiAgdmFyIGN1cnJlbnRXZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC13ZWlnaHQnKTtcblxuICBmdW5jdGlvbiB1cGRhdGVXZWlnaHRWYWx1ZXMoKSB7XG4gICAgdmFyIHdlaWdodExvc3NWYWx1ZSA9IHdlaWdodFJhbmdlLnZhbHVlO1xuICAgIHdlaWdodExvc3MudGV4dENvbnRlbnQgPSB3ZWlnaHRMb3NzVmFsdWU7XG5cbiAgICAvLyBBc3N1bWluZyB0aGUgaW5pdGlhbCB3ZWlnaHQgaXMgMjUyIGxic1xuICAgIHZhciBpbml0aWFsV2VpZ2h0ID0gMjUyO1xuICAgIHZhciBuZXdXZWlnaHQgPSBpbml0aWFsV2VpZ2h0ICsgcGFyc2VJbnQod2VpZ2h0TG9zc1ZhbHVlLCAxMCk7XG4gICAgY3VycmVudFdlaWdodC50ZXh0Q29udGVudCA9IG5ld1dlaWdodDtcblxuICAgIC8vIFVwZGF0ZSB0aGUgYmFja2dyb3VuZCBzaXplIGJhc2VkIG9uIHRoZSB2YWx1ZVxuICAgIHZhciBwZXJjZW50YWdlID0gKHdlaWdodExvc3NWYWx1ZSAvIHdlaWdodFJhbmdlLm1heCkgKiAxMDA7XG4gICAgd2VpZ2h0UmFuZ2Uuc3R5bGUuYmFja2dyb3VuZCA9IGBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNBOTcwQUYgJHtwZXJjZW50YWdlfSUsICNFN0RCRTggJHtwZXJjZW50YWdlfSUpYDtcbiAgfVxuXG4gIC8vIEluaXRpYWwgdXBkYXRlIG9uIHBhZ2UgbG9hZFxuICB1cGRhdGVXZWlnaHRWYWx1ZXMoKTtcblxuICAvLyBVcGRhdGUgdmFsdWVzIHdoZW4gdGhlIHNsaWRlciBpcyBtb3ZlZFxuICB3ZWlnaHRSYW5nZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHVwZGF0ZVdlaWdodFZhbHVlcyk7XG59KTtcblxuKGZ1bmN0aW9uKCQpIHtcbiAgdmFyICRkcmFnTWUgPSAkKFwiLmRyYWdtZVwiKSxcbiAgICAkY29udGFpbmVyID0gJChcIi5zbC1jb250YWluZXJcIiksXG4gICAgJHZpZXdBZnRlciA9ICQoXCIudmlldy1hZnRlclwiKTtcbiAgJGRyYWdNZS5kcmFnZ2FibGUoe1xuICAgIGNvbnRhaW5tZW50OiBcInBhcmVudFwiLFxuICAgIGRyYWc6IGZ1bmN0aW9uKCkge1xuICAgICAgJHZpZXdBZnRlci5jc3Moe1xuICAgICAgICB3aWR0aCA6IHBhcnNlRmxvYXQoJCh0aGlzKS5jc3MoJ2xlZnQnKSkgKyA1XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICAkY29udGFpbmVyLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgZXZlbnRMZWZ0ID0gZXZlbnQucGFnZVggLSAkY29udGFpbmVyLm9mZnNldCgpLmxlZnQgLSAxNTtcbiAgICBhbmltYXRlVG8oZXZlbnRMZWZ0KTtcbiAgfSk7XG4gIGFuaW1hdGVUbyhcIjQwJVwiKTtcbiAgZnVuY3Rpb24gYW5pbWF0ZVRvKF9sZWZ0KSB7XG4gICAgJGRyYWdNZS5hbmltYXRlKHtcbiAgICAgIGxlZnQ6IF9sZWZ0XG4gICAgfSwgJ3Nsb3cnLCAnbGluZWFyJyk7XG4gICAgJHZpZXdBZnRlci5hbmltYXRlKHtcbiAgICAgIHdpZHRoOiBfbGVmdFxuICAgIH0sICdzbG93JywgJ2xpbmVhcicpO1xuICB9XG59KShqUXVlcnkpO1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGJ0bk1lbnVNb2JpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXBvcHVwLW1lbnUnKTtcbiAgY29uc3QgaGVhZGVyTW9iaWxlV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItbmF2Jyk7XG5cbiAgYnRuTWVudU1vYmlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBoZWFkZXJNb2JpbGVXcmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcblxuICAgIGlmIChoZWFkZXJNb2JpbGVXcmFwcGVyLmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKSB7XG4gICAgICBidG5NZW51TW9iaWxlLmNsYXNzTGlzdC5hZGQoJ2Nyb3NzJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ0bk1lbnVNb2JpbGUuY2xhc3NMaXN0LnJlbW92ZSgnY3Jvc3MnKTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGxvY2F0aW9uc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tbG9jYXRpb25zJyk7XG4gIGNvbnN0IGxvY2F0aW9uc0NhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2F0aW9ucy1saXN0Jyk7XG5cbiAgbG9jYXRpb25zQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGxvY2F0aW9uc0NhcmRzLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIGxvY2F0aW9uc0J0bi5jbGFzc0xpc3QudG9nZ2xlKCdyb3RhdGUnKTtcbiAgfSk7XG59KTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJpbXBvcnQgJy4vc2NyaXB0JztcbiJdLCJuYW1lcyI6WyJzd2lwZXIiLCJTd2lwZXIiLCJvYnNlcnZlciIsIm9ic2VydmVQYXJlbnRzIiwib2JzZXJ2ZVNsaWRlQ2hpbGRyZW4iLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwid2F0Y2hTbGlkZXNQcm9ncmVzcyIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJicmVha3BvaW50cyIsInN3aXBlcjEiLCJhbGxvd1RvdWNoTW92ZSIsInN3aXBlcjIiLCJmcmVlTW9kZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImFjY29yZGlvbkl0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpdGVtIiwidHJpZ2dlciIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50IiwicGFyZW50IiwicGFyZW50Tm9kZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwic3R5bGUiLCJoZWlnaHQiLCJjaGlsZCIsImFkZCIsInNjcm9sbEhlaWdodCIsIndlaWdodFJhbmdlIiwiZ2V0RWxlbWVudEJ5SWQiLCJ3ZWlnaHRMb3NzIiwiY3VycmVudFdlaWdodCIsInVwZGF0ZVdlaWdodFZhbHVlcyIsIndlaWdodExvc3NWYWx1ZSIsInZhbHVlIiwidGV4dENvbnRlbnQiLCJpbml0aWFsV2VpZ2h0IiwibmV3V2VpZ2h0IiwicGFyc2VJbnQiLCJwZXJjZW50YWdlIiwibWF4IiwiYmFja2dyb3VuZCIsIiQiLCIkZHJhZ01lIiwiJGNvbnRhaW5lciIsIiR2aWV3QWZ0ZXIiLCJkcmFnZ2FibGUiLCJjb250YWlubWVudCIsImRyYWciLCJjc3MiLCJ3aWR0aCIsInBhcnNlRmxvYXQiLCJvbiIsImV2ZW50IiwiZXZlbnRMZWZ0IiwicGFnZVgiLCJvZmZzZXQiLCJsZWZ0IiwiYW5pbWF0ZVRvIiwiX2xlZnQiLCJhbmltYXRlIiwialF1ZXJ5IiwiYnRuTWVudU1vYmlsZSIsImhlYWRlck1vYmlsZVdyYXBwZXIiLCJ0b2dnbGUiLCJsb2NhdGlvbnNCdG4iLCJsb2NhdGlvbnNDYXJkcyJdLCJzb3VyY2VSb290IjoiIn0=