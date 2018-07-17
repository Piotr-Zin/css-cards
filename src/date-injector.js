export function inject() {
  var dateText = document.querySelectorAll('.bottom-panel span');
  if (dateText.length) {
    dateText.forEach((span, index, li) => {
      span.innerHTML = span.innerHTML + new Date().toJSON().slice(0, 10);
    });
  }
}
