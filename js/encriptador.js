let textfield = document.getElementById("textfield");
let inicial = document.getElementById("resultado-inicial");
let resultadoTextfield = document.getElementById("texto-resultante");
let resultadoCaja = document.getElementById("div-resultado");

let cambio = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat"
}

let cambioDesencriptar = {
  ai: "a",
  enter: "e",
  imes: "i",
  ober: "o",
  ufat: "u"
}

function encriptar() {
  let texto = textfield.value;
  let resultado = "";

  for (let i = 0; i<texto.length; i++){
    let letra = texto[i];
    if(letra in cambio) {
      resultado += cambio[letra];
    }
    else{
      resultado += letra;
    }
  }
  if(resultado !== "") {
    resultadoCaja.style.display = "inline-block";
    inicial.style.display = "none";
    resultadoTextfield.value = resultado;
  }
}

function desencriptar() {
  console.log("Desencriptado");
  let texto = textfield.value;
  let resultado = "";

  for (let i = 0; i<texto.length; i++){
    let letra = texto[i];
    if(letra in cambio) {
      let textoEncriptado = cambio[letra];
      if (texto.substring(i, i+textoEncriptado.length) === textoEncriptado) {
        i += textoEncriptado.length - 1;
      }
      else {
        alert("Este no es un texto encriptado");
        break;
      }
    }
    resultado += letra;
  }

  if(resultado !== "") {
    resultadoCaja.style.display = "inline-block";
    inicial.style.display = "none";
    resultadoTextfield.value = resultado;
  }
}

function copiar() {
  console.log("Copiado");
  navigator.clipboard.writeText(resultadoTextfield.value).then(() => {
    console.log("Texto agregado al clipboard");
  }).catch(err => {
    console.error("Error al escribir en el clipboard: ", err);
  });
}