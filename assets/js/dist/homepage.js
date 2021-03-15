const weathcurrTabs = document.querySelectorAll(
	'.weathercurrency__left__tabs div'
)

weathcurrTabs.forEach((each) => {
	each.addEventListener('click', () => {
		weathcurrTabs.forEach((one) => {
			one.classList.toggle('active')
		})
		weatherCurrencyLeft.classList.toggle('currency')
	})
})

const homeMainSlider = new Swiper('.homeMain__slider', {
	slidesPerView: 1,
	spaceBetween: 1,
	navigation: {
		nextEl: '.homeMain__slider__navright',
		prevEl: '.homeMain__slider__navleft',
	},
	pagination: {
		el: '.homeMain__slider__pagination',
		type: 'bullets',
	},
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
})
const runningstringP = document.querySelector('.runningString__p')
const setRunningStringSpeed = (el) => {
	const width = el.clientWidth
	const speed = (+width / 4) * 39
	el.style.animationDuration = `${speed}ms`
	setTimeout(() => {
		el.classList.add('running')
	}, 50)
}
$(document).ready(function () {
	setRunningStringSpeed(runningstringP)

	$('#datepicker').simpleCalendar({
		//Defaults options below
		//string of months starting from january
		months: [
			'january',
			'february',
			'march',
			'april',
			'may',
			'june',
			'july',
			'august',
			'september',
			'october',
			'november',
			'december',
		],
		days: [
			'su',
			'mo',
			'tu',
			'we',
			'th',
			'fr',
			'sa',
		],
		displayYear: true, // Display year in header
		fixedStartDay: 0, // Week begin always by monday or by day set by number 0 = sunday, 7 = saturday, false = month always begin by first day of the month
		displayEvent: true, // Display existing event
		disableEventDetails: true, // disable showing event details
		disableEmptyDetails: true, // disable showing empty date details
		events: [], // List of events
		onInit: function (calendar) {}, // Callback after first initialization
		onMonthChange: function (month, year) {}, // Callback on month change
		onDateSelect: function (date, events) {}, // Callback on date selection
		onEventSelect: function () {}, // Callback on event selection - use $(this).data('event') to access the event
		onEventCreate: function ($el) {}, // Callback fired when an HTML event is created - see $(this).data('event')
		onDayCreate: function ($el, d, m, y) {}, // Callback fired when an HTML day is created   - see $(this).data('today'), .data('todayEvents')
	})
})

// adviced articles sliders
let advicedTitleSlider = new Swiper('.zone__three__titleslider', {
	slidesPerView: 5,
	direction: 'vertical',
	slideToClickedSlide: true,
	
})
let advicedImageSlider = new Swiper('.zone__three__slider', {
	slidesPerView: 1,
	thumbs: {
		swiper: advicedTitleSlider,
	} 
})
