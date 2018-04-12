var map;
document.addEventListener('DOMContentLoaded', function () {

  fetch('https://akqalocations.dis-play.dk/umbraco/api/data/getoffices')
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonArray) {
      jsonArray.forEach(function (element) {
        var uluru = { lat: element.position.latitude, lng: element.position.longitude };

        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });

        marker.addListener('click', function () {
          document.getElementById('overlay-modal').classList.add('modal--active');

          document.getElementById('modal-content').innerHTML = makeModalContent(element);
        });
      });
    }).catch(function (error) {
      console.log(error);
    });

  var closeBtnArray = document.getElementsByClassName('close');
  for (var i = 0; i < closeBtnArray.length; i++) {
    (function (index) {
      closeBtnArray[index].addEventListener("click", function () {
        document.getElementById('overlay-modal').classList.remove('modal--active');
      })
    })(i);
  }

  document.getElementById('modal-eventbreaker').addEventListener('click', function (e) {
    e.stopPropagation();
  });
}, false);

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 25, lng: 25 },
    zoom: 2
  });
}

function makeModalContent(element) {
  return `<h1>${element.name}</h1>
  <img src="${element.picture}" />
  <p>${element.address}</p>
  <p>${element.city}</p>
  <a href="tel:${element.phone}">${element.phone}</a>
  <p>${element.description}</p>`;
}
