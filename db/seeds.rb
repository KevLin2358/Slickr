# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
demo1 = User.create!({
  email: 'abcdefg', 
  first_name: 'abcdefg', 
  last_name: 'abcdefg', 
  username: 'abcdefg', 
  password: 'abcdefg'
})

demo2 = User.create!({
  email: '123456', 
  first_name: '123456', 
  last_name: '123456', 
  username: '123456', 
  password: '123456'
})

demo3 = User.create!({
  email: 'qewprui', 
  first_name: 'qewprui', 
  last_name: 'qewprui', 
  username: 'qewprui', 
  password: 'qewprui'
})

testPhoto1 = Photo.create!({
  uploader_id: 1,
  title: 'test photo title',
  description: 'test photo description'
})

testPhoto2 = Photo.create!({
  uploader_id: 2,
  title: 'adlsk;fhjakls;dfj',
  description: 'uotuuw'
})

testPhoto3 = Photo.create!({
  uploader_id: 3,
  title: '890q3457wh6w4',
  description: '2305uyhtosgt'
})