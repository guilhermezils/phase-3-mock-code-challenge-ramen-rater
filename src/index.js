// write your code here
const getRamen = `http://localhost:3000/ramens`
const getRamenId = `http://localhost:3000/ramens/:id`
const patchRamen = `http://localhost:3000/ramens`
const parentDiv = document.querySelector(`div#ramen-menu`)

fetch (getRamen) 
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
    if(event.target.matches('img')){
      const img = ramenDetail.querySelector('img.detail-image')
      const selectedImage = event.target.src
        img.src = selectedImage
    }

})
