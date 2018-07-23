let popbutton = document.querySelector("#popbutton")
let bigbutton = document.querySelector("#bigbutton")
let fancybutton = document.querySelector("#fancybutton")
let negativebutton = document.querySelector("#negativebutton")
let mybutton = document.querySelector("#button")
let result = document.querySelector("#result")

popbutton.addEventListener("click", e => {
    console.log("pop button clicked!")
    target.classList.toggle('pop')
})
bigbutton.addEventListener("click", e => {
    console.log("big button clicked!")
    target.classList.toggle('big')
})
fancybutton.addEventListener("click", e => {
    console.log("fancy button clicked!")
    target.classList.toggle('fancy')
})
negativebutton.addEventListener("click", e => {
    console.log("negative button clicked!")
    target.classList.toggle('negative')
})
mybutton.addEventListener("click", e => {
    console.log("Custom button clicked!")
    target.classList.toggle('makeyourown')
    result.innerHTML = '<img src= "https://i.kym-cdn.com/photos/images/newsfeed/000/481/097/ea0.gif" width=500px>'
})
