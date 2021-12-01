function calc() {
  let a = parseFloat(document.querySelector("#nbr1").value);
  let b = parseFloat(document.querySelector("#nbr2").value);
  let op = document.querySelector("#opr").value;

  let calcul;

  if (op == "add") {
    calcul = a + b;
  } else if (op == "min") {
    calcul = a - b;
  } else if (op == "mul") {
    calcul = a * b;
  } else if (op == "div") {
    calcul = a / b;
  }

  document.querySelector("#rst").innerHTML = calcul;
}


function effacer() {
  let rsts = document.querySelector("#rst");
  let nb = document.querySelector("#nbr1");
  let nbr = document.querySelector("#nbr2");
  nb.value = "";
  nbr.value = "";
  rsts.innerHTML = "";
}



function ad() {
  let nbm = document.querySelector("#nbr1");
  let nbm2 = document.querySelector("#nbr2");
  let rsts = document.querySelector("#rst");

  nbm.value = rsts.innerHTML;
  nbm2.value = "";
  rsts.innerHTML = "";
}
