export const fetchAllPokemon = () => (
  $.ajax({
    method: 'GET',
    url: '/api/pokemon'
  })
)

export const fetchOnePokemon = (poke) => (
  $.ajax({
    method: 'GET',
    url: `api/pokemon/${poke.id}`,
    data: poke
  })
)
