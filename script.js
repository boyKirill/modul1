"use strict"

const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());

	}
};

if (isMobile.any()) {
	document.body.classList.add('_touch');
} else {
	document.body.classList.add('_pc');
}


const scrollBtns = document.querySelectorAll('.scrollBtn[data-goto]');
if (scrollBtns.length > 0) {
	scrollBtns.forEach(scrollBtn => {
		scrollBtn.addEventListener("click", scrollBtnsClick);
	});

	function scrollBtnsClick(e) {
		const scrollBtn = e.target;
		if (scrollBtn.dataset.goto && document.querySelector(scrollBtn.dataset.goto)) {
			const gotoBlock = document.querySelector(scrollBtn.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}