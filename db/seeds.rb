# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

demo1 = User.create!({
  email: 'demo', 
  first_name: 'demo', 
  last_name: 'demo', 
  username: 'demo_user', 
  password: 'demodemo'
})

demo2 = User.create!({
  email: 'nick.fury@shield.com', 
  first_name: 'Nick', 
  last_name: 'Fury', 
  username: 'gdsnakes', 
  password: 'missingeye'
})

demo3 = User.create!({
  email: 'zagerus@hell.com', 
  first_name: 'Zagerus', 
  last_name: 'Hades', 
  username: 'prince_of_blood_zag', 
  password: 'gottagetouttahere'
})