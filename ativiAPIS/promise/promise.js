const randomNumber = Math.floor(Math.random() * 50) + 1;

const imageUrl = `https://randomfox.ca/images/${randomNumber}.jpg`;

const fetchPromise = fetch(imageUrl);

console.log(fetchPromise);

fetchPromise.then((resposta) => {
    const raposaFoto = window.document.getElementById('raposaFoto');
    raposaFoto.src = imageUrl;
    raposaFoto.alt = 'Raposa';
    raposaFoto.innerHTML = 'aaaa';
    console.log(`Resposta recebida: ${resposta.status}`);
});

console.log("Requisição iniciada…");
