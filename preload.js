const axios = require('./axios');

window.addEventListener("DOMContentLoaded",  () => {
    setGIF();
    setInterval(setGIF(), 60000);
})

const setGIF = async () => {
    const gif = await getGIF();
    const elm = document.getElementById('gif');
    elm.src = gif;
}

const getGIF = () => {
     return axios.get('/random?q=vibes&limit=1')
        .then((res) => res.data.results[0].media[0].gif.url);
}