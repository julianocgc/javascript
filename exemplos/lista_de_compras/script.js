function adicionarProduto() {

    //recebe valor do input do usuário
    let inputTarefa = document.getElementById("inputProduto")
    let tarefa = inputProduto.value

    //cria novo item (li) e insere na (lista ul)
    let listaProdutos = document.getElementById("listaProdutos")
    let novoProduto = document.createElement("li")
    novoProduto.textContent = tarefa
    listaProdutos.appendChild(novoProduto)

    //mensagem de produto adicionado com sucesso
    let mensagem = "Produto adicionado com sucesso!"
    document.getElementById("mensagem").textContent = mensagem

    //limpa o input do usuário
    inputTarefa.value = ""
}
