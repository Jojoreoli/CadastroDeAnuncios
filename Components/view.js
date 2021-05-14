let cards = [];

const desenhaCards = localStorage.getItem('cards')

// Desenhando os cards passados na tela
if (desenhaCards != null) {
  let arrayCards = JSON.parse(localStorage.getItem('cards'))
  for (var i = 0; i < arrayCards.length; i++) {

    function criarElemento(tag, classe) {
      const elemento = document.createElement(tag);
      elemento.classList.add(classe);
      return elemento;
    }

    function getElemento(seletor) {
      const elemento = document.querySelector(seletor);
      return elemento;
    }

    const cardRelatorioItem = criarElemento("li", "reportView__card__item");
    cardRelatorioItem.setAttribute('data-reportView-cardItem', '');

    const cardRelatorioConteudo = criarElemento("p", "reportView__card__item__conteudo");
    cardRelatorioConteudo.setAttribute('data-reportView-cardConteudo', '');

    const cardRelatorioNome = criarElemento("p", "reportView--escondido");
    cardRelatorioNome.setAttribute('data-reportView-cardNome', '');
    cardRelatorioNome.textContent = arrayCards[i].cliente;

    const cardRelatorioDataIn = criarElemento("p", "reportView--escondido");
    cardRelatorioDataIn.setAttribute('data-reportView-dataIn', '');
    cardRelatorioDataIn.textContent = arrayCards[i].dataIn;

    const cardRelatorioDataFi = criarElemento("p", "reportView--escondido");
    cardRelatorioDataFi.setAttribute('data-reportView-dataFi', '');
    cardRelatorioDataFi.textContent = arrayCards[i].dataFi;

    const cardRelatorioDeleta = criarElemento("button", "reportView__deleta");
    cardRelatorioDeleta.setAttribute('data-reportView-deleta', '');
    cardRelatorioDeleta.textContent = "Apagar"

    const main = getElemento(".reportView");
    const cardRelatorio = getElemento('[data-reportView-card]')

    const nomeValor = arrayCards[i].nome;

    const clienteValor = arrayCards[i].cliente;

    const dataIn = arrayCards[i].dataIn
    const anoIn = dataIn.slice(0, 4);
    const mesIn = dataIn.slice(5, 7);
    const diaIn = dataIn.slice(8, 11);
    const dataInValor = dataIn;
    cardRelatorioDataIn.textContent = dataInValor

    const dataFi = arrayCards[i].dataFi
    const anoFi = dataFi.slice(0, 4);
    const mesFi = dataFi.slice(5, 7);
    const diaFi = dataFi.slice(8, 11);
    const dataFiValor = dataFi;
    cardRelatorioDataFi.textContent = dataFiValor

    const investimentoValor = arrayCards[i].investimento;

    cardRelatorioConteudo.textContent =
    `Nome do cliente: ${clienteValor}
    Nome do anúncio: ${nomeValor}
    Data de início: ${diaIn}/${mesIn}/${anoIn}
    Data de término: ${diaFi}/${mesFi}/${anoFi}
    Investimento diário: R$ ${investimentoValor}
    Valor total investido: R$ ${arrayCards[i].total}
    Views totais: ${arrayCards[i].views}
    Cliques totais: ${arrayCards[i].cliques}
    Shares totais: ${arrayCards[i].shares}`;

    cardRelatorioConteudo.appendChild(cardRelatorioNome);
    cardRelatorioConteudo.appendChild(cardRelatorioDataIn);
    cardRelatorioConteudo.appendChild(cardRelatorioDataFi);
    cardRelatorioConteudo.appendChild(cardRelatorioDeleta);
    cardRelatorio.appendChild(cardRelatorioItem);
    cardRelatorioItem.appendChild(cardRelatorioConteudo);
    main.appendChild(cardRelatorio);

    const removeCard = getElemento('[data-reportView-card]')
    removeCard.addEventListener('click', function(event) {
      if(event.target && event.target.className == "reportView__deleta") {
        const distancia = event.target.parentNode.textContent.indexOf("Nome do anúncio")
        const i = event.target.parentNode.textContent.slice(17,distancia-5);
        arrayCards.forEach((item, index) => {
          if (item.cliente == i) {
            arrayCards.splice(index, 1);
            localStorage.setItem('cards', JSON.stringify(arrayCards))
          }
        });
        event.target.parentNode.parentNode.remove();
      }
    })
    cards = arrayCards;
  }
}

// Desenhando novos cards na tela
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

  const criar = getElemento(".createView");
  criar.addEventListener('submit', function(event) {

    event.preventDefault();

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

    const cardRelatorioDeleta = criarElemento("button", "reportView__deleta");
    cardRelatorioDeleta.setAttribute('data-reportView-deleta', '');
    cardRelatorioDeleta.textContent = "Apagar"

    const main = getElemento(".reportView");
    const cardRelatorio = getElemento('[data-reportView-card]')

    const nome = getElemento('[data-createView-nome]');
    const nomeValor = nome.value;
    nome.value = "";

    const cliente = getElemento('[data-createView-cliente]');
    const clienteValor = cliente.value;
    cliente.value = "";

    const dataIn = getElemento('[data-createView-dataIn]');
    const anoIn = dataIn.value.slice(0, 4);
    const mesIn = dataIn.value.slice(5, 7);
    const diaIn = dataIn.value.slice(8, 11);
    const dataInValor = dataIn.value;
    cardRelatorioDataIn.textContent = dataInValor
    dataIn.value = "";

    const dataFi = getElemento('[data-createView-dataFi]');
    const anoFi = dataFi.value.slice(0, 4);
    const mesFi = dataFi.value.slice(5, 7);
    const diaFi = dataFi.value.slice(8, 11);
    const dataFiValor = dataFi.value;
    cardRelatorioDataFi.textContent = dataFiValor
    dataFi.value = "";

    const investimento = getElemento('[data-createView-investimento]');
    const investimentoValor = investimento.value;
    investimento.value = "";

    const card = new Ad(dataInValor, dataFiValor, investimentoValor);
    card.inicial();

    cardRelatorioConteudo.textContent =
    `Nome do cliente: ${clienteValor}
    Nome do anúncio: ${nomeValor}
    Data de início: ${diaIn}/${mesIn}/${anoIn}
    Data de término: ${diaFi}/${mesFi}/${anoFi}
    Investimento diário: R$ ${investimentoValor}
    Valor total investido: R$ ${card.valor}
    Views totais: ${card.visualizacoes}
    Cliques totais: ${card.cliques}
    Shares totais: ${card.shares}`;

    cardRelatorioConteudo.appendChild(cardRelatorioNome);
    cardRelatorioConteudo.appendChild(cardRelatorioDataIn);
    cardRelatorioConteudo.appendChild(cardRelatorioDataFi);
    cardRelatorioConteudo.appendChild(cardRelatorioDeleta);
    cardRelatorio.appendChild(cardRelatorioItem);
    cardRelatorioItem.appendChild(cardRelatorioConteudo);
    main.appendChild(cardRelatorio);

    let objCards = {
      cliente:clienteValor,
      nome:nomeValor,
      dataIn:dataInValor,
      dataFi:dataFiValor,
      investimento:investimentoValor,
      total:card.valor,
      views:card.visualizacoes,
      cliques:card.cliques,
      shares:card.shares
    };

    cards.push(objCards);
    let cardsArray = JSON.stringify(cards)
    localStorage.setItem('cards', cardsArray);


    const removeCard = getElemento('[data-reportView-card]')
    removeCard.addEventListener('click', function(event) {
      if(event.target && event.target.className == "reportView__deleta") {
        const distancia = event.target.parentNode.textContent.indexOf("Nome do anúncio")
        const i = event.target.parentNode.textContent.slice(17,distancia-5);
        cards.forEach((item, index) => {
          if (item.cliente == i) {
            cards.splice(index, 1);
            localStorage.setItem('cards', JSON.stringify(cards))
          }
        });
        event.target.parentNode.parentNode.remove();
      }
    })
  })
}
