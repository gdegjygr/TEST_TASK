const scrollArrow = document.querySelector('#scrollTop')
const transistor = document.querySelector(".scrollToTop")


function scrollToTop() {
    if (window.scrollY !== 0){
        window.scrollTo({behavior: "smooth", top: 0})
    } else {
        scrollArrow.style.display = "none"
    }
}

scrollArrow.addEventListener('click', scrollToTop)

window.addEventListener('scroll', () => {
    if (window.scrollY > 5210){
        scrollArrow.style.display = 'block'
        transistor.style.opacity = "1"
        transistor.style.transition = "opacity 1s"
        transistor.style.zIndex = "1"
    } else {
        scrollArrow.style.display = 'none'
        transistor.style.opacity = "0"
        transistor.style.transition = "opacity 1s"
    }
})