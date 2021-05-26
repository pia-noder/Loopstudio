let btn = document.getElementById('header-toggleBtn');
let header = document.querySelector('header');
let mobileMenu = document.getElementById('mobile-menu');



btn.addEventListener('click',()=>{
    console.log('toggle activé')
    header.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');   
    btn.classList.toggle('is-active');
});

