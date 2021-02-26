const matchmediaMin1025 = window.matchMedia('(min-width: 1025)')

// VARIABLES
const currentLang = document.querySelector('.lang-select li.active')
const body = document.querySelector('body')
const headerCatButton = document.querySelector(
	'.header__left__categories__button'
)
const headerCatButtonRespo = document.querySelector('.respo__burger')
const weatherCurrencyLeft = document.querySelector('.weathercurrency__left')
const headerCatButtonClose = document.querySelector(
	'.header__left__categories__button__close'
)
const searchForm = document.querySelector('.header__right__searchform')
const searchFormCloseBtn = document.querySelector(
	'.header__right__searchform__close'
)

// headertoggle
const headerCatToggle = (close = false) => {
	if (close) {
		headerCatButton.parentElement.classList.remove('active')
	} else {
		headerCatButton.parentElement.classList.add('active')
	}
}
headerCatButton.addEventListener('click', () => {
	// body.classList.toggle('noscroll')
	headerCatToggle()
})
headerCatButtonRespo.addEventListener('click', () => {
	headerCatToggle()
})

headerCatButtonClose.addEventListener('click', () => {
	headerCatToggle(true)
})

// searchtoggle
searchForm.addEventListener('submit', (e) => {
	if (!searchForm.classList.contains('active')) {
		e.preventDefault()
		searchForm.classList.add('active')
		return
	}
})
searchFormCloseBtn.addEventListener('click', () => {
	searchForm.classList.remove('active')
})
currentLang.addEventListener('click', (e) => {
	e.preventDefault()
	currentLang.parentElement.classList.toggle('togged')
})
