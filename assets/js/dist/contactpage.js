let markericon = window.origin + '/assets/images/contactsvg/markericon.svg'

// start init map
function initMap() {
    // The location of location
  let location = { lat: lattt, lng: longgg };
  // options
  const opts = {
      zoom: 16,
    //   zoomControl: true,
    //   zoomControlOptions: {
    //       position: google.maps.ControlPosition.LEFT_CENTER,
    //   },
    //   mapTypeControl: true,
    //   mapTypeControlOptions: {
    //       style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
    //   },
    //   controlSize: 26,
    //   streetViewControl: true,
    //   fullscreenControl: true,

      center: location,
  };
  // The map, centered at location
    let map = new google.maps.Map(document.getElementById("map"), opts);
  // if (document.getElementById("map2")) {
  // let map2 = new google.maps.Map(document.getElementById("map2"), opts);
  // let marker2 = new google.maps.Marker({ position: location, map: map2 });
  // }
  // The marker, positioned at location
  let marker = new google.maps.Marker({ position: location, map: map, icon: markericon });

}
// end init map

const contactForm = document.querySelector('.contactMain__mapandform__form')

// validations
let nameInput = document.getElementById('name')
let emailInput = document.getElementById('email')
let textareaInput = document.getElementById('textarea')
nameInput.addEventListener('change', (e) => {
    nameChecker(nameInput)
})
emailInput.addEventListener('change', (e) => {
    emailChecker(emailInput)
})
textareaInput.addEventListener('change', (e) => {
    textareaChecker(textareaInput)
})

const nameChecker = (el) => {
    if (el.value === '') {
        el.parentElement.classList.add('invalid')
        el.parentElement.classList.remove('invalid-shown')
    } else if (el.value.length < 2) {
        el.parentElement.classList.add('invalid')
        el.parentElement.classList.add('invalid-shown')
    } else {
        el.parentElement.classList.remove('invalid')
        el.parentElement.classList.remove('invalid-shown')
    }
}

const textareaChecker = (el) => {
    if (el.value === '') {
        el.parentElement.classList.add('invalid')
        el.parentElement.classList.remove('invalid-shown')
    } else if (el.value.length < 10) {
        el.parentElement.classList.add('invalid')
        el.parentElement.classList.add('invalid-shown')
    } else {
        el.parentElement.classList.remove('invalid')
        el.parentElement.classList.remove('invalid-shown')
    }
}

const emailChecker = (el) => {
    let ifEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(el.value)
    if (el.value === '') {
        el.parentElement.classList.add('invalid')
        el.parentElement.classList.remove('invalid-shown')
    } else if (!ifEmail) {
        el.parentElement.classList.add('invalid')
        el.parentElement.classList.add('invalid-shown')
    } else {
        el.parentElement.classList.remove('invalid')
        el.parentElement.classList.remove('invalid-shown')
    }
}


// form submit

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    let dataToSend = {
        name: contactForm.name.value,
        email: contactForm.email.value,
        text: contactForm.textarea.value
    }

    // console.log(dataToSend)
    const response = await axios.post(contactAjaxURL, dataToSend)
        .catch(err => console.log(err.message))

    const data = response.data

    if(!data) {
        contactForm.classList.remove('submitted')
        contactForm.classList.add('error')
    } else {
        console.log(data)        
        contactForm.classList.remove('error')
        contactForm.classList.add('submitted')
    }
})

// contactForm.addEventListener('submit', async (e) => {
//     e.preventDefault()
//     nameChecker(nameInput)
//     emailChecker(emailInput)
//     textareaChecker(textareaInput)
//     if (contactForm.querySelector('.invalid')) {
//         contactForm.querySelectorAll('.invalid').forEach(inv => inv.classList.add('invalid-shown'))
//     } else {
//         let dataToSend = {
//             _token: contactForm._token.value,
//             name: contactForm.name.value,
//             email: contactForm.email.value,
//             message: contactForm.textarea.value
//         }
    
//         // console.log(dataToSend)
//         const response = await axios.post(contactAxiosURL, dataToSend)
//             .catch(err => console.log(err.message))
    
//         const data = response.data.status
//         console.log(Boolean(data))
//         if(!data) {
//             contactForm.classList.remove('submitted')
//             contactForm.classList.add('error')
//             textareaInput.parentElement.setAttribute('data-message', formResponseError)
//         } else {
//             console.log(data)        
//             textareaInput.parentElement.setAttribute('data-message', formResponseSuccess)
//             contactForm.classList.remove('error')
//             contactForm.classList.add('submitted')
//         }
//     }
// })