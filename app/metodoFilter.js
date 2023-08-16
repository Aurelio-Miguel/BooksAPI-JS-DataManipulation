const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria == 'disponivel' ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == categoria);
    exibirLivros(livrosFiltrados);
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDisponiveis(livrosFiltrados);
        exibirValorTotalDosDisponiveis(valorTotal);
    }

}

function exibirValorTotalDosDisponiveis(total) {
    elementoOfertaLivrosDisponiveis.innerHTML = `<div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${total}</span></p>
  </div>`;
}