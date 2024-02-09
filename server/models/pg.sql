create database auth;

create table employees(
    id serial primary key,
    fname text,
    lname text
);

insert into employees(
    fname, 
    lname
) values(
    'Thatchin',
    'Kumar'
);

create table users(
    username text primary key,
    pswd text not null,
    refreshtoken varchar(1024) default '',
    fname text,
    lname text,
    mobile text

    
);

alter table users 
add refreshtoken varchar(1024);


