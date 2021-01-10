const $tarjeta = document.querySelector("#credit-card")
const $btnOpenForm = document.querySelector('#btn-open-form')
const $formulario= document.querySelector('#form-card')


const $numberCard= document.querySelector('#credit-card .number')
const $nameUserCard= document.querySelector('#credit-card #card-name .name')
const $logoBrand= document.querySelector('#credit-card .logo-brand')
const $firma =document.querySelector('#credit-card .firma p')

const $monthExpiracion =document.querySelector('#credit-card .expiration__month')
const $yearExpiracion =document.querySelector('#credit-card .expiration__year')
const $ccv = document.querySelector('#credit-card .ccv')


//*mostramos la parte de frente de la tarjeta
const mostrarFrente=()=>{
    if($tarjeta.classList.contains('active')){
        $tarjeta.classList.remove('active')
    }
}

$tarjeta.addEventListener('click', ()=>{
    $tarjeta.classList.toggle('active')
})

$formulario.inputNumber.addEventListener('click', ()=>{
    mostrarFrente()
})

$formulario.inputName.addEventListener('click', ()=>{
    mostrarFrente()
})



$btnOpenForm.addEventListener('click', () => {
    $btnOpenForm.classList.toggle('active')
    $formulario.classList.toggle('active')

    if($tarjeta.classList.contains('active')){
        $tarjeta.classList.remove('active')
    }
})

//*Select del mes generado dinamicamente
for(let i=1; i<=12; i++){
    let opcion=document.createElement('option')
    opcion.value=i
    opcion.innerText=i.toString().padStart(2, "0")
    $formulario.selectMonth.appendChild(opcion)
}

//* Select del año generado dinamicamente
const yearActual= new Date().getFullYear()
for(let i=yearActual; i<= yearActual +8; i++){
    let opcion=document.createElement('option')
    opcion.value=i;
    opcion.innerText=i;
    $formulario.selectYear.appendChild(opcion)
}

//*Imput numero de tarjeta
$formulario.inputNumber.addEventListener('keyup', (e)=>{
    let valorInput = e.target.value

    $formulario.inputNumber.value=valorInput
    //eliminamos espacios en blanco
    .replace(/\s/g, '')
    //eliminamos las letras
    .replace(/\D/g, '')
    //ponemos espacios cada cuatro numeros
    .replace(/([0-9]{4})/g, '$1 ')
    //Elimina el ultimo espaciado
    .trim()

    $numberCard.textContent=valorInput
    .replace(/\D/g, '')
    .replace(/([0-9]{4})/g, '$1 ')

    if(valorInput == '' ||  $numberCard.textContent==''){
        $numberCard.textContent='#### #### #### ####'
    }
    
    // if($numberCard.textContent==''){
    //     $numberCard.textContent='#### #### #### ####'
    // }
    
    if(valorInput[0]==4){
        $logoBrand.innerHTML = '';
        const imagen=document.createElement('img')
        imagen.src= '/img/logos/visa.png'
        $logoBrand.appendChild(imagen)
    }else if(valorInput[0]==5){
        $logoBrand.innerHTML='';
        const imagen=document.createElement('img')
        imagen.src= '/img/logos/mastercard.png'
        $logoBrand.appendChild(imagen)
    }

    mostrarFrente()
})


//*Input nombre de la tarjeta
$formulario.inputName.addEventListener('keyup', (e)=>{
    let valorInput=e.target.value;

    $formulario.inputName.value= valorInput.replace(/[0-9]/g, '')
    $nameUserCard.textContent=valorInput .replace(/[0-9]/g, '')
    $firma.textContent=valorInput

    if(valorInput =='' || $nameUserCard.textContent==''){
        $nameUserCard.textContent='Your Name'
    }

    mostrarFrente()
})

//*Select mes
$formulario.selectMonth.addEventListener('change', (e)=>{
    $monthExpiracion.textContent=e.target.value.toString().padStart(2, "0")
    mostrarFrente()
})

$formulario.selectMonth.addEventListener('click', (e)=>{
    mostrarFrente()
})

//* Select año
$formulario.selectYear.addEventListener('change', (e)=>{
    $yearExpiracion.textContent= e.target.value.slice(2)
    mostrarFrente()
})

$formulario.selectYear.addEventListener('click', (e)=>{
    mostrarFrente()
})


//*ccv
$formulario.inputCCV.addEventListener('keyup', ()=>{
    if(!$tarjeta.classList.contains('active')){
        $tarjeta.classList.toggle('active')
    }
    
    $formulario.inputCCV.value = $formulario.inputCCV.value
    .replace(/\s/g, '')
    .replace(/\D/g, '')

    $ccv.textContent=$formulario.inputCCV.value

    if($formulario.inputCCV.value==''){
        $ccv.textContent='###'
    }
})

$formulario.inputCCV.addEventListener('click', ()=>{
    if(!$tarjeta.classList.contains('active')){
        $tarjeta.classList.toggle('active')
    }
})