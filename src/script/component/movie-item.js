class MovieItem extends HTMLElement {
    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        this.innerHTML = `
      <img class="fan-art-movie" src="https://image.tmdb.org/t/p/w300/${this._movie.poster_path}" alt="Fan Art">
      <div class="movie-info">
      <p>${this._movie.release_date}</p>
        <h2>${this._movie.title}</h2>
      </div>
    `;
    }
}

customElements.define('movie-item', MovieItem);