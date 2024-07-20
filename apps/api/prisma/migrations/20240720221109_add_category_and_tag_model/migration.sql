/*
  Warnings:

  - You are about to drop the `Celebrity` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Celebrity";

-- CreateTable
CREATE TABLE "users" (
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

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tags" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CelebrityToTag" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CategoryToCelebrity" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "categories_name_key" ON "categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "tags_name_key" ON "tags"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_CelebrityToTag_AB_unique" ON "_CelebrityToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_CelebrityToTag_B_index" ON "_CelebrityToTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToCelebrity_AB_unique" ON "_CategoryToCelebrity"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToCelebrity_B_index" ON "_CategoryToCelebrity"("B");

-- AddForeignKey
ALTER TABLE "_CelebrityToTag" ADD CONSTRAINT "_CelebrityToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CelebrityToTag" ADD CONSTRAINT "_CelebrityToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToCelebrity" ADD CONSTRAINT "_CategoryToCelebrity_A_fkey" FOREIGN KEY ("A") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToCelebrity" ADD CONSTRAINT "_CategoryToCelebrity_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
