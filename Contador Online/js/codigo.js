let numeros = 0
let boton_mas_1 = document.getElementById('num1')
let boton_mas_2 = document.getElementById('num2')
let boton_mas_100 = document.getElementById('num100')
let contadore = document.getElementById('contador')
function sumar() {
    boton_mas_1.addEventListener('click',suman1)
    boton_mas_2.addEventListener('click',suman2)
    boton_mas_100.addEventListener('click',suman100)
}
function suman1() {
    numeros++
    contadore.innerHTML = numeros
}
function suman2() {
    numeros+= 2
    contadore.innerHTML = numeros
}
function suman100() {
    numeros+= 100
    contadore.innerHTML = numeros
}