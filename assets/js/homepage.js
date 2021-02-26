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
	const speed = +width / 4 * 39
	console.log(speed)
	el.style.animationDuration = `${speed}ms`
	setTimeout(() => {
		el.classList.add('running')
	}, 50);
}
window.addEventListener('load', () => {
	setRunningStringSpeed(runningstringP)
})