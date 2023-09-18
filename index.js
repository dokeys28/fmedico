const BOTON_ENVIAR = document.querySelector('.enviar')
const BOTON_VER = document.querySelector('.blistado')
const INPUTS = document.querySelectorAll('input')

let PACIENTE = {}
const url_api = 'https://api_consultorio-1-y0645629.deta.app/guardar'
const url_api_total = 'https://api_consultorio-1-y0645629.deta.app/total'
const url_api_prueba = 'http://127.0.0.1:8000/guardar'
const url_api_prueba_total = 'http://127.0.0.1:8000/total'

let primera_vez = false
let numero
async function actualizar_numero(){
    await fetch(url_api_total)
        .then(response =>{
            return response.json()
        })
        .then(data =>{
            numero = data
            
        })
}

async function guardar(){
    await actualizar_numero()
    console.log(numero)
    INPUTS.forEach(element => {
        PACIENTE[element.className] = element.value
    });
    PACIENTE['id'] = numero
    let objetoString = JSON.stringify(PACIENTE)
    await fetch(url_api, {method: ['POST'], headers:{'Content-Type': 'application/json'}, body: objetoString})
        .then(response =>{
            return response.json()
    })
        .then(data =>{
            console.log(data)
    })
    INPUTS.forEach(element => {
        element.value = ""
    });
    };



function ver_listado(){
    window.location.href = 'pacientes.html'};
    



BOTON_ENVIAR.addEventListener('click', guardar)

BOTON_VER.addEventListener('click', ver_listado)