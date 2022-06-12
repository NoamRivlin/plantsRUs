const plants = [
  {
    id: 1,
    name: 'blue',
    price: 10,
    //https://i.imgur.com/Uwoih2T.jpeg
    image: './img/plant01.jpg',
  },
  {
    id: 2,
    name: 'red',
    price: 5,
    //https://i.imgur.com/yqUR2Ek.jpeg
    image: './img/plant02.jpg',
  },
  {
    id: 3,
    name: 'green',
    price: 15,
    //https://i.imgur.com/WJMxNH6.jpeg
    image: './img/plant03.jpg',
  },
];

renderingCatalogAndItems()

function renderingCatalogAndItems() {
  let elCatalog = document.getElementById('catalog');
  for (let plant of plants) {
    let elPlantInfo = document.createElement('div');
    elPlantInfo.classList.add(`plant-${plant.id}-info`)
    let elPlantName = document.createElement('p')
    elPlantName.innerText = `${plant.name} costs ${plant.price} $`
    elPlantInfo.appendChild(elPlantName)
    let elPlantImg = document.createElement('img')
    elPlantImg.src = plant.image
    elPlantInfo.appendChild(elPlantImg)

    elCatalog.appendChild(elPlantInfo)
  }

}


function searchCatalog() {

}