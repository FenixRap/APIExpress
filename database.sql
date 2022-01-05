create TABLE person(
id SERIAL PRIMARY KEY,
name VARCHAR(255),
surname VARCHAR(255)
);

CREATE TABLE Customers
(
    id SERIAL PRIMARY KEY,
    Age INT,
    FirstName VARCHAR(20) NOT NULL,
    LastName VARCHAR(20) NOT NULL,
    Phone VARCHAR(20) NOT NULL UNIQUE,
    email VARCHAR(50) NOT NULL UNIQUE,
    city VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE Orders
(
    id SERIAL PRIMARY KEY,
    CustomerId INTEGER,
    CreatedAt Date,
    FOREIGN KEY (CustomerId)  REFERENCES Customers (Id)
);

create TABLE product(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    discountPrice INTEGER,
    price INTEGER,
    img VARCHAR(255),
    imgSecond VARCHAR(255),
    imgThird VARCHAR(255),
    typeCatalog INTEGER,
    activeComponent1 VARCHAR(255),
    activeComponent2 VARCHAR(255),
    activeComponent3 VARCHAR(255),
    activeComponent4 VARCHAR(255),
    activeComponent5 VARCHAR(255),
    activeComponent6 VARCHAR(255),
    volume INTEGER,
    count INTEGER,
    sellCount INTEGER,
    barCode VARCHAR(255),
    engName VARCHAR(255),
    skinType VARCHAR(255),
    madeCountry VARCHAR(255),
    howToUse VARCHAR(255),
    description VARCHAR(1000),
    type VARCHAR(255),
    brand VARCHAR(255),
    rating INTEGER
)
create TABLE menu (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    page name VARCHAR(255)
)
create TABLE pages (
    id SERIAL PRIMARY KEY,
    alias json  NOT NULL,
    title json  NOT NULL
)


CREATE TABLE user_to_site (
                              id SERIAL PRIMARY KEY,
                              user_id INTEGER NOT NULL,
                              site_id INTEGER NOT NULL,
                              CONSTRAINT "FK_user_id" FOREIGN KEY ("user_id")
                                  REFERENCES "user" ("id"),
                              CONSTRAINT "FK_site_id" FOREIGN KEY ("site_id")
                                  REFERENCES "site" ("id"),
);

CREATE UNIQUE INDEX "UI_user_to_site_site_id_user_id"
  ON "user_to_site"
  USING btree

CREATE TABLE product_to_pages (
                              id SERIAL PRIMARY KEY,
                              product_id INTEGER NOT NULL,
                              pages_id INTEGER NOT NULL,
                              CONSTRAINT "FK_product_id" FOREIGN KEY ("product_id")
                                  REFERENCES "product" ("id"),
                              CONSTRAINT "FK_pages_id" FOREIGN KEY ("pages_id")
                                  REFERENCES "pages" ("id")
);

CREATE UNIQUE INDEX "UI_product_to_pages_pages_id_product_id"
  ON "product_to_pages"
  USING btree