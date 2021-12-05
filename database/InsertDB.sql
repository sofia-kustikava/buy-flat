INSERT INTO Users(id, first_name, middle_name, last_name, phone, email, password, age, type, role)
VALUES (1, 'Admin' , 'Adminovich','Adminov','803478372' , 'admin@mail.com', '$2a$12$LpMv3MUynhPmn6SMH0ta7u.EtMC4k0TmhtMb2t3vcYFEHX.tOQuha', 34, 'REALTOR', 'ADMIN');
INSERT INTO Users (id, first_name, middle_name, last_name, phone, email, password, age, type, role)
VALUES (2, 'User' ,'Userovich' , 'Userov','80923783' , 'user@mail.com', '$2a$12$QAc1uUTub/AEkEUM24OcmuAfCHZuGobq9ZSwQxCIobXtW/pT0W3my', 23, 'CLIENT', 'USER');

INSERT INTO Client(id, users_id, passport) VALUES (1, 2, 'HB2393715');

INSERT INTO Realtor(id, users_id, percent) VALUES (1, 1, 3);

INSERT INTO Room(id, count_rooms) VALUES (1, 1);
INSERT INTO Room(id, count_rooms) VALUES (2, 2);
INSERT INTO Room(id, count_rooms) VALUES (3, 3);
INSERT INTO Room(id, count_rooms) VALUES (4, 4);

INSERT INTO bathroom(id, bathroom_type) VALUES (1, 'Separated');
INSERT INTO bathroom(id, bathroom_type) VALUES (2, 'Combined');

INSERT INTO city(id, city_name) VALUES (1, 'Homiel');
INSERT INTO city(id, city_name) VALUES (2, 'Minsk');

INSERT INTO region(id, city_id, region_name) VALUES (1, 1, 'Rechitskiy');
INSERT INTO region(id, city_id, region_name) VALUES (2, 1, 'Selmash');
INSERT INTO region(id, city_id, region_name) VALUES (3, 2, 'Lenina');
INSERT INTO region(id, city_id, region_name) VALUES (4, 2, 'Serebryanka');

INSERT INTO street(id, region_id, street_name) VALUES (1, 1, 'Kosarevo');
INSERT INTO street(id, region_id, street_name) VALUES (2, 1, 'Barykino');
INSERT INTO street(id, region_id, street_name) VALUES (3, 2, 'Kosmonavtov');
INSERT INTO street(id, region_id, street_name) VALUES (4, 2, 'Ozernaya');
INSERT INTO street(id, region_id, street_name) VALUES (5, 3, 'Karla Marks');
INSERT INTO street(id, region_id, street_name) VALUES (6, 3, 'Kalinina');
INSERT INTO street(id, region_id, street_name) VALUES (7, 4, 'Lobovskaya');
INSERT INTO street(id, region_id, street_name) VALUES (8, 4, 'Lermantova');

INSERT INTO flat(id, street_id, bathroom_id, room_id, number_flat, area)
VALUES (1, 1, 2, 2, '19a', 43);
INSERT INTO flat(id, street_id, bathroom_id, room_id, number_flat, area)
VALUES (2, 4, 1, 3, '23', 62);

INSERT INTO orders(id, realtor_id, flat_id, client_id, posted_date, status, price)
VALUES (1, 1, 1, null, '12-12-2021', 'ACTIVE', 200);
INSERT INTO orders(id, realtor_id, flat_id, client_id, posted_date, status, price)
VALUES (2, 1, 2, 1, '12-02-2021', 'CLOSED', 300);