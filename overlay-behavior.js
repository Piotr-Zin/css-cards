var detailsOverlay = null;
document.addEventListener('DOMContentLoaded', function() {
  var avatarDivs = document.querySelectorAll('.avatar');

  avatarDivs.forEach((div, index, li) => {
    div.addEventListener('click', avatarClicked);
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

  var personDetails = document.querySelector('.person-details');

  if (personDetails) {
    var parentClone = event.target.parentElement.cloneNode(true);
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
