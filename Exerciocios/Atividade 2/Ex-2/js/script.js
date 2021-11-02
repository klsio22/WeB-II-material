let div_page = document.querySelector(".div_page");

window.onload = () => {
  genetraterNumeber();
};

genetraterNumeber = () => {
  const numberGenerator = getRandom(10000);
  const numberIdentification = toExtract(numberGenerator);

  let number = document.createElement("h3");
  number.innerHTML = "Número indetificador do time: " + numberIdentification;
  div_page.appendChild(number);

 // console.log(number);
};

function getRandom(max) {
  return Math.floor(Math.random() * max);
}

const toExtract = (numberGenerator) => {
  let extract = Math.round((numberGenerator % 100) / 5);
  //console.log(extract);

  extract === 0 ? ++extract : extract;

  return extract;
};