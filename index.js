// variables
const urlBase = 'https://api.punkapi.com/v2/beers'

// Create an async function called "getBeers" that uses fetch to get our beer data from the urlBase.
// Render each beer name inside the div with the class of beers that currently exists in the HTML file.

async function getBeers() {
  // fetch
  const beerPromise = await fetch(urlBase)
  const beers = await beerPromise.json()

  // render data
  const beersDiv = document.querySelector('.beers')

  let beerHtml = ''

  console.log(beers)

  // Fill in the blanks with the rest of the data

  beers.forEach((beer) => {
    beerHtml += `
       <div class='beer-wrapper card'>
           <div class='beer'>
               <img class='beer__img' src="${beer.image_url}">
               <h3>${beer.name}</h3>
               <span class='beer__info'>
                   <span>ABV: ${beer.abv}%</span>
                   <span>IBU: ${beer.ibu}</span>
               </span>
           </div>
           <div class='beer__content'>
               <div class='beer__name'>${beer.name}</div>
               <div class='beer__tagline'>${beer.tagline}</div>
               <div class='beer__description'>${beer.description}</div>
               <div class='beer__food-pairing'>
               Pair with: ${beer.food_pairing.join(', ')}
               </div>
           </div>
       </div>
      `
  })

  beersDiv.innerHTML = beerHtml
}

getBeers()
