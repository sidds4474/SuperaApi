let id=localStorage.getItem('id')
//console.log(id)
async function fetchData(){
const hero=await fetch('https://superheroapi.com/api.php/349834112859931/'+id)
const data=await hero.json()
console.log(data)

  //Display all the data
  const name=document.createElement('h1')
  name.innerHTML=data.name
  //img.setAttribute('src',data.image.url)
  document.querySelector('.name').appendChild(name)

  //Powerstats
  for(let key of Object.keys(data.powerstats)){
    let div=document.createElement('div')
    div.classList.add('powerstats')
    let stats=document.createTextNode(key+" : "+data.powerstats[key])
    div.appendChild(stats)
    document.querySelector('.powerstats').appendChild(div)
  }
  //Biography
  for(let key of Object.keys(data.biography)){
    let div=document.createElement('div')
    div.classList.add('biography')
    let stats=document.createTextNode(key+" : "+data.biography[key])
    div.appendChild(stats)
    document.querySelector('.biography').appendChild(div)
  }

  //Appearance
  for(let key of Object.keys(data.appearance)){
    let div=document.createElement('div')
    div.classList.add('appearance')
    let stats=document.createTextNode(key+" : "+data.appearance[key])
    console.log(stats)
    div.appendChild(stats)
    document.querySelector('.appearance').appendChild(div)
  }
  //Work
  for(let key of Object.keys(data.work)){
    let div=document.createElement('div')
    div.classList.add('work')
    let stats=document.createTextNode(key+" : "+data.work[key])
    div.appendChild(stats)
    document.querySelector('.work').appendChild(div)
  }
}
fetchData()