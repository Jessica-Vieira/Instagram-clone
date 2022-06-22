let time = 5000,
    currentImageIindex = 0,
    images = document.querySelectorAll('.instagram__phone img'),
    max = images.length;

function nextImage(){
    images[currentImageIindex].classList.remove('selected')
    currentImageIindex ++

    if(currentImageIindex>=max){
        currentImageIindex = 0
    }

    images[currentImageIindex].classList.add('selected')
}
function start () {
    setInterval(nextImage, time)
}

window.addEventListener('load',start)