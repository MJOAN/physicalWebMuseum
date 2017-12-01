INSERT INTO livingWorlds (name, title, description, created_date, medium, imgURL, beaconID) 
VALUES ('Van Gogh', 'Starry Night Over the Rhône', "Starry Night Over the Rhône is one of Vincent van Gogh paintings of Arles at nighttime. It was painted at a spot on the bank of the Rhône that was only a one or two-minute walk from the Yellow House on the Place Lamartine which Van Gogh was renting at the time. The night sky and the effects of light at night provided the subject for some of his more famous paintings, including Cafe Terrace at Night (painted earlier the same month) and the later canvas from Saint-Rémy, The Starry Night.
A sketch of the painting is included in a letter van Gogh sent to his friend Eugène Boch on October 2 1888. Starry Night Over the Rhône, which is now in the Musée d Orsay in Paris, was first exhibited in 1889 at Paris annual exhibition of the Société des Artistes Indépendants. It was shown together with van Gogh Irises, which was added by Vincent brother, Theo.",
'1888-09-01', 
"oil",
"images/starry-rhone.jpg",
"3!eeedededdeddedddedddeddddeddedee");


-- For reference, the table from schema.sql
--   id int NOT NULL AUTO_INCREMENT,
--     name varchar(255) NOT NULL,
--     title VARCHAR(100) NOT NULL,
--     description TEXT NOT NULL,
--     created_date VARCHAR (255) NOT NULL,
--     medium VARCHAR(20) NOT NULL,
--     imgURL VARCHAR(1000) NOT NULL,
--     beaconID varchar(1000) NOT NULL,
--     PRIMARY KEY (id)
-- );

-- INSERT INTO exhibits (name, title, description, created_date, medium, imgURL) VALUES ('Rembrandt', 'Self-Portrait with Beret and Turned-Up Collar', "In Self-Portrait with Beret and Turned-Up Collar Rembrandt is seated in a broadly painted fur cloak, his hands clasped in his lap. Light from the upper right fully illuminates the face, hollowing the form of the cheek, and allowing for the representation of blemishes on the right cheek and ear lobe. The picture is painted in a restrained range of browns and grays, enriched by a red shape that probably indicates the back of his chair, while another red area at the lower left corner of the canvas may be a tablecloth. The most luminous area, the artist's face, is framed by a large beret and the high collar that flatteringly hides his jowls. The skin of the face is modeled with thick, tactile pigment, painted with rich and varied colors suggesting both the artist's physical aging and the emotional effects of life experience.
-- At first Rembrandt painted himself wearing a light colored cap before opting for the black beret; since the original headdress was of a type that the artist included only in self-portraits where he is seen at the easel, it is possible that he initially intended for this painting to refer directly to his trade.", '1659', "oil on canvas", "https://upload.wikimedia.org/wikipedia/commons/b/bd/Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg");