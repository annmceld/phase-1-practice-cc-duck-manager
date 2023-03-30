// write your code here!
// When the page loads, fetch the ducks and display each duck image 
//in the #duck-nav.

const baseUrl = 'http://localhost:3000/'
const ducksUrl = baseUrl + 'ducks/'

document.addEventListener('DOMContentLoaded', (e) => {
    fetchDucks()
    
    const newDuckForm = document.getElementById('new-duck-form')
    console.log(newDuckForm)

    newDuckForm.addEventListener('submit', (event) => {
        console.log("Duck has been added")
        event.preventDefault()
        
        const newDuck = {
        "name": newDuckForm["duck-name-input"].value,
        "img_url": newDuckForm["duck-image-input"].value,
        "likes": 0
        }
        newDuckForm.reset()
    
    renderSingleDuck(newDuck)
    })

})

function fetchDucks() {
    fetch(ducksUrl)
    .then(res => res.json())
    .then(renderAllDucks)
}

function renderAllDucks(ducks) {
    ducks.forEach(duck => renderSingleDuck(duck))
}

function renderSingleDuck(duck) {
    const duckNav = document.getElementById('duck-nav')
    const duckImage = document.createElement('img')
    duckNav.appendChild(duckImage)

    duckImage.src = duck['img_url']
    duckImage.alt = "This is a duck"
    duckImage.id = duck.id

    duckImage.addEventListener('click', () => displayDuckDetails(duck))

    
}

// When a user clicks one of the duck images, it shows the duck's name,
// image, and a likes button with the number of likes in the #duck-display
    



function displayDuckDetails(duck) {
    //console.log("duck is displayed")
    const duckDisplayName = document.getElementById('duck-display-name')
    const duckDisplayImage = document.getElementById('duck-display-image')
    const duckDisplayLikes = document.getElementById('duck-display-likes')

    duckDisplayName.textContent = duck.name 
    duckDisplayImage.src = duck['img_url']
    duckDisplayLikes.textContent = duck.likes + " likes"

// When the likes button is clicked, it increments the number of likes 
// displayed for that duck. 
// Be sure that the button continues to read "X likes".
duckDisplayLikes.addEventListener('click', () => {
    console.log("Like is added")
    duckDisplayLikes.textContent = (duck.likes += 1) + " likes"
})

}

// When the #new-duck-form is submitted, it generates a new duck image 
// in the #duck-nav. When clicked, it acts like the other images 
// in the #duck-nav and shows a name, image, and like button 
// in the #duck-display

function addNewDuck() {
    console.log("Duck has been added")
    event.preventDefault()
    
    const newDuck = {
    "name": newDuckForm.name.value,
    "img_url": newDuckForm.image.value,
    "likes": 0
    }
    newDuckForm.reset()

    displayDuckDetails(newDuck)
}