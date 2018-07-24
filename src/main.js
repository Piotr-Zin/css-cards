import * as dataAttributes from './data-attributes-behavior';
import * as dateInjector from './date-injector';
import * as overlay from './overlay-behavior';

import * as cardGenerator from './card-generator-behavior';

const jsonData = require('../assets/data/cards-data.json');

document.addEventListener('DOMContentLoaded', function() {
  var cardsContainer = document.querySelector('.cards-container');

  if (cardsContainer) {
    const cards = jsonData;
    cards.forEach((card, _index, _li) => {
      cardsContainer.innerHTML += cardGenerator.generate(card);
    });

    dataAttributes.parse();
    overlay.init();
    dateInjector.inject();

    console.log(`Added ${cards.length} cards...`);
  } else {
    console.error('Could not find the cards container element!');
  }
});
