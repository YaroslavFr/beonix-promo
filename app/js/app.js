import './easy-toggler.min.js'
import Swiper from 'swiper/bundle'

document.addEventListener('DOMContentLoaded', () => {
	"use strict"

	const swiper = new Swiper('.swiper', {
		loop: true,
		slidesPerView: 1.2,
		spaceBetween: 30,

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 768px
			768: {
				slidesPerView: 3,
				spaceBetween: 20
			},
		}
	});
})

document.querySelectorAll('.about__picture-item').forEach(item => {
	
	item.addEventListener('click', event => {
	  console.log(event.target);
	  document.querySelectorAll('.about__picture_main-item')[0].classList.remove("about__picture_main-item");
	  event.target.classList.add("about__picture_main-item");
	  
	})
  })

// let aboutBlockElems = document.getElementsByClassName('about__picture-item');
// aboutBlockElems.addEventListener("click", positionChanger, false);

