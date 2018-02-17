# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

@names = ['Dan', 'Kat']
@i = 0

2.times do |player|
  Player.create(
    name: "#{@names[@i]}"
  )
  @i += 1
end

puts "Seeded"