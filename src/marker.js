const mapboxgl = require('mapbox-gl')

const activityIconUrl = 'http://i.imgur.com/WbMOfMl.png'
const hotelIconUrl = 'http://i.imgur.com/D9574Cu.png'
const restaurantIconUrl = 'http://i.imgur.com/cqR6pUI.png'

const ACTIVITY = 0
const HOTEL = 1
const RESTAURANT = 2

function makeMarker(type, coords) {
  let url
  switch (type) {
    case ACTIVITY: url = activityIconUrl; break
    case HOTEL: url = hotelIconUrl; break
    case RESTAURANT: url = restaurantIconUrl; break

  }
  if (url) {
    const div = document.createElement("div")
    div.style.height = '37px'
    div.style.width = '32px'
    div.style.backgroundImage = `url("${url}")`
    return new mapboxgl.Marker(div).setLngLat(coords)
  } else {
    return undefined
  }
}

module.exports = { ACTIVITY, HOTEL, RESTAURANT, makeMarker }