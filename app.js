const btn = document.querySelector('#myBtn'),
      spoiler = document.querySelector('#spoiler');


document.addEventListener('keydown',(e)=>{
    if(e.code=="Escape"){
        spoiler.classList.add('closed')
    }
})



btn.addEventListener('click',()=>{
    if(spoiler.classList.contains('closed')){
        spoiler.classList.remove('closed')
    } else {
        spoiler.classList.add('closed')
    }
})