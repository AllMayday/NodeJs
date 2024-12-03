CREATE TABLE users(
    user_name VARCHAR(50),
    user_login VARCHAR(50),
    user_email VARCHAR(100),
    user_age int
);

INSERT INTO users
values('Mary', 'Mariiiiiie', 'Mary@gmail.com', 29)

SELECT * FROM users

UPDATE users
SET User_age = 35
where user_name = 'Mary'

--Updating and constructing database