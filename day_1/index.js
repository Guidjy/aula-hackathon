let nTarefas = 0;
const botaoCriar = document.querySelector("#criar-tarefa");
const botaoDeletar = document.querySelector("#deletar-tarefa");
const listaDeTarefas = document.querySelector("#lista-de-tarefas");


botaoCriar.addEventListener("click", () => {
    // cria um elemento HTML de item de lista
    const tarefa = document.createElement('li');
    // altera o conteúdo do elemento criado
    tarefa.innerHTML = `tatefa ${nTarefas}`;
    // insere o elemento na lista de tarefas
    listaDeTarefas.appendChild(tarefa);
    // aumenta o número de tarefas na lista
    nTarefas++;
});


botaoDeletar.addEventListener("click", () => {
    // verifica se a lista está vazia
    if (nTarefas === 0) {
        console.log("Lista está vazia. Não se pode remover elementos")
    } else {
        // remove o último elemento filho da lista
        listaDeTarefas.removeChild(listaDeTarefas.lastChild);
        // diminui o número de tarefas na lista
        nTarefas--;
    }
    
})