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