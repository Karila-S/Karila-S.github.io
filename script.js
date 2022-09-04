const textoEntrada = document.querySelector(".input-texto")
const textoSaida = document.querySelector(".output-texto")
const imgLupa = document.querySelector(".img-lupa")
const textoLupa1 = document.querySelector(".texto-lupa1")

function btnEncriptar() {

    var textoEncriptado = encriptar(textoEntrada.value)
    textoSaida.value = textoEncriptado
    desaparece()
}

function btnDescriptografar() {

    var textoDescriptado = descriptografar(textoEntrada.value)
    textoSaida.value = textoDescriptado
    textoEntrada.value = "";
    desaparece()
}

function encriptar(stringEncriptada) {
    //adicionado no css o text-transform:lowercase;
    // let stringEncriptada = stringEncriptada.toLowercase() 
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    for (i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function descriptografar(stringDesencriptar) {
    // let stringEncriptada = stringEncriptada.toLowercase()
    matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    for (i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptar.includes(matrizCodigo[i][1])) {
            stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptar
}

function copiar() {

    const textoCopiado = document.querySelector(".output-texto");
    textoCopiado.select();
    navigator.clipboard.writeText(textoCopiado.value);
    textoCopiado.value = "";
    textoEntrada.value = "";
    alert("texto copiado!");
}

function desaparece() {

    imgLupa.style.display = "none"
    textoLupa1.style.display = "none"
    // uma das formas que poderia ser realizada...
    // var imgLupa = document.getElementsByClassName('img-lupa')
    // imgLupa[0].style.display= "none";
    document.getElementById("desaparece").style.display = "none"
    textoEntrada.value = ""
}