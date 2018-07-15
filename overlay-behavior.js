var detailsOverlay = null;
document.addEventListener('DOMContentLoaded', function() {
  var avatarDivs = document.querySelectorAll('.avatar');
  console.log(avatarDivs);

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

  //   console.log(event.srcElement);
  //   console.log(event.srcElement.getAttribute('data-bgcolor'));

  //   var avatarDiv = document.querySelector('.avatar');
  //   console.log(avatarDiv.getAttribute('data-bgColor'));

  var personDetails = document.querySelector('.person-details');

  if (personDetails) {
      console.log(event.srcElement);
      
    var parent = event.srcElement.parentElement;
    console.log(parent);
    
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
