import { FruitopiaGirlsApp } from './modules/fruitopia-girls-app.js';

// Bootstrap the page once the DOM is ready.
document.addEventListener('DOMContentLoaded', () => {
    const app = new FruitopiaGirlsApp(document);
    app.init();
});