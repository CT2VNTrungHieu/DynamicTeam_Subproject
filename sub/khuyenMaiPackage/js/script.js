const openDarkmode = document.querySelector('#darkmode')
openDarkmode.addEventListener('click',function(){
    openDarkmode.classList.toggle('bxs-moon')
    if(openDarkmode.classList.contains('bxs-moon')){
        document.body.classList.toggle('active')
    }
    else{
        document.body.classList.remove('active')
    }
})