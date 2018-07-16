var detailsOverlay = null;
document.addEventListener('DOMContentLoaded', function() {
  var avatarDivs = document.querySelectorAll('.avatar');

  avatarDivs.forEach((div, index, li) => {

    div.addEventListener('click', avatarClicked);
    div.source = div;
  });

  detailsOverlay = document.querySelector('.fullscreen-overlay');

  if (detailsOverlay) {
    detailsOverlay.addEventListener('click', overlayClosed);
  }

});

function avatarClicked(event) {
  if (detailsOverlay) {
    detailsOverlay.style = 'display: block';
  }

    console.log(event.currentTarget);
    console.log(event.currentTarget.getAttribute('data-color'));

  var personDetails = document.querySelector('.person-details');

  if (personDetails) {
    var parent = event.currentTarget.parentElement;

    var parentClone = parent.cloneNode(true);
    personDetails.appendChild(parentClone);
  }
}

function overlayClosed(event) {
  detailsOverlay.style = 'display: none';
  var personDetails = document.querySelector('.person-details');
  if (personDetails) {
    while (personDetails.firstChild) {
      personDetails.removeChild(personDetails.firstChild);
    }
  }
}
