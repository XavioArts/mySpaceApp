# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


u1 = User.create(email: "x@test.com", password: 123456, name: "Jonny Test", username: "testes15q", )

u1.posts.create(content: "HI this is my first post", likes: 0)
u1.posts.create(content: "A Race in Space is Dangerous, Baby", likes: 0)
u1.posts.create(content: "Even vacuum cleaners fall in love, baby", likes: 0)

p u1

p Post.all.length