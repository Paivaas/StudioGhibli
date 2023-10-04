const url = 'https://ghibliapi.vercel.app';

const filmsBusca = '/films';

const filmsList = document.getElementById('films-list');

fetch(url + filmsBusca)
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao recuperar dados da API');
    }
    return response.json();
  })
  .then(films => {
    films.forEach(film => {
      const filmDiv = document.createElement('div');
      filmDiv.classList.add('cardFilm');

      filmDiv.innerHTML = `
      <img src="${film.image}">
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
  .catch(error => {
    console.error(error);
  });