import { parseDataAttributes } from './data-attributes-behavior';

function generateCard(firstName, lastName, description, color) {

  var generatedHtml = `<div class="card">
                        <div class="avatar"
                            data-color="${color}">
                        <img src="assets/images/avatar.png"
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

    var loremIpsum =
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dignissimos consequuntur magni quam ullam distinctio asperiores veniam perspiciatis? Quod, esse. Quas similique consequuntur vero provident, placeat doloribus beatae nobis porro.';

    var generatedCards = [];
    generatedCards.push(generateCard('John', 'Doe', loremIpsum, '#BCBC1F'));
    generatedCards.push(generateCard('Alice', 'Doe', loremIpsum, '#1FBC72'));
    generatedCards.push(generateCard('Brian', 'Doe', loremIpsum, '#832DDB'));
    generatedCards.push(generateCard('Mathew', 'Doe', loremIpsum, '#E349B2'));
    generatedCards.push(generateCard('Steve', 'Doe', loremIpsum, '#3A812F'));
    generatedCards.push(generateCard('Steve', 'Doe', loremIpsum, '#865521'));

    cardsContainer.innerHTML = cardsContainer.innerHTML + generatedCards.join();
  } else {
    console.error('Could not find the cards container element!');
  }
  
  parseDataAttributes();  
});
