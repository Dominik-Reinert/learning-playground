CREATE TABLE newsletter_subscription (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    hash_id VARCHAR(32) NOT NULL DEFAULT 0,
    email VARCHAR(500), 
    verified BOOLEAN, 
    creation_date TIMESTAMP NOT NULL DEFAULT current_timestamp
);

CREATE TRIGGER generate_hash_id 
    BEFORE INSERT 
    ON `newsletter_subscriptions` FOR EACH ROW 
    SET NEW.hash_id = MD5(CONCAT(NEW.email, current_timestamp));