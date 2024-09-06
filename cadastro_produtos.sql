create database dbProvaPhp;
use dbProvaPhp;
create table produtos(
	id int primary key auto_increment,
	name varchar(255) not null,
    price decimal(10,2) not null
);


insert into produtos (name, price) VALUES ('Notebook Lenovo', 2700);
insert into produtos (name, price) VALUES ('Iphone 15', 10000);