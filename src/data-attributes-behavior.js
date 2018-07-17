document.addEventListener('DOMContentLoaded', parse);

export function parse() {
  var avatarDivs = document.querySelectorAll('.avatar');

  avatarDivs.forEach((div, index, li) => {
    if (div.dataset.color) {
      div.style = `background-color: ${div.dataset.color}`;
    }
  });
}
