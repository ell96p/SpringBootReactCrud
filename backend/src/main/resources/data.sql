DROP TABLE IF EXISTS recipes;

CREATE TABLE recipes (
                              id INT AUTO_INCREMENT  PRIMARY KEY,
                              description VARCHAR(250) NOT NULL,
                              image VARCHAR(250) NOT NULL,
                              name VARCHAR(250) NOT NULL,
                              prepare_length VARCHAR(250) NOT NULL,
                              recipe VARCHAR(250) NOT NULL
);

INSERT INTO recipes (description, image, name, prepare_length, recipe) VALUES
('A pancake is a breakfast dish, a flat cake that is made by pouring batter into a hot pan and frying it on both sides.', 'https://as1.ftcdn.net/v2/jpg/02/85/94/76/1000_F_285947693_7SuXmCp3o5D6fA5WymdNL73bGTNFgCie.jpg',
   'Pancakes','15min','1 cup all-purpose flour, (spooned and leveled)
2 tablespoons sugar.
2 teaspoons baking powder.
1/2 teaspoon salt.
1 cup milk.
2 tablespoons unsalted butter, melted, or vegetable oil.
1 large egg.
1 tablespoon vegetable oil.')