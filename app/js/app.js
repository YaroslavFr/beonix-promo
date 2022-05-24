import './easy-toggler.min.js'
import Swiper from 'swiper/bundle'

document.addEventListener('DOMContentLoaded', () => {
	"use strict"
	const breakpoint = window.matchMedia( '(min-width:768px)' );

	// keep track of swiper instances to destroy later
	let mySwiper;
  
	//////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////
  
	const breakpointChecker = function() {
  
	  // if larger viewport and multi-row layout needed
	  if ( breakpoint.matches === true ) {
  
		// clean up old instances and inline styles when available
		if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
  
		// or/and do nothing
		return;
  
		// else if a small viewport and single column layout needed
		} else if ( breakpoint.matches === false ) {
  
		  // fire small viewport version of swiper
		  return enableSwiper();
  
		}
  
	};
	
	//////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////
  
	const enableSwiper = function() {
  
		let swiper = new Swiper ('.swiper', {
  
		loop: true,
		slidesPerView: 'auto',
		spaceBetween: 30,
		centeredSlides: true,
		a11y: true,
		keyboardControl: true,
		grabCursor: true,
	  });
  
	};
  
	//////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////
  
	// keep an eye on viewport size changes
	breakpoint.addListener(breakpointChecker);
  
	// kickstart
	breakpointChecker();
})

document.querySelectorAll('.about__picture-item').forEach(item => {
	
	item.addEventListener('click', event => {
	  document.querySelectorAll('.about__picture_main-item')[0].classList.remove("about__picture_main-item");
	  event.target.classList.add("about__picture_main-item");
	  
	})
  })

// let aboutBlockElems = document.getElementsByClassName('about__picture-item');
// aboutBlockElems.addEventListener("click", positionChanger, false);

