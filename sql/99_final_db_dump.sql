
USE home_db;


DROP TABLE IF EXISTS user_home_relationship;
DROP TABLE IF EXISTS home;
DROP TABLE IF EXISTS user;


CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);


CREATE TABLE home (
    id INT AUTO_INCREMENT PRIMARY KEY,
    street_address VARCHAR(255) NOT NULL,
    zip VARCHAR(10), 
    state VARCHAR(50),
    sqft FLOAT, 
    beds INT,
    baths INT,
    list_price FLOAT
);

CREATE TABLE user_home_relationship (
    user_id INT,
    home_id INT,
    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (home_id) REFERENCES home(id),
    PRIMARY KEY (user_id, home_id)
);

INSERT INTO user (username, email)
SELECT DISTINCT username, email 
FROM user_home
WHERE username IS NOT NULL AND username != ''
  AND email IS NOT NULL AND email != '';

INSERT INTO home (street_address, state, zip, sqft, beds, baths, list_price)
SELECT DISTINCT street_address, state, zip, sqft, beds, baths, list_price 
FROM user_home
WHERE street_address IS NOT NULL AND street_address != ''
  AND state IS NOT NULL AND state != ''  -- Ensure 'state' is not null or empty
  AND zip IS NOT NULL AND zip != ''
  AND sqft IS NOT NULL  -- Ensure 'sqft' is not null
  AND beds IS NOT NULL
  AND baths IS NOT NULL
  AND list_price IS NOT NULL;

INSERT INTO user_home_relationship (user_id, home_id)
SELECT u.id, h.id
FROM user_home uh
JOIN user u ON uh.username = u.username
JOIN home h ON uh.street_address = h.street_address AND uh.zip = h.zip;
