window.addEventListener('load', () => {
  fetch('./skills.json')
    .then((response) => response.json())
    .then((data) => buildSkills(data))
    .catch((error) => console.log(error));
});

function buildSkills(data) {
  buildMain(data.wannaText);
  buildTechs(data.technologies);
}

function buildMain(text) {
  let span = document
    .createElement('span')
    .appendChild(document.createTextNode(text));
  document.getElementById('wanna-text').appendChild(span);
}

function buildTechs(techs) {
  for (let i = 0; i < techs.length; i++) {
    document.getElementById('techs').innerHTML +=
      '<div class="icon col-xs-4 col-md-3">' + techs[i] + '</div>';
  }
}
