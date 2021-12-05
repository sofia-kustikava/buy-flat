    CREATE TABLE Users (
    id bigint NOT NULL PRIMARY KEY,
    first_name varchar(50) NOT NULL,
    middle_name varchar(50) NOT NULL,
    last_name varchar(50) NOT NULL,
    phone varchar(50) NOT NULL,
    email varchar(50) NOT NULL,
    password varchar(255) NOT NULL,
    age integer NOT NULL,
    type varchar(20) NOT NULL,
    role varchar(20) NOT NULL
    );

    CREATE TABLE Realtor (
    id bigint NOT NULL PRIMARY KEY,
    users_id bigint NOT NULL,
    percent varchar(3) NOT NULL
    );

    ALTER TABLE Realtor
    ADD CONSTRAINT UsersId FOREIGN KEY(users_id) REFERENCES Users(id);

    CREATE TABLE Client (
    id bigint NOT NULL PRIMARY KEY,
    users_id bigint NOT NULL,
    passport varchar(50) NOT NULL
    );

    ALTER TABLE Client
    ADD CONSTRAINT UsersId FOREIGN KEY(users_id) REFERENCES Users(id);

    CREATE TABLE Flat (
    id bigint NOT NULL PRIMARY KEY,
    city varchar(10) NOT NULL,
    region varchar(10) NOT NULL,
    street varchar(10) NOT NULL,
    bathroom varchar(10) NOT NULL,
    room_num varchar(10) NOT NULL,
    number_flat varchar(10) NOT NULL,
    area float NOT NULL
    );

    CREATE TABLE Orders (
    id bigint NOT NULL PRIMARY KEY,
    realtor_id bigint NOT NULL,
    flat_id bigint NOT NULL,
    client_id bigint NOT NULL,
    posted_date date,
    status varchar(20) NOT NULL,
price float NOT NULL
);

ALTER TABLE Orders
    ADD CONSTRAINT RealtorId FOREIGN KEY(realtor_id) REFERENCES Realtor(id);

ALTER TABLE Orders
    ADD CONSTRAINT ClientId FOREIGN KEY(client_id) REFERENCES Client(id);

ALTER TABLE Orders
    ADD CONSTRAINT FlatId FOREIGN KEY(flat_id) REFERENCES Flat(id);