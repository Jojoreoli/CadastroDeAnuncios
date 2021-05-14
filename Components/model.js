// Lógica da calculadora
export class Ad {
  constructor(dataIn, dataFi, investimento) {
    this.dias = this.calcularDiasTotais(dataIn, dataFi);
    this.valor = this.dias * investimento;
    this.visualizacoes = 0;
    this.cliques = 0;
    this.shares = 0;
    this.limitador = 0;
  }

  inicial(){
    let valor = this.valor*30;
    this.visualizacoes += valor;
    this.visualizar(valor);
  }

  visualizar(visualizacoes) {
    let cliques = Math.floor((visualizacoes*12) / 100);
    this.cliques += cliques;
    this.clicar(cliques);
  }

  clicar(cliques) {
    let shares = Math.floor((cliques*3) / 20);
    this.shares += shares;
    this.compartilhar(shares);
  }

  compartilhar(shares) {
    let sharedViews = shares * 40;
    this.visualizacoes += sharedViews;
    this.calcular(sharedViews);
  }

  calcular(newViews) {
    this.limitador += 1;
    if (this.limitador < 3) {
      this.visualizar(newViews);
    }
  }

  calcularDiasTotais(dataIn, dataFi) {
    const dataInicial = new Date(dataIn);
    const dataFinal = new Date(dataFi);
    const diferenca = dataFinal.getTime() - dataInicial.getTime();
    const dias = Math.ceil(diferenca / (1000*3600*24));
    return dias;
  }
}
