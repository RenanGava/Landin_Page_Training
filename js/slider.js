var time = 2000,
    currentAutorIndex = 0,
    autor = document.querySelectorAll('.sobre-autor'),
    bullet = document.querySelectorAll('.slider-bullets span')
    max = autor.length;
    indexOldAutor = 0


function nextImage(){
    if(autor[currentAutorIndex].classList != autor[currentAutorIndex].classList.contains('view')){
        bullet[indexOldAutor].classList.remove('selected')
        autor[indexOldAutor].classList.remove('view')
        bullet[currentAutorIndex].classList.add('selected')
        autor[currentAutorIndex].classList.add('view')
        
    }
    indexOldAutor = currentAutorIndex
    console.log(indexOldAutor);
    currentAutorIndex++
    if(currentAutorIndex == max){
        currentAutorIndex = 0
    }
    
}

function startSlider(){
    nextImage()
    setInterval(()=>{
        nextImage()
    },time)
}
window.addEventListener('load',startSlider())