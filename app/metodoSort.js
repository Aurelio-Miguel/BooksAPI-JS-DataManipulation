let btnOrdernarPorPreco = document.querySelector("#btnOrdenarPorPreco");

btnOrdernarPorPreco.addEventListener('click', ordenarLivrosPorPreco);

function ordenarLivrosPorPreco() {
    let livrosOrdenados = livros.sort((a, b) => {
        return a.preco - b.preco;
    });
    exibirLivros(livrosOrdenados);
}