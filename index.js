let keyword = ''
const SECRET_KEYWORD = 'jquery'

const audio = new Audio("jquery.mp3")

$(document).ready(() => $("#counter").html(`${!localStorage.getItem("jqueeery") ? '0' : localStorage.getItem("jqueeery")}`))

const animateImage = () => {
    const photo = $('img')[0].classList

    photo.add("shake")
    setTimeout(() => (photo.remove("shake")), 500)
}

const updateCounter = () => {
    const counter = localStorage.getItem("jqueeery")
    localStorage.setItem("jqueeery", counter ? 1 + +counter : 1)
    $("#counter").html(`${localStorage.getItem("jqueeery")}`)
}

const makeJquery = () => {
    audio.play()
    updateCounter()
    animateImage()
}

$("img").click(makeJquery)

document.addEventListener('keydown', e => {
    if (keyword.length >= 6)
        keyword = ''
    keyword += e.code.split('Key')[1]?.toLowerCase()

    if (keyword === SECRET_KEYWORD)
        makeJquery()
    setTimeout(() => (keyword = ''), 1000)
})