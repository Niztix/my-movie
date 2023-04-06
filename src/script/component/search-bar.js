class SearchBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector('#searchElement').value;
    }

    render() {
        this.innerHTML = `
      <div class="search-container" id="searchContainer">
            <input type="search" placeholder="Search your movie..." id="searchElement" class="search-element">
            <button type="submit" id="searchButtonElement" class="search-btn">Search</button>
        </div>
    `;

        this.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
    }
}

customElements.define('search-bar', SearchBar);