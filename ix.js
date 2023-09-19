const url_api_listado = 'https://formulario_api-1-r2204303.deta.app/pacientes/'
const url_api_listado_prueba = 'http://127.0.0.1:8000/pacientes/'
const DIV_LISTADO = document.querySelector('.listado')
const DIV_TOTAL = document.querySelector('.total')
const BOTON_VOLVER = document.querySelector('.volver')

function listado(){
    fetch(url_api_listado)
    .then(response =>{
        return response.json()
    })
    .then(data =>{
        data.forEach(element => {
            DIV_LISTADO.innerHTML += `<a href=# onclick= klk(${element.id})>${element.nombre}</a> `
        });
    })
};

function klk(n){
    DIV_LISTADO.innerHTML = ''
    fetch(`${url_api_listado}${n}`)
    .then(response =>{
        return response.json()
    })
    .then(data =>{
        for (clave in data){
        DIV_LISTADO.innerHTML += `<h2>${clave}: ${data[clave]}</h2>`
        }
    })
}

function volver(){
    window.location.href = 'index.html'};

document.addEventListener('DOMContentLoaded', listado)
BOTON_VOLVER.addEventListener('click', volver)