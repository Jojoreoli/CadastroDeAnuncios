export function criarCard(Ad) {

  function criarElemento(tag, classe) {
    const elemento = document.createElement(tag);
    elemento.classList.add(classe);
    return elemento;
  }

  function getElemento(seletor) {
    const elemento = document.querySelector(seletor);
    return elemento;
  }

  const criar = getElemento('[data-createView-botao]');
  criar.addEventListener('click', function() {

    const cardRelatorio = getElemento('[data-reportView-card]')

    const cardRelatorioItem = criarElemento("li", "reportView__card__item");
    cardRelatorioItem.setAttribute('data-reportView-cardItem', '');

    const cardRelatorioConteudo = criarElemento("p", "reportView__card__item__conteudo");
    cardRelatorioConteudo.setAttribute('data-reportView-cardConteudo', '');

    const cardRelatorioNome = criarElemento("p", "reportView--escondido");
    cardRelatorioNome.setAttribute('data-reportView-cardNome', '');

    const cardRelatorioDataIn = criarElemento("p", "reportView--escondido");
    cardRelatorioDataIn.setAttribute('data-reportView-dataIn', '');

    const cardRelatorioDataFi = criarElemento("p", "reportView--escondido");
    cardRelatorioDataFi.setAttribute('data-reportView-dataFi', '');

    const main = getElemento(".reportView");

    const nome = getElemento('[data-createView-nome]');
    const nomeValor = nome.value;

    const cliente = getElemento('[data-createView-cliente]');
    const clienteValor = cliente.value;

    const dataIn = getElemento('[data-createView-dataIn]');
    const dataInValor = dataIn.value;

    const dataFi = getElemento('[data-createView-dataFi]');
    const dataFiValor = dataFi.value;

    const investimento = getElemento('[data-createView-investimento]');
    const investimentoValor = investimento.value;

    const card = new Ad(dataInValor, dataFiValor, investimentoValor);
    card.inicial();

    cardRelatorioConteudo.textContent =
    `Nome do cliente: ${cardRelatorioNome.textContent = clienteValor}
    Nome do anúncio: ${nomeValor}
    Data de início: ${cardRelatorioDataIn.textContent = dataInValor}
    Data de término: ${cardRelatorioDataFi.textContent = dataFiValor}
    Investimento diário: ${investimentoValor}
    Valor total investido: ${card.valor}
    Views totais: ${card.visualizacoes}
    Cliques totais: ${card.cliques}
    Shares totais: ${card.shares}`;

    cardRelatorioConteudo.appendChild(cardRelatorioNome);
    cardRelatorioConteudo.appendChild(cardRelatorioDataIn)
    cardRelatorioConteudo.appendChild(cardRelatorioDataFi)
    cardRelatorio.appendChild(cardRelatorioItem);
    cardRelatorioItem.appendChild(cardRelatorioConteudo);
    main.appendChild(cardRelatorio)

  })
}
