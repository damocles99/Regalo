const progreso = document.getElementById('progreso')
const cancion = document.getElementById("audio-xd")
const reload = document.getElementById('reiniciar')
const btnplay = document.getElementById("play");
const mute = document.getElementById('mute')
const icon = document.getElementById("icono");
const icon2 = document.getElementById('mute_xd')

btnplay.addEventListener("click", reproducirPausar);

function reproducirPausar() {
  if(cancion.paused){
    reproducircancion();
  } else{
    pausarCancion();
  }
}
function reproducircancion() {
    cancion.play();
    icon.classList.add('bi-pause-circle-fill');
    icon.classList.remove('bi-play-circle-fill');
}
function pausarCancion() {
    cancion.pause();
    icon.classList.remove('bi-pause-circle-fill');
    icon.classList.add('bi-play-circle-fill');
}

cancion.addEventListener('timeupdate', function(){
    if (!cancion.paused) {
        progreso.value = cancion.currentTime    
    }
})

progreso.addEventListener('input', function() {
    cancion.currentTime = progreso.value
})

mute.addEventListener('click', mutearDesmutear);

function mutearDesmutear() {
    if(cancion.muted){
        desmuteo();
    }
    else{
        muteo();
    }
}
function muteo(){
    cancion.muted = true
    icon2.classList.add('bi-volume-up');
    icon2.classList.remove('bi-volume-mute-fill');
}
function desmuteo(){
    cancion.muted = false
    icon2.classList.remove('bi-volume-up');
    icon2.classList.add('bi-volume-mute-fill');
}

reload.addEventListener('click', reestaurar);

function reestaurar() {
    cancion.currentTime = 0;
}