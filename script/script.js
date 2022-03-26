$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.nav').addClass("sticky");
        }else{
            $('.nav').removeClass("sticky");
        }

    })
})

const Modal = {
    open(){
        document.querySelector('.nav .menu').classList.toggle("active")
        document.querySelector('.menu-open').classList.toggle("turn-in")
        
    }
}
