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
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
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
// Это - ваша точка входа для скриптов страницы. Импортируйте сюда нужные вам файлы.


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUdELGFBQWEsR0FBR0UsUUFBUSxDQUFDTCxlQUFlLEVBQUUsRUFBRSxDQUFDO0lBQzdERixhQUFhLENBQUNJLFdBQVcsR0FBR0UsU0FBUzs7SUFFckM7SUFDQSxJQUFJRSxVQUFVLEdBQUlOLGVBQWUsR0FBR0wsV0FBVyxDQUFDWSxHQUFHLEdBQUksR0FBRztJQUMxRFosV0FBVyxDQUFDTCxLQUFLLENBQUNrQixVQUFVLEdBQUkscUNBQW9DRixVQUFXLGNBQWFBLFVBQVcsSUFBRztFQUM1Rzs7RUFFQTtFQUNBUCxrQkFBa0IsQ0FBQyxDQUFDOztFQUVwQjtFQUNBSixXQUFXLENBQUNsQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVzQixrQkFBa0IsQ0FBQztBQUMzRCxDQUFDLENBQUM7Ozs7OztVQ2hGRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zb3VyY2UvanMvc2NyaXB0LmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zb3VyY2UvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHN3aXBlcj0gbmV3IFN3aXBlcihcIi50cmVhdG1lbnRzLXNsaWRlclwiLCB7XG4gIG9ic2VydmVyOiB0cnVlLFxuICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcbiAgb2JzZXJ2ZVNsaWRlQ2hpbGRyZW46IHRydWUsXG4gIHNsaWRlc1BlclZpZXc6IDMsXG4gIHNwYWNlQmV0d2VlbjogMzAsXG4gIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6IFwiLnRyZWF0bWVudHMtc2xpZGVyIC5zd2lwZXItYnV0dG9uLW5leHRcIixcbiAgICBwcmV2RWw6IFwiLnRyZWF0bWVudHMtc2xpZGVyIC5zd2lwZXItYnV0dG9uLXByZXZcIixcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICAzMjA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBzcGFjZUJldHdlZW46IDI0LFxuICAgIH0sXG4gICAgNjAxOiB7XG4gICAgICBzcGFjZUJldHdlZW46IDI0LFxuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICB9LFxuICAgIDEwMjQ6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICBzcGFjZUJldHdlZW46IDMwLFxuICAgIH0sXG4gIH1cbn0pO1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgY29uc3QgYWNjb3JkaW9uSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uLWl0ZW0nKTtcblxuICBpZiAoYWNjb3JkaW9uSXRlbXMpIHtcbiAgICBhY2NvcmRpb25JdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgY29uc3QgdHJpZ2dlciA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbi1pdGVtLWhlYWRlcicpO1xuICAgICAgY29uc3QgY29udGVudCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbi1pdGVtLWNvbnRlbnQnKTtcblxuICAgICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG5cbiAgICAgICAgaWYgKHBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgIGNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gJzAnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb24taXRlbScpLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICBjaGlsZC5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uLWl0ZW0tY29udGVudCcpLnN0eWxlLmhlaWdodCA9ICcwJztcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgY29udGVudC5zdHlsZS5oZWlnaHQgPSBjb250ZW50LnNjcm9sbEhlaWdodCArICdweCc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59KTtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gIHZhciB3ZWlnaHRSYW5nZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWlnaHQtcmFuZ2UnKTtcbiAgdmFyIHdlaWdodExvc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VpZ2h0LWxvc3MnKTtcbiAgdmFyIGN1cnJlbnRXZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC13ZWlnaHQnKTtcblxuICBmdW5jdGlvbiB1cGRhdGVXZWlnaHRWYWx1ZXMoKSB7XG4gICAgdmFyIHdlaWdodExvc3NWYWx1ZSA9IHdlaWdodFJhbmdlLnZhbHVlO1xuICAgIHdlaWdodExvc3MudGV4dENvbnRlbnQgPSB3ZWlnaHRMb3NzVmFsdWU7XG5cbiAgICAvLyBBc3N1bWluZyB0aGUgaW5pdGlhbCB3ZWlnaHQgaXMgMjUyIGxic1xuICAgIHZhciBpbml0aWFsV2VpZ2h0ID0gMjUyO1xuICAgIHZhciBuZXdXZWlnaHQgPSBpbml0aWFsV2VpZ2h0ICsgcGFyc2VJbnQod2VpZ2h0TG9zc1ZhbHVlLCAxMCk7XG4gICAgY3VycmVudFdlaWdodC50ZXh0Q29udGVudCA9IG5ld1dlaWdodDtcblxuICAgIC8vIFVwZGF0ZSB0aGUgYmFja2dyb3VuZCBzaXplIGJhc2VkIG9uIHRoZSB2YWx1ZVxuICAgIHZhciBwZXJjZW50YWdlID0gKHdlaWdodExvc3NWYWx1ZSAvIHdlaWdodFJhbmdlLm1heCkgKiAxMDA7XG4gICAgd2VpZ2h0UmFuZ2Uuc3R5bGUuYmFja2dyb3VuZCA9IGBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNBOTcwQUYgJHtwZXJjZW50YWdlfSUsICNFN0RCRTggJHtwZXJjZW50YWdlfSUpYDtcbiAgfVxuXG4gIC8vIEluaXRpYWwgdXBkYXRlIG9uIHBhZ2UgbG9hZFxuICB1cGRhdGVXZWlnaHRWYWx1ZXMoKTtcblxuICAvLyBVcGRhdGUgdmFsdWVzIHdoZW4gdGhlIHNsaWRlciBpcyBtb3ZlZFxuICB3ZWlnaHRSYW5nZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHVwZGF0ZVdlaWdodFZhbHVlcyk7XG59KTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyDQrdGC0L4gLSDQstCw0YjQsCDRgtC+0YfQutCwINCy0YXQvtC00LAg0LTQu9GPINGB0LrRgNC40L/RgtC+0LIg0YHRgtGA0LDQvdC40YbRiy4g0JjQvNC/0L7RgNGC0LjRgNGD0LnRgtC1INGB0Y7QtNCwINC90YPQttC90YvQtSDQstCw0Lwg0YTQsNC50LvRiy5cblxuaW1wb3J0ICcuL3NjcmlwdCc7XG4iXSwibmFtZXMiOlsic3dpcGVyIiwiU3dpcGVyIiwib2JzZXJ2ZXIiLCJvYnNlcnZlUGFyZW50cyIsIm9ic2VydmVTbGlkZUNoaWxkcmVuIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsIndhdGNoU2xpZGVzUHJvZ3Jlc3MiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiYnJlYWtwb2ludHMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhY2NvcmRpb25JdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaXRlbSIsInRyaWdnZXIiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudCIsInBhcmVudCIsInBhcmVudE5vZGUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsInN0eWxlIiwiaGVpZ2h0IiwiY2hpbGQiLCJhZGQiLCJzY3JvbGxIZWlnaHQiLCJ3ZWlnaHRSYW5nZSIsImdldEVsZW1lbnRCeUlkIiwid2VpZ2h0TG9zcyIsImN1cnJlbnRXZWlnaHQiLCJ1cGRhdGVXZWlnaHRWYWx1ZXMiLCJ3ZWlnaHRMb3NzVmFsdWUiLCJ2YWx1ZSIsInRleHRDb250ZW50IiwiaW5pdGlhbFdlaWdodCIsIm5ld1dlaWdodCIsInBhcnNlSW50IiwicGVyY2VudGFnZSIsIm1heCIsImJhY2tncm91bmQiXSwic291cmNlUm9vdCI6IiJ9