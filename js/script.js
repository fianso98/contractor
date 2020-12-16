const brand =document.getElementById('menuBrand');
const home =document.getElementById('menuHome');
const work =document.getElementById('menuWork');
const contact =document.getElementById('menuContact');

document.addEventListener('click',handleClick);

function handleClick(e){
    
    switch(e.target.id){
        case 'menuBrand': 
            home.classList.add('active');
            work.classList.remove('active');
            contact.classList.remove('active');;
        break;
        case home.id:
             home.classList.add('active');
             work.classList.remove('active');
             contact.classList.remove('active');
        break;
        case work.id:
            work.classList.add('active');
            contact.classList.remove('active');
            home.classList.remove('active');
        break;
        case contact.id: 
            contact.classList.add('active');
            home.classList.remove('active');
            work.classList.remove('active');
        break;
        default:null 
    } 
}



//second part on scroll
const menu =document.getElementById('Menu');


var timer = null;
window.addEventListener('scroll', function() {
    if(timer !== null) {
        clearTimeout(timer);   
           
        menu.classList.add('hide')
    }
    timer = setTimeout(function() {
        menu.classList.remove('hide')  
    }, 150);
}, false);