class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<h1>My Movie</h1>`;
    }
}

customElements.define('app-bar', AppBar);