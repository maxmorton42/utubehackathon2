i = 0
urls = ["https://www.youtube.com/watch?v=OTUIxtoHxNQ", "https://www.youtube.com/watch?v=EELBDtM3FGs", "https://www.youtube.com/watch?v=OC6sMfq2wq0&t=629s"]
3.times do
	user = User.create(
		email: "test#{i}@test.com",
		password: "password",
		password_confirmation:"password",
		name: Faker::Name.name,
		nickname: Faker::Games::LeagueOfLegends.champion
	)
	5.times do
		user.videos.create(
			title: Faker::Movies::LordOfTheRings.character,
			duration: rand(100..1000),
			genre: Faker::Music.genre,
			description: Faker::Movie.quote,
			trailer: urls.sample
		)
	end
	i+=1
end

10.times do
	Comment.create(
		body: Faker::Movie.quote,
		video_id: Video.all.sample.id,
		user_id: User.all.sample.id,
	)
end

puts "Database Seeded!"
