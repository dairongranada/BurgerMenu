
window.sr =ScrollReveal();

//      I N D E X 
sr.reveal('nav',{
    duration: 3000,
    distance: '-100px',
    //origin: "left",     // OPCIONAL
});





//       M E N U   H A M B U R G U E S A 

const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-1600%';
}


