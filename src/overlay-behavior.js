var detailsOverlay = null;

export function init() {
  var avatarDivs = document.querySelectorAll('.avatar');

  avatarDivs.forEach((div, index, li) => {
    div.addEventListener('click', avatarClicked);
    div.source = div;
  });

  detailsOverlay = document.querySelector('.fullscreen-overlay');
}

function avatarClicked(event) {
  if (detailsOverlay) {
    detailsOverlay.style = 'display: block';
  }

  var personDetails = document.querySelector('.person-details');

  if (personDetails) {
    var parent = event.currentTarget.parentElement;

    var parentClone = parent.cloneNode(true);
    personDetails.appendChild(parentClone);
  }

  var progressAnimation = event.currentTarget.parentElement.childNodes;
  progressAnimation.forEach(element => {
    if (element.className === 'progress-animation') {
      progressAnimation = element;
      return;
    }
  });

  if (progressAnimation) {
    progressAnimation.style = 'display: block; width: 100%; opacity: 1; background-color: #179B08';
  }

  detailsOverlay = document.querySelector('.fullscreen-overlay');

  var overlayClosed = (function(triggerElement) {
    var handler = function() {
      detailsOverlay.style = 'display: none';
      var personDetails = document.querySelector('.person-details');
      if (personDetails) {
        while (personDetails.firstChild) {
          personDetails.removeChild(personDetails.firstChild);
        }
      }
      var pa = triggerElement.parentElement.querySelector(
        '.progress-animation'
      );

      pa.style = 'transition: width 0.75s ease-out';
      detailsOverlay.removeEventListener('click', handler, false);
    };

    return handler;
  })(event.currentTarget);

  if (detailsOverlay) {
    detailsOverlay.addEventListener('click', overlayClosed, false);
  }
}
