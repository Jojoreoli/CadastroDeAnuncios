<br />
<p align="center">
  <h3 align="center">Cadastro de Anúncios</h3>

  <p align="center">
    Um sistema que permite o cadastro de anúncios e gera cards com relatórios
    <br />
    <a href="https://cadastro-de-anuncios-jojoreoli.vercel.app/">Versão Live disponível aqui</a>
  </p>
</p>

<!-- GETTING STARTED -->
## Rodando o projeto

Você pode usar o sistema acessando o link https://cadastro-de-anuncios-jojoreoli.vercel.app/
<br />
Além da versão live, você pode rodar o projeto localmente

### Pré-requisitos

* NodeJs: https://nodejs.org/en/
* npm
  ```sh
  npm install npm@latest -g
  ```

### Rodando localmente

1. Clone o repositório
   ```sh
   git clone https://github.com/Jojoreoli/CadastroDeAnuncios
   ```
2. Instale o npm live-server
   ```sh
   npm install -g -live-server
   ```
3. No diretório do repositório
   ```sh
   live-server
   ```
4. No browser entre em: http://127.0.0.1:8080/ ou localhost:8080


<!-- USAGE EXAMPLES -->
## Como usar

* Preencha os campos com as informações de seu anúncio e clique no botão **"Criar Anúncio"**. Um card com o relatório sobre o anúncio será criado. 
* Você pode filtrar os anúncios pelo nome do cliente, ou pela data em que o anúncio foi veiculado, utilizando os campos **"Filtro Nome"** e **"Filtro Data"**. 
* Para apagar um card basta clicar no botão **"Apagar"**.

### Sobre o projeto
## Ferramentas e métodos
* HTML
* CSS
  * BEM
  * Grid
  * Flexbox
* Javascript
  * MVC*
  * Web Storage API
<br />
*O projeto tenta se encaixar em um modelo MVC, mas não segue à risca a arquitetura 
<br />

## Regra de negócios
Os cálculos realizados pelo sistema seguem a seguinte lógica
* A cada 100 pessoas que visualizam o anúncio 12 clicam nele.
* A cada 20 pessoas que clicam no anúncio 3 compartilham nas redes sociais.
* Cada compartilhamento nas redes sociais gera 40 novas visualizações.
* 30 pessoas visualizam o anúncio original (não compartilhado) a cada R$ 1,00 investido.
* O mesmo anúncio é compartilhado no máximo 4 vezes em sequência
<br />
Projeto feito como teste para a Academia Técnica Capgemini em parceria com a ProWay
