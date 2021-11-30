let div_page = document.querySelector("#div-page");

window.onload = () => {
  medidorMonitor();
  medidorJanela();

  url_atual();
  titulo();
  dataAtual();

}

function medidorMonitor() {
  let alturaMonitor = window.screen.height;
  let larguraMonitor = window.screen.width;

  let altura = document.createElement("h3")
  let largura = document.createElement("h3")

  altura.innerHTML = "Altura do Monitor: " + alturaMonitor;
  largura.innerHTML = "Largura do Monitor: " + larguraMonitor;

  div_page.appendChild(altura)
  div_page.appendChild(largura)

  console.log(alturaMonitor)
  console.log(larguraMonitor);
}

function medidorJanela() {
  let alturaJanela = window.innerHeight;
  let larguraJanela = window.innerWidth;

  let altura = document.createElement("h3")
  let largura = document.createElement("h3")


  altura.innerHTML = "Altura do Janela: " + alturaJanela;
  largura.innerHTML = "Largura do Janela: " + larguraJanela;

  div_page.appendChild(altura)
  div_page.appendChild(largura)

  console.log("Altura Janela do browser: " + alturaJanela);
  console.log("Lergura janela do browser:" + larguraJanela)

}

function url_atual() {
  let url_atual = window.location.href;
  let url = document.createElement("h3");

  url.innerHTML = "Url do site: " + url_atual;
  div_page.appendChild(url);

  console.log(url_atual)
}

function titulo() {
  const TITULO = document.title;

  let titulo = document.createElement("h3")
  titulo.innerHTML = "Titulo da pagina: " + TITULO;

  div_page.appendChild(titulo)

  console.log(titulo)
}

function dataAtual() {
  let novaDiv = document.createElement("div");

  novaDiv.innerHTML = new Date;
  div_page.appendChild(novaDiv);

  console.log(novaDiv)
}

function barraDeRolagem() {
  let barra_de_rolagem = window.scrollY;
  alert(` ${barra_de_rolagem.toFixed(1)} px`)
  console.log(barra_de_rolagem.toFixed(1) + " px")

}

function moverBarra() {
  let eixoY;
  eixoY = prompt("Digite a posição da barra de rolagem no eixo y");
  eixoY = parseFloat(eixoY);

  if (eixoY > 776.0 || eixoY < 0) {
    while (eixoY > 776.0 || eixoY < 0) {
      alert("Valor invalido tente Novamente!");
      eixoY = prompt("Digite a posição da barra de rolagem no eixo y");
      eixoY = parseFloat(eixoY);
    }

    window.scrollTo(0, eixoY);
  } else
    window.scrollTo(0, eixoY);
  console.log(eixoY)

}

function semanaAcademica() {
  if (window.confirm("Você realmente deseja acessar a página ? ")) {
    window.open("https://semana.tsi.gp.utfpr.edu.br/")

  }
}
