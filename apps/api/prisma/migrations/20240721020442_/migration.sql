/*
  Warnings:

  - You are about to drop the column `email` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `fee` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `users` table. All the data in the column will be lost.
  - Added the required column `displine` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hasBeneficiary` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `repliesIn` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "users_email_key";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "email",
DROP COLUMN "fee",
DROP COLUMN "password",
ADD COLUMN     "displine" TEXT NOT NULL,
ADD COLUMN     "hasBeneficiary" BOOLEAN NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "repliesIn" INTEGER NOT NULL;
