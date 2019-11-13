DROP DATABASE IF EXISTS farmazon;

CREATE DATABASE farmazon;

\c farmazon;

CREATE TABLE pd (
  id SERIAL PRIMARY KEY,
  title varchar,
  seller varchar,
  stars int,
  ratings int,
  prime boolean,
  options text[],
  prices text[],
  description text
);