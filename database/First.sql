CREATE TABLE Users(
     id bigint NOT NULL PRIMARY KEY,
     user_first_name varchar(50) NOT NULL,
     user_middle_name varchar(50) NOT NULL,
     user_last_name varchar(50) NOT NULL,
     user_phone varchar(50) NOT NULL,
     user_email varchar(50) NOT NULL,
     user_password varchar(255) NOT NULL,
     user_age integer NOT NULL,
     user_type varchar(20) NOT NULL,
     user_role varchar(20) NOT NULL,
     percent varchar(3) NOT NULL,
     passport varchar(50) NOT NULL
);
CREATE TABLE Orders (
    id bigint NOT NULL PRIMARY KEY,
    users_id bigint NOT NULL,
    city varchar(255) NOT NULL,
    region varchar(255) NOT NULL,
    street varchar(255) NOT NULL,
    bathroom varchar(255) NOT NULL,
    room integer NOT NULL,
    number_flat varchar(10) NOT NULL,
    area float NOT NULL,
    posted_date date,
    status varchar(20) NOT NULL,
    price float NOT NULL
);

ALTER TABLE Orders
    ADD CONSTRAINT UsersId FOREIGN KEY(users_id) REFERENCES Users(id);