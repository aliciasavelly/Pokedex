json.extract! @pokemon, :id, :name, :attack, :defense,
              :moves, :poke_type
json.image_url asset_path(@pokemon.image_url)



json.items @pokemon.items, :id, :name, :pokemon_id,
           :price, :happiness, :image_url

# @pokemon.items.each do |item|
#   json.extract! :id, :pokemon_id, :name, :price, :happiness
#   json.image_url asset_path(item.image_url)
# end
