const brand =document.getElementById('menuBrand');
const home =document.getElementById('menuHome');
const work =document.getElementById('menuWork');
const contact =document.getElementById('menuContact');
const menu =document.getElementById('Menu');

home.addEventListener('click',()=>{
    home.classList.add('active');
    work.classList.remove('active');
    contact.classList.remove('active');
    menu.classList.remove('activeBackground');
});
work.addEventListener('click',()=>{
            work.classList.add('active');
            contact.classList.remove('active');
            home.classList.remove('active');
            menu.classList.add('activeBackground');
});
contact.addEventListener('click',()=>{
    
    contact.classList.add('active');
    home.classList.remove('active');
    work.classList.remove('active');
    menu.classList.add('activeBackground');
});
brand.addEventListener('click',()=>{
    home.classList.add('active');
    work.classList.remove('active');
    contact.classList.remove('active');
    menu.classList.remove('activeBackground');
});


//second part on scroll



var timer = null;
window.addEventListener('scroll', function() {
    if(timer !== null) {
        clearTimeout(timer);   
        if(window.scrollY==0){
            menu.classList.remove('activeBackground');
           }else{
        menu.classList.add('activeBackground');
        menu.classList.add('hide')}
    }
    timer = setTimeout(function() {
        menu.classList.remove('hide')  
    }, 550);
}, false);