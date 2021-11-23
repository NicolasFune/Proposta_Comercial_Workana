let mouse__interaction__areas = document.getElementsByClassName('mouse__interaction__area')
let leftPositionSlide = 0
let carrosel_controls = document.getElementsByClassName('carrosel_control')
let bot_des = document.getElementsByClassName('call__button').item(0)
let bot_des_txt = document.getElementsByClassName('call__button__text').item(0)
let carrosel = document.getElementsByClassName('carrosel')
let slides = document.getElementsByClassName('container__section--li')
let prevSlide = document.getElementById('prevSlide--button')
let nextSlide = document.getElementById('nextSlide--button')
let prev = document.getElementsByClassName('__button_prev').item(0)
let next = document.getElementsByClassName('__button_next').item(0)
let span_site = document.getElementsByClassName('span_site').item(0)
let call__button = document.getElementsByClassName('call__button').item(0)
let index = 0

var uagent = navigator.userAgent.toLowerCase();
       if (uagent.search("iphone") > -1){
        location.replace("./ops.html")
       }else{
        
       }
          
if(window.innerWidth < 1024){
    $(".img").attr('src', '');
}


window.setTimeout(function name(params) {
    next.style.display = 'flex'
},12000)
//12000 default

$('#nextSlide--button').click(function (e) { 
    e.preventDefault();
    $('.text_site').css('animation', 'b .7s infinite steps(1),t calc(var(--n)*.06s) steps(var(--n)) forwards');
    window.setTimeout(function name(params) {
        $('.call__button').css('display', 'flex');
    },12000)
    //12000 default
});
prevSlide.addEventListener('click',function VoltarSlide(){
    
    leftPositionSlide = leftPositionSlide + 100
    if(leftPositionSlide > 0){
        leftPositionSlide = -100
    }
    Array.from(slides).forEach(function name(params) {
        slides.item(index).style.left = leftPositionSlide + 'vw'
        index = index + 1
    })
    index=0
    
    
})

nextSlide.addEventListener('click',function AvançarSlide(){
    leftPositionSlide = leftPositionSlide - 100
    if(leftPositionSlide < -100){
        leftPositionSlide = 0
    }
    Array.from(slides).forEach(function name(params) {
        slides.item(index).style.left = leftPositionSlide + 'vw'
        index = index + 1
    })
    index=0
    $('.__button_next').css('display', 'none');
})
