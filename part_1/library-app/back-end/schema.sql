USE books_exam ; 

create table books {
    id int auto_increment not null , 
    title varchar(255), 
    author varchar(255), 
    pages int, 
    publisher varchar(255), 
    published_at timestamp
}