CREATE TABLE Users (
    id bigint NOT NULL UNIQUE PRIMARY KEY,
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
    id bigint NOT NULL UNIQUE PRIMARY KEY,
    users_id bigint NOT NULL,
    percent float NOT NULL
);

ALTER TABLE Realtor
    ADD CONSTRAINT UsersId FOREIGN KEY(users_id) REFERENCES Users(id);

CREATE TABLE Client (
    id bigint NOT NULL UNIQUE PRIMARY KEY,
    users_id bigint NOT NULL,
    passport varchar(50) NOT NULL
);

ALTER TABLE Client
    ADD CONSTRAINT UsersId FOREIGN KEY(users_id) REFERENCES Users(id);

CREATE TABLE City (
    id bigint NOT NULL UNIQUE PRIMARY KEY,
    city_name varchar(25) NOT NULL
);

CREATE TABLE Region (
    id bigint NOT NULL UNIQUE PRIMARY KEY,
    city_id bigint NOT NULL,
    region_name varchar(25) NOT NULL
);

ALTER TABLE Region
    ADD CONSTRAINT CityId FOREIGN KEY(city_id) REFERENCES City(id);

CREATE TABLE Street (
    id bigint NOT NULL UNIQUE PRIMARY KEY,
    region_id bigint NOT NULL,
    street_name varchar(25) NOT NULL
);

ALTER TABLE Street
    ADD CONSTRAINT RegionId FOREIGN KEY(region_id) REFERENCES Region(id);

CREATE TABLE Bathroom (
    id bigint NOT NULL UNIQUE PRIMARY KEY,
    bathroom_type varchar(25) NOT NULL
);

CREATE TABLE Room (
    id bigint NOT NULL UNIQUE PRIMARY KEY,
    count_rooms integer NOT NULL
);

CREATE TABLE Flat (
      id bigint NOT NULL UNIQUE PRIMARY KEY,
      street_id bigint NOT NULL,
      bathroom_id bigint NOT NULL,
      room_id bigint NOT NULL,
      number_flat varchar(10) NOT NULL,
      area float NOT NULL
);

ALTER TABLE Flat
    ADD CONSTRAINT StreetId FOREIGN KEY(street_id) REFERENCES Street(id);

ALTER TABLE Flat
    ADD CONSTRAINT BathroomId FOREIGN KEY(bathroom_id) REFERENCES Bathroom(id);

ALTER TABLE Flat
    ADD CONSTRAINT RoomId FOREIGN KEY(room_id) REFERENCES Room(id);

CREATE TABLE Orders (
    id bigint NOT NULL UNIQUE PRIMARY KEY,
    realtor_id bigint NOT NULL,
    flat_id bigint NOT NULL,
    client_id bigint,
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