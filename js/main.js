const $tarjeta = document.querySelector("#credit-card")

$tarjeta.addEventListener('click', ()=>{
    $tarjeta.classList.toggle('active')
})



const btnOpenForm = document.querySelector('#btn-open-form')
const formulario= document.querySelector('#form-card')

btnOpenForm.addEventListener('click', () => {
    btnOpenForm.classList.toggle('active')
    formulario.classList.toggle('active')
})

//*Select del mes generado dinamicamente
for(let i=1; i<=12; i++){
    let opcion=document.createElement('option')
    opcion.value=i
    opcion.innerText=i
    formulario.selectMonth.appendChild(opcion)
}

//* Select del año generado dinamicamente
const yearActual= new Date().getFullYear()
for(let i=yearActual; i<= yearActual +8; i++){
    let opcion=document.createElement('option')
    opcion.value=i;
    opcion.innerText=i;
    formulario.selectYear.appendChild(opcion)
}