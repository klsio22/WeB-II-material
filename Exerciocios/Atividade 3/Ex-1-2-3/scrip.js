const calcularMedia = (nota1, nota2) => {
  return (nota1 + nota2) / 2;
}

const calcularPorcentagemFrequencia = (aulas, frequecia) => {
  return (frequecia * 100) / aulas;
}

const ehAprovado = (media, porcentagemFrequencia) => {
  return media >= 6.0 && porcentagemFrequencia >= 75 ?
    document.getElementById("resultadoFinal").innerHTML = "Aprovado" :
    document.getElementById("resultadoFinal").innerHTML = "Reprovado"
}

document.getElementById("adicionar").addEventListener("click",
  () => {
    const nota1 = Number(document.getElementById("nota1").value);
    const nota2 = Number(document.getElementById("nota2").value);
    let numeroAulas = Number(document.getElementById("aulas").value);
    let numeroFrequecia = Number(document.getElementById("frequecia").value);

    if (nota1 > 10 || nota2 > 10){
      return alert("Nota 1 ou nota 2 não pode ser maior que 10")
    }
  
    if (numeroFrequecia > numeroAulas){
      return alert("Numero de frequência não pode ser maior que numero de aulas")
    }

    const media = calcularMedia(nota1, nota2)
    const porcentagemFrequencia = calcularPorcentagemFrequencia(numeroAulas, numeroFrequecia)

    document.getElementById("mediaNotas").innerHTML = media.toFixed(2);
    //console.log("Media das notas ", media)

    document.getElementById("Resultadofrequecia").innerHTML =
      (porcentagemFrequencia).toFixed(2) + "%";

    //  console.log(porcentagemFrequencia)

    /*  media >= 6.0 && porcentagemFrequencia >= 75 ?
      console.log('Aprovado') : console.log("reprovado");
     */

    ehAprovado(media, porcentagemFrequencia)
  })