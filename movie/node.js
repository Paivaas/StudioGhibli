const url = 'https://ghibliapi.vercel.app';

const filmsBusca = '/films';

const filmsList = document.getElementById('films-list');

fetch(url + filmsBusca)
  .then(response => {
    return response.json();
  })
  .then(films => {
    films.forEach(film => {
      const filmDiv = document.createElement('div');
      filmDiv.classList.add('cardFilm');

      filmDiv.innerHTML = `
      <img class="" src="${film.image}">
      <div class="conteudo desativado">
        <h2>${film.title}</h2>
        <p><strong>Diretor:</strong> ${film.director}</p>
        <p><strong>Ano:</strong> ${film.release_date}</p>
        <p><strong>Descrição:</strong> ${film.description}</p>
      </div>
      `;
      filmsList.appendChild(filmDiv);
    });
  })
 