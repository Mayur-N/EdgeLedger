// Initialize and add the map
function initMap(){
    //your location
    const loc = {lat:1.398490, lng: 103.907921};

    //Centered map on location
    const  map = new google.maps.Map(document.querySelector('.map')
    , {
        // center: {lat: -34.397, lng: 150.644},
        zoom: 14,
        center: loc
      });

      //The marker, positioned at location
      const marker = new google.maps.Marker({
          position:loc,map:map
      });
}

//Stickey menu background
window.addEventListener('scroll',function(){
    if(window.scrollY > 150){
        document.querySelector('#navbar').style.opacity = 0.9;
    } else{
        document.querySelector('#navbar').style.opacity = 1;
    }
});


// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
    if(this.hash !== ''){
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
        {
            scrollTop:$(hash).offset().top-100
        },
        800
        );
    }


});