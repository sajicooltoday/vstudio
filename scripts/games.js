const games = [
    {
        title: "Slope",
        imageUrl: "https://slopegameio.github.io/img/slopegameio-thumb.png"
    }
];

function createGameElement(game) {
    return `
    <div class="game-item">
        <div class="img-container">
            <img src="${game.imageUrl}" alt="${game.title}">
            <div class="gamelabel">${game.title}</div>
        </div>
    </div>
    `;
}

function initializeGames() {
    const container = document.getElementById('games-container');
    container.innerHTML = `
    <div class="gameholder">
        <div class="grid">
            ${games.map(game => createGameElement(game)).join('')}
        </div>
    </div>
    `;
}

window.addEventListener('DOMContentLoaded', initializeGames);
