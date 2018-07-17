import { parseDataAttributes } from './data-attributes-behavior';
import { avatarImage, readJSON } from '../config/resources';
import * as dateInjector from './date-injector';
import * as overlay from './overlay-behavior';

function generateCard(
  { firstName, lastName, description, color },
  avatarImageUrl = avatarImage
) {
  var generatedHtml = `<div class="card">
                        <div class="avatar"
                            data-color="${color}">
                        <img src="${avatarImageUrl}"
                            alt="Avatar image">
                        </div>
                        <div class="progress-animation"></div>
                        <div class="person-name">
                        <h3>${firstName} ${lastName}</h3>
                        </div>
                        <div class="horizontal-divider"></div>
                        <div class="description">
                        <section>
                            ${description}
                        </section>
                        </div>
                        <div class="bottom-panel">
                        <span>Date: </span>
                        </div>
                       </div>`;

  return generatedHtml;
}

document.addEventListener('DOMContentLoaded', function() {
  var cardsContainer = document.querySelector('.cards-container');

  if (cardsContainer) {

    readJSON('../assets/data/cards-data.json').then(
      response => {
        const cards = JSON.parse(response);
        cards.forEach((card, index, li) => {
          cardsContainer.innerHTML += generateCard(card);
        });
        parseDataAttributes();
        overlay.init();
        dateInjector.inject();
        
        console.log(`Added ${cards.length} cards...`);
        
      },
      err => console.error(err)
    );

  } else {
    console.error('Could not find the cards container element!');
  }
});
