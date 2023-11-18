let currentPage = 1;

function fetchBeers(page, perPage) {
    fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`)
        .then(response => response.json())
        .then(data => {
            // vai criar um array de objetos com apenas nome e descrição
            const beers = data.map(beer => ({ name: beer.name, description: beer.description }));

            // seleciona a tabela
            const table = document.querySelector('.beerList table tbody');

            // vai limpar a tabela
            table.innerHTML = '';

            // insere os dados na tabela
            beers.forEach(beer => {
                const row = document.createElement('tr');
                const nameCell = document.createElement('td');
                const descriptionCell = document.createElement('td');

                nameCell.textContent = beer.name;
                descriptionCell.textContent = beer.description;

                row.appendChild(nameCell);
                row.appendChild(descriptionCell);

                table.appendChild(row);
            });
        })
        .catch(error => console.error('Erro:', error));
}

function nextPage() {
    currentPage++;
    saveState();
    fetchBeers(currentPage, updateItemsPerPage());
}

function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        saveState();
        fetchBeers(currentPage, updateItemsPerPage());
    }
}

function updateItemsPerPage() {
    const select = document.querySelector('#itemsPerPage');
    const perPage = select.value;
    saveState();
    fetchBeers(currentPage, perPage);
}

function loadState() {
    const page = localStorage.getItem("currentPage");
    const itemsPerPage = localStorage.getItem("itemsPerPage");

    if (page) {
        currentPage = parseInt(page);
        document.querySelector('#itemsPerPage').value = itemsPerPage;
        fetchBeers(currentPage, itemsPerPage);
    }
}

function saveState() {
    localStorage.setItem("currentPage", currentPage);
    localStorage.setItem("itemsPerPage", document.querySelector('#itemsPerPage').value);
}

// chame esta função quando o valor do seletor mudar
document.querySelector('#itemsPerPage').addEventListener('change', updateItemsPerPage);

window.addEventListener('load', loadState);
