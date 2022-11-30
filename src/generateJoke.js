import axios from 'axios'

function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }

    axios.get('https://icanhazdadjoke.com', config).then(res => {
        document.getElementById('joke').innerText = res.data.joke;
    })
}

export default generateJoke