
import { avatarImage } from '../config/resources';

export function generate(
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
