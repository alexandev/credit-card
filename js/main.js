const $tarjeta = document.querySelector("#credit-card")

$tarjeta.addEventListener('click', ()=>{
    $tarjeta.classList.toggle('active')
})



const btnOpenForm = document.querySelector('#btn-open-form')

btnOpenForm.addEventListener('click', () => {
    btnOpenForm.classList.toggle('active')
})