const inputDescricao = document.getElementById("inputDescricao");
const inputQuantidade = document.getElementById("inputQuantidade");
const inputPreco = document.getElementById("inputPreco");
const btAdicionar = document.getElementById("btAdicionar");
const lista = document.getElementById("lista");

let listaItems = [];

const redesenhaLista = (lista, listaItems) => {
    lista.innerHTML = "";
    for (let index = 0; index < listaItems.length; ++index) {
        const item = listaItems[index];
        const linha = document.createElement("tr");
        const descricao = document.createElement("td");
        descricao.textContent = item.valorDescricao;
        const quantidade = document.createElement("td");
        quantidade.textContent = item.valorQuantidade;
        const preco = document.createElement("td");
        preco.textContent = item.valorPreco;
        linha.appendChild(descricao);
        linha.appendChild(quantidade);
        linha.appendChild(preco);
        lista.appendChild(linha);
    }
};

const handleBtAdicionarClick = () => {
    const descricao = inputDescricao.value;
    const quantidade = inputQuantidade.value;
    const preco = inputPreco.value;
    if (!descricao || !quantidade || !preco) {
        alert("É necessário preencher todos os campos!");
        return;
    }

    const item = {
        valorDescricao: descricao,
        valorQuantidade: quantidade,
        valorPreco: preco
    };
    listaItems.push(item);
    inputDescricao.value = "";
    inputQuantidade.value = "";
    inputPreco.value = "";
    inputDescricao.focus();
    redesenhaLista(lista, listaItems);
};

const handleBtLimparClick = () => {
    listaItems = [];
    lista.innerHTML = "";
    inputDescricao.focus();
};

btAdicionar.onclick = handleBtAdicionarClick;
btLimpar.onclick = handleBtLimparClick;