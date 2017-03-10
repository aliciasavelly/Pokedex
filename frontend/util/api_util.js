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
