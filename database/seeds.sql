INSERT INTO artists (artist id, name) 
VALUES ('1', 'Abbot Kinney');

INSERT INTO artists (artist id, name) 
VALUES ('2', 'Patrick Marston');


INSERT INTO artists (artist id, name) 
VALUES ('2', 'Van Gogh');


INSERT INTO artworks (artist id, artwork id, title, description, created_date, medium, feedback, imgURL, beaconID) 
VALUES ('1', '1', 'The Mural', 'When Google asked local artists to submit ideas for a Venice Beach themed mural, Patrick Marston, a Venice artist, eagerly took on the challenge.  Patrick wondered what it was like for one to have dreams become reality over a hundred years ago when the telephone, radio, airplane, typewriter and even the basketball were just being invented.  This mural, Abbot’s Dream, depicts Abbot Kinney floating in a metaphorical gondola. Intermingled with the many inventions of his time, visions of early Venice and the symbols of what Venice Beach would come to mean through the years create a tapestry of past and present quintessential Venice', 
	'2017-12-01', 'oil', 'beautiful work!', 'images/starry-rhone.jpg', 'beacon2');

INSERT INTO artworks (artist id, artwork id, title, description, created_date, medium, feedback, imgURL, beaconID) 
VALUES ('2', '2', 'Abbot’s Dream', 'In 1898, a coin toss would change the course of Abbot Kinney and what became known as the Venice of America. At 16 years old, Abott Kinney went on a walking tour of Venice and the Italian Riviera, leaving a significant lasting impression. In 1880 Kinney came to San Francisco and purchased land nearby and named it Kinneloa. In 1886, he built a summer home for he and his wife in Santa Monica. Kinney partnered with Francis Ryan and bought controlling interest in the Pacific Ocean Casino and a tract of land 1.5 miles long.  They built a pier, golf course, horse-racing track, boardwalk and other resort amenities.  Later Ryan died and his widow sold their half of interest to another group of men. With a flip of a coin, Kinney won the marshy southern half to build his “Venice of America.” Kinney’s dream was to cater to the beach-goers and summer holiday guests who frequented the communitys many amusement attractions. Venice came to be known as the Coney Island of the Pacific. Visitors were dazzled by the system of canals complete with gondolas and gondoliers brought in from Venice, Italy. There were ornate Venetian-style businesses and a full-sized amusement pier, and a miniature steam railroad ran on a 21⁄2-miles of tracks around the entire park. Eventually in 1911, Kinney changed the city’s name from Ocean Park to Venice', 
	'1888-09-01', 'oil', 'amazing work!', 'images/starry-rhone.jpg', 'beacon3');


INSERT INTO artworks (artist id, artwork id, title, description, created_date, medium, feedback, imgURL, beaconID) 
VALUES ('3', '3', "Starry Night Over the Rhône is one of Vincent van Gogh paintings of Arles at nighttime. It was painted at a spot on the bank of the Rhône that was only a one or two-minute walk from the Yellow House on the Place Lamartine which Van Gogh was renting at the time. The night sky and the effects of light at night provided the subject for some of his more famous paintings, including Cafe Terrace at Night (painted earlier the same month) and the later canvas from Saint-Rémy, The Starry Night. A sketch of the painting is included in a letter van Gogh sent to his friend Eugène Boch on October 2 1888. Starry Night Over the Rhône, which is now in the Musée d Orsay in Paris, was first exhibited in 1889 at Paris annual exhibition of the Société des Artistes Indépendants. It was shown together with van Gogh Irises, which was added by Vincent brother, Theo.", 
	'1888-09-01', "oil", "Hi! I'd love to buy an artwork!", "images/starry-rhone.jpg", "3!eeedededdeddedddedddeddddeddedee");

INSERT INTO feedback (artwork id, created_date, feedback) 
VALUES ('1', '1', 'Great work!');


INSERT INTO artworks (title, description, created_date, medium, feedback, imgURL, beaconID 
SELECT artist_id FROM artists WHERE artist_id=1 
('The Mural', 'When Google asked local artists to submit ideas for a Venice Beach themed mural, Patrick Marston, a Venice artist, eagerly took on the challenge.  Patrick wondered what it was like for one to have dreams become reality over a hundred years ago when the telephone, radio, airplane, typewriter and even the basketball were just being invented.  This mural, Abbot’s Dream, depicts Abbot Kinney floating in a metaphorical gondola. Intermingled with the many inventions of his time, visions of early Venice and the symbols of what Venice Beach would come to mean through the years create a tapestry of past and present quintessential Venice', 
'2017-12-01', 'oil', 'beautiful work!', 'images/starry-rhone.jpg', 'beacon2');
