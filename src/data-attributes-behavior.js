export function parse() {
  var avatarDivs = document.querySelectorAll('.avatar');

  avatarDivs.forEach((div, _index, _li) => {
    if (div.dataset.color) {
      div.style = `background-color: ${div.dataset.color}`;
    }
  });
}
