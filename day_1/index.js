let nComidas = 0;
const botaoCriar = document.querySelector("#criar-comida");
const botaoDeletar = document.querySelector("#deletar-comida");
const listaDeComidas = document.querySelector("#lista-de-comidas");


botaoCriar.addEventListener("click", () => {
    // cria um elemento HTML de item de lista
    const comida = document.createElement('li');
    // altera o conteúdo do elemento criado
    comida.innerHTML = `Comida ${nComidas}`;
    // insere o elemento na lista de comidas
    listaDeComidas.appendChild(comida);
    // aumenta o número de comidas na lista
    nComidas++;
});


botaoDeletar.addEventListener("click", () => {
    // verifica se a lista está vazia
    if (nComidas === 0) {
        console.log("Geladeira está vazia. Não se pode remover alimentos")
    } else {
        // remove o último elemento filho da lista
        listaDeComidas.removeChild(listaDeComidas.lastChild);
        // diminui o número de comidas na lista
        nComidas--;
    }
    
})