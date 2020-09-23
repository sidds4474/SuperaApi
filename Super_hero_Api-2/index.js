let name
let photo
let powerstats
let bio
let appearance
let id

const saveBtn=document.querySelector('.search-button')
const searchInput=document.querySelector('.search-input')
const card=document.querySelector('.card-list')
const seemoreBtn=document.querySelector('.seeMore')
const btn=document.querySelector('.button1')

saveBtn.addEventListener('click',searchAdd)
card.addEventListener('click',cardClicked)
async function fetchData(){

  // const hero=await fetch('https://superheroapi.com/api.php/349834112859931/9')
  // const data=await hero.json()
  // console.log(data)
  // name=data.name
  // photo=data.image.url
  // powerstats=[data.powerstats.strength,data.powerstats.intelligence]
  // bio=[data.biography["full-name"],data.biography.publisher]
  // appearance=[data.appearance.gender]
  // id=data.id

  // console.log(name)
  // console.log(photo)
  // console.log(powerstats)
  // console.log(bio)
  // console.log(appearance)
  // console.log(id)
  //insertData(name,photo,powerstats,bio,appearance)
}

function insertData(){
  const cardList=document.querySelector('.card-list')
  const card=document.createElement('article')
  card.classList.add('card')
  //name
  const header=document.createElement('header')
  header.classList.add('card-header')
  const h1=document.createElement('h1')
  h1.setAttribute('title','Super Hero Name')
  const text=document.createTextNode(name)
  const h2=document.createElement('h2')
  h2.setAttribute('title','Publisher')
  const text0=document.createTextNode(bio[1])
  h1.appendChild(text)
  h2.appendChild(text0)
  header.appendChild(h1)
  header.appendChild(h2)
  card.appendChild(header)
  //heroImage
  const divimg=document.createElement('div')
  divimg.classList.add('card-author')
  const anchorimg=document.createElement('a')
  anchorimg.classList.add('author-avatar')
  anchorimg.setAttribute('href','#')
  const img=document.createElement('img')
  img.setAttribute('src',photo)
  anchorimg.appendChild(img)
  divimg.appendChild(anchorimg)
  console.log(divimg)
  card.appendChild(divimg)
  //powerstats
  const divtag=document.createElement('div')
  divtag.classList.add('tags')
  const anchortag1=document.createElement('a')
  anchortag1.setAttribute('href','#')
  anchortag1.setAttribute('title','Real Name')
  let text1
  if(bio[0]){
     text1=document.createTextNode(bio[0])
  }
  else{
    text1=document.createTextNode('N/A')
  }
  
  anchortag1.appendChild(text1)
  const anchortag2=document.createElement('a')
  anchortag2.setAttribute('href','#')
  anchortag2.setAttribute('title','Strength')
  const text2=document.createTextNode(powerstats[0])
  anchortag2.appendChild(text2)
  const anchortag3=document.createElement('a')
  anchortag3.setAttribute('href','#')
  anchortag3.setAttribute('title','ID')
  const text3=document.createTextNode(id)
  anchortag3.appendChild(text3)
  const anchortag4=document.createElement('a')
  anchortag3.setAttribute('href','#')
  anchortag4.setAttribute('title','Gender')
  const text4=document.createTextNode(appearance[0])
  anchortag4.appendChild(text4)
  divtag.append(anchortag1,anchortag2,anchortag3,anchortag4)
  card.append(divtag)
  cardList.appendChild(card)
  //icon
  const icon=document.createElement('icon')
  icon.classList.add('fas','fa-star')
  icon.setAttribute('title','Add to Favourite')
  card.appendChild(icon)
  //button
  const seemoreBtn=document.createElement('button')
  seemoreBtn.classList.add('seeMore')
  seemoreBtn.textContent='See More'
  seemoreBtn.setAttribute('title','See More')
  seemoreBtn.setAttribute('id',id)
  btn.appendChild(seemoreBtn)
  card.appendChild(btn)
  seemoreBtn.addEventListener('click',seeMore)
  //add to favourites
  const addtofavorites=document.createElement('button')
  addtofavorites.classList.add('addtofavourite')
  addtofavorites.textContent='Add to Favourite'
  addtofavorites.setAttribute('title','Add to Favourite')
  addtofavorites.setAttribute('id',id)
  btn.appendChild(addtofavorites)
  card.appendChild(btn)
}


async function searchAdd(e){
  e.preventDefault()
  let name1=searchInput.value
  const serachName=await fetch('https://superheroapi.com/api.php/349834112859931/search/'+name1)
  const data1=await serachName.json()
  console.log(data1)
  name=data1.results[0].name
  console.log(name)
  photo=data1.results[0].image.url
  powerstats=[data1.results[0].powerstats.strength,data1.results[0].powerstats.intelligence]
  bio=[data1.results[0].biography["full-name"],data1.results[0].biography.publisher]
  appearance=[data1.results[0].appearance.gender]
  id=data1.results[0].id
  console.log(name)
  console.log(photo)
  console.log(powerstats)
  console.log(bio)
  console.log(appearance)
  console.log(id)
  insertData()
}


function cardClicked(){
  //window.open('http://www.google.com', "_blank")
}

async function seeMore(e){
  const id=e.srcElement.id
  const hero=await fetch('https://superheroapi.com/api.php/349834112859931/'+id)
  const data=await hero.json()
  console.log(data)
  window.open('SuperHeroInfo.html', '_blank')
  localStorage.setItem('id',data.id)

} 


fetchData()
