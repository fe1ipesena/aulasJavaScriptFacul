// URL da API
const url = 'https://jsonplaceholder.typicode.com/posts';

// Fazendo a chamada para a API
fetch(url)
	.then(response => response.json())  // Convertendo a resposta para JSON
	.then(data => {
		let output = '<h2>Lista de Postagens</h2>';
		output += '<ul>';
		data.forEach(post => {  // Iterando sobre cada postagem
			output += `
        <li>
          <h3>${post.title}</h3>
          <p>${post.body}</p>
        </li>
      `;
		});
		output += '</ul>';
		document.body.innerHTML = output;  // Inserindo o HTML no corpo do documento
	})
	.catch(error => console.error('Erro:', error));
