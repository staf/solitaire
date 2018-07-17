import App from "./App.js";

const app = new App();
app.newRound();
console.log(app);

document.getElementById('reset')!.addEventListener('click', () => app.newRound());
document.getElementById('draw')!.addEventListener('click', () => app.draw());
