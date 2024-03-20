const wrapper =document.querySelector('.wrapper');
const loginLink =document.querySelector('.login-link');
const registerLink =document.querySelector('.register-link');
const btnpopUp =document.querySelector('.btnLogin-popup');
const iconClose =document.querySelector('.iconClose');

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active')
})
loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active')
})
btnpopUp.addEventListener('click', ()=>{
    wrapper.classList.add('active-popUp')
})
iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popUp')
})