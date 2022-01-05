-- CreateTable
CREATE TABLE "UserModel" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "UserModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Menu" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "alias" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "seotext" TEXT NOT NULL,
    "metadescription" TEXT NOT NULL,
    "tag" TEXT NOT NULL,

    CONSTRAINT "Menu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pages" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "alias" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "seotext" TEXT NOT NULL,
    "metadescription" TEXT NOT NULL,
    "tag" TEXT NOT NULL,

    CONSTRAINT "Pages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Products" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "discountPrice" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "img" TEXT NOT NULL,
    "img2" TEXT NOT NULL,
    "img3" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "active1" TEXT NOT NULL,
    "active2" TEXT NOT NULL,
    "active3" TEXT NOT NULL,
    "active4" TEXT NOT NULL,
    "active5" TEXT NOT NULL,
    "active6" TEXT NOT NULL,
    "volume" TEXT NOT NULL,
    "count" INTEGER NOT NULL,
    "sellCount" INTEGER NOT NULL,
    "barCode" TEXT NOT NULL,
    "engName" TEXT NOT NULL,
    "skinType" TEXT NOT NULL,
    "madeCountry" TEXT NOT NULL,
    "howToUse" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Carts" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Carts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Orders" (
    "id" SERIAL NOT NULL,
    "Items" JSONB NOT NULL,
    "User" TEXT NOT NULL,
    "total" TEXT NOT NULL,
    "adress" JSONB NOT NULL,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("id")
);
