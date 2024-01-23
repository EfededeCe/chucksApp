import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { ChuckApp } from './chuck_jokes/chucks_app';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>

    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>

    <h1 id="app-title" >Hello Vite!</h1>

    <div class="card">
      <button id="counter" type="button"></button>
    </div>

    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

const element = document.querySelector('.card');
ChuckApp( element );