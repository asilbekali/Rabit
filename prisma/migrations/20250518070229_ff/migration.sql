/*
  Warnings:

  - You are about to drop the `tavar` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "tavar";

-- CreateTable
CREATE TABLE "product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);
