import { parseDataAttributes } from './data-attributes-behavior';
import { avatarImage, cards } from '../config/resources';

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
    console.log('Adding cards...');

    //var generatedCards = [];
    cards.forEach((card, index, li) => {
      //generatedCards.push(generateCard(card));
      cardsContainer.innerHTML += generateCard(card);
    });

    //cardsContainer.innerHTML += generatedCards.join('');\

  } else {
    console.error('Could not find the cards container element!');
  }

  parseDataAttributes();
});
