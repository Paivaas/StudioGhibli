const url = 'https://ghibliapi.vercel.app';

let idAtual = 'MyNeighborTotoro'


const filmsBusca = '/films';

const filmsList = document.getElementById('films-list');

fetch(url + filmsBusca).then(response => {
    return response.json();
  })
  .then(films => {
    films.forEach(film => {
      const filmDiv = document.createElement('div');
      filmDiv.classList.add('cardFilm');

      var idfilme = film.title.replace(/\s/g, "")

      filmDiv.innerHTML = `
      <img onclick="aparecer()" src="${film.image}">
      <div id="${idfilme}" class="conteudo desativado">
        <h2>${film.title}</h2>
        <p><strong>Diretor:</strong> ${film.director}</p>
        <p><strong>Ano:</strong> ${film.release_date}</p>
        <p><strong>Descrição:</strong> ${film.description}</p>
      </div>
      `;
      filmsList.appendChild(filmDiv);
    });
  })



  function aparecer (){
    const conteudo = document.getElementById(idAtual)
    conteudo.classList.toggle('ativado')

  }