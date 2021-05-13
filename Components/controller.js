import { criarCard } from './view.js'
import { Ad } from './model.js'

criarCard(Ad);

let cliente = document.querySelector('[data-reportView-buscaNome]');
cliente.onkeyup = function () {
  let filtro = cliente.value.toUpperCase();
  let cardList = document.querySelector('[data-reportView-card]');
  let cardItem = cardList.getElementsByTagName("li");
  for (var i = 0; i < cardItem.length; i++) {
    let p = cardItem[i].querySelectorAll('[data-reportView-cardNome]')[0];
    let valor = p.textContent || p.innerText;
    if (valor.toUpperCase().indexOf(filtro) > -1) {
      cardItem[i].style.display = "";
    } else {
      cardItem[i].style.display = "none";
    }
  }
}

let data = document.querySelector('[data-reportView-buscaData]')
data.addEventListener('change', function() {
  let filtro = data.value.replace(/[^0-9]/gi, "");
  let cardList = document.querySelector('[data-reportView-card]');
  let cardItem = cardList.getElementsByTagName("li");
  for (var i = 0; i < cardItem.length; i++) {
    let dataIn = cardItem[i].querySelectorAll('[data-reportView-dataIn]')[0]
    let dataFi = cardItem[i].querySelectorAll('[data-reportView-dataFi]')[0]
    let inicio = parseInt(dataIn.textContent.replace(/[^0-9]/gi, ""))
    let final = parseInt(dataFi.textContent.replace(/[^0-9]/gi, ""))
    let alvo = parseInt(filtro)
    if (alvo >= inicio && alvo <= final) {
      cardItem[i].style.display = "";
    } else {
      cardItem[i].style.display = "none";
    }
  }
} )
