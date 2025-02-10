export class cardscreate extends HTMLElement {
    constructor() {
        super();
        this.characters = [];
    }

    connectedCallback() {
        this.loadCharacters();
    }

    async loadCharacters() {
        try {
            const response = await fetch('./db.json');
            const data = await response.json();
            this.characters = [...data.dc, ...data.marvel];
            this.render();
        } catch (error) {
            console.error('Error loading characters:', error);
        }
    }

    render() {
        const characterCards = this.characters.map(character => `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${character.imagen}" class="card-img-top" alt="${character.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${character.nombre}</h5>
                        <p class="card-text">${character.historia_comics}</p>
                        <ul class="list-group">
                            <li class="list-group-item">Origen: ${character.origen}</li>
                            <li class="list-group-item">Poderes: ${character.poderes.join(', ')}</li>
                        </ul>
                    </div>
                </div>
            </div>
        `).join('');

        this.innerHTML = `
            <div class="container">
                <div class="row">
                    ${characterCards}
                </div>
            </div>
        `;
    }
}

customElements.define('card-create', cardscreate);
