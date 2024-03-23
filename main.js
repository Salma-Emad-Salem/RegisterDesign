const wrapper =document.querySelector('.wrapper');
const loginLink =document.querySelector('.login-link');
const registerLink =document.querySelector('.register-link');
const burgerIcon =document.querySelector('.burger')
const linksIco =document.querySelector('.links')
const closemenu =document.querySelector('.closeMenu')
const btnpopUp =document.querySelector('.btnLogin-popup');
const btnpopUpmenu =document.querySelector('.btnLogin-popupmenu');
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
burgerIcon.addEventListener('click', ()=>{
    linksIco.classList.add('memo')
})
closemenu.addEventListener('click', ()=>{
    linksIco.classList.remove('memo')
})
btnpopUpmenu.addEventListener('click', ()=>{
    wrapper.classList.add('active-popUp')
})
iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popUp')
})
btnpopUpmenu.addEventListener('', ()=>{
    wrapper.classList.remove('active-popUp')
})


