import generateJoke from "./generateJoke";
import './styles/main.scss'
import laughing from './assets/laughing.webp'

const laugh = document.getElementById('laugh');
laugh.src = laughing;

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generateJoke);

console.log(generateJoke());