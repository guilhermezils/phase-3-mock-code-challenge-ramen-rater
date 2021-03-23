// write your code here
const ramenUrl = `http://localhost:3000/ramens`
//const ramenUrlId = `http://localhost:3000/ramens/:id`
const patchRamen = `http://localhost:3000/ramens`
const parentDiv = document.querySelector(`div#ramen-menu`)

fetch (ramenUrl) 
.then (response => response.json())
.then (response => response.forEach(element => renderOneRamen(element)))

function renderOneRamen (element){
    const imgRamen = document.createElement(`img`)
    imgRamen.dataset.id = element.id
    imgRamen.src = element.image 
    parentDiv.append(imgRamen)
}

//event listener for a click on a particular img
//will need a fetch request for a page for that image
//will need to render that ramen with its attr

parentDiv.addEventListener('click', (event)=> {
    const ramenDetail = document.querySelector('div#ramen-detail')
    const form =  ramenDetail.nextElementSibling
    let rating = form[0] 
    let comment = form[1]
    
    if(event.target.matches('img')){
      const img = ramenDetail.querySelector('img.detail-image')
      const selectedImage = event.target
        img.src = selectedImage.src
        const id = selectedImage.dataset.id
        const name = img.nextElementSibling
        const restaurant = name.nextElementSibling

fetch (ramenUrl + `/${id}`)
.then(response => response.json())
.then(ramenObj => {
name.textContent = ramenObj.name 
restaurant.textContent = ramenObj.restaurant
rating.value = ramenObj.rating
comment.value = ramenObj.comment
})


    }

})
