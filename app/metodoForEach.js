const areaLivros = document.querySelector('#livros');
const elementoOfertaLivrosDisponiveis = document.querySelector('#valor_total_livros_disponiveis');

function exibirLivros(listaDeLivros) {
    areaLivros.innerHTML = '';
    elementoOfertaLivrosDisponiveis.innerHTML = '';
    listaDeLivros.forEach(livro => {
        let disponibilidade = livro.quantidade > 0 ? '' : 'indisponivel';
        areaLivros.innerHTML += `<div class="livro">
        <img class="livro__imagens ${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">Front-end</span>
          <span class="tag">Back-end</span>
        </div>
      </div>
  `
    });
}

