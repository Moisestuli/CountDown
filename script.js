
const diasEl = document.getElementById('dias');
const horasEl = document.getElementById('horas');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');




const anoNovo = '24 august 2022';

function countDown(){
    const novoAnoDate = new Date(anoNovo);
    const dataActual = new Date();

    const Totalsegundos = (novoAnoDate - dataActual) / 1000;

    const dia = Math.floor(Totalsegundos / 3600 / 24);
    const hora = Math.floor(Totalsegundos / 3600) % 24;
    const minutos = Math.floor(Totalsegundos / 60) %  60 ;

    const segundos  = Math.floor(Totalsegundos % 60);

   

    diasEl.innerHTML = dia;
    horasEl.innerHTML = formatTime(hora);
    minsEl.innerHTML = formatTime(minutos);
    secondsEl.innerHTML = formatTime(segundos);

    
}

function formatTime(time){
    return time < 10 ? (`0${time}`) :time
}

// initial 
countDown();

setInterval(countDown, 1000);