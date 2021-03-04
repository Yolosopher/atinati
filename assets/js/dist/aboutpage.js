const paraghrapsInTextDiv = document.querySelectorAll('.aboutMain__article__textdiv p')

const textDiv = document.querySelector('.aboutMain__article__textdiv')

const img = document.querySelector('.aboutMain__imgbox img')

const imgCopyOnMobile = () => {
    if (window.innerWidth <= 1024) {
        if (textDiv.querySelector('.aboutMain__imgbox')) {
            return
        } else {
            console.log('matchmedia true')
            
            let src = img.getAttribute('src')
            img.parentElement.style.display = 'none'
            let newImgBox = document.createElement('div')
            newImgBox.classList.add('aboutMain__imgbox')
            newImgBox.innerHTML = `
                <img src="${src}" />
            `
            textDiv.insertBefore(newImgBox, paraghrapsInTextDiv[1])
        }
    } else {
        img.parentElement.style.display = 'block'
        if (textDiv.querySelector('.aboutMain__imgbox')) {
            textDiv.querySelector('.aboutMain__imgbox').remove()
        }
    }
}



if (paraghrapsInTextDiv.length > 1) {
    console.log('callin function')    
    imgCopyOnMobile()
} 
window.addEventListener('resize', () => {
    if (paraghrapsInTextDiv.length > 1) {
        console.log('callin function')    
        imgCopyOnMobile()
    } 
})