const populatebt = document.getElementById("populate");
const baseSelector = document.getElementById("base-select");
const spanBoard = document.getElementById("spanBoard");
// array para os códigos HTML de Subscript e iteração para popular o vetor.
const baseHTML = [];
for (let i = 0; i < 11; i++) {
  if (i < 10) {
    baseHTML[i] = `&#832${i}`;
  } else {
    baseHTML[16] = `&#8341&#8337&#8339`;
  }
}
function calcSoma(base) {
  spanBoard.innerHTML = ""; //limpa
  let i = 0;
  while (i < 10) {
    const soma = {
      n1: Math.floor(Math.random() * 2000),
      n2: Math.floor(Math.random() * 2000),
    };
    let sum = soma.n1 + soma.n2;
    soma.result = sum.toString(base);
    const newOp = document.createElement("details");
    newOp.innerHTML = `<summary>${soma.n1.toString(base)}${
      baseHTML[base]
    } + ${soma.n2.toString(base)}${baseHTML[base]}</summary> <p>${soma.result}${
      baseHTML[base]
    }</details></p>`;
    spanBoard.appendChild(newOp);
    i++;
  }
}
populatebt.addEventListener("click", function () {
  base = parseInt(baseSelector.value);

  calcSoma(base);
});
