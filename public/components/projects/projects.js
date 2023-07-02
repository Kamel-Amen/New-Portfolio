window.addEventListener('load', () => {
  fetch('./projects.json')
    .then((response) => response.json())
    .then((data) => buildProjects(data))
    .catch((error) => console.log(error));
});

function buildProjects(data) {
  const projects = data.projects;
  //console.log(projects);
  for (let i = 0; i < projects.length; i++) {
    document.getElementById('projects').innerHTML +=
      '<div class="item my-0 row"><div class="left col-md-6 col-sm-12"><div class="w-100 h-100 item-img radius-12 overflow-hidden"><img class="w-100 h-100 radius-12" src="' +
      projects[i].img +
      '" alt="proj-1" /></div></div><div class="right col-md-6 col-sm-12"><header>' +
      projects[i].name +
      '</header><p>' +
      projects[i].info +
      '</p><div class="techs">' +
      projects[i].techs +
      '</div><a target="blank" href="' +
      projects[i].url +
      '" class="btn btn-lg me-3 btn-danger">Preview</a><a target="blank" href="' +
      projects[i].code +
      '" class="btn btn-lg btn-danger">Code</a></div><hr class="w-50 mx-auto" /></div></div>';
  }
}
