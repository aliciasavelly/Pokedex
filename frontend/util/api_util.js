export const fetchAllPokemon = () => (
  $.ajax({
    method: 'GET',
    url: '/api/pokemon'
  })
)

export const fetchOnePokemon = (pokeId) => (
  $.ajax({
    method: 'GET',
    url: `api/pokemon/${pokeId}`
  })
)

export const fetchOneItem = (pokeId, itemId) => (
  $.ajax({
    method: 'GET',
    url: `api/pokemon/${pokeId}/item/${itemId}`
  })
)
