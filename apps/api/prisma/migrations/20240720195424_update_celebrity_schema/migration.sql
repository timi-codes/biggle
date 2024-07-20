/*
  Warnings:

  - You are about to drop the `Celeb` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "SocialPlatform" AS ENUM ('TWITTER', 'FACEBOOK', 'TWITCH', 'YOUTUBE', 'TIKTOK', 'INSTAGRAM', 'OTHER');

-- DropTable
DROP TABLE "Celeb";

-- CreateTable
CREATE TABLE "Celebrity" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "photo" TEXT,
    "platform" "SocialPlatform" NOT NULL,
    "numOfFollowers" INTEGER NOT NULL,
    "fee" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Celebrity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Celebrity_email_key" ON "Celebrity"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Celebrity_username_key" ON "Celebrity"("username");
