





const menuButton = document.querySelector('.menuButton')
const mobileNav = document.querySelector('nav')


menuButton.addEventListener('click', ()=>{

    if (mobileNav.style.display == 'none') {
        mobileNav.style.display = 'flex'
        menuButton.style.position = 'fixed'
        menuButton.style.top = '1rem'
        menuButton.style.right = '1rem'
    }
    else{
        mobileNav.style.display = 'none'
        menuButton.style.position = 'static'

    }
})

