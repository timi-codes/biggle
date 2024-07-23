/*
  Warnings:

  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CategoryToCelebrity" DROP CONSTRAINT "_CategoryToCelebrity_B_fkey";

-- DropForeignKey
ALTER TABLE "_CelebrityToTag" DROP CONSTRAINT "_CelebrityToTag_A_fkey";

-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "celebrities" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "displine" TEXT NOT NULL,
    "photo" TEXT,
    "platform" "SocialPlatform" NOT NULL,
    "numOfFollowers" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "hasBeneficiary" BOOLEAN NOT NULL,
    "repliesIn" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "celebrities_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "celebrities_username_key" ON "celebrities"("username");

-- AddForeignKey
ALTER TABLE "_CelebrityToTag" ADD CONSTRAINT "_CelebrityToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "celebrities"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToCelebrity" ADD CONSTRAINT "_CategoryToCelebrity_B_fkey" FOREIGN KEY ("B") REFERENCES "celebrities"("id") ON DELETE CASCADE ON UPDATE CASCADE;
