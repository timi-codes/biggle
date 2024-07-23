/*
  Warnings:

  - You are about to drop the column `discpline` on the `celebrities` table. All the data in the column will be lost.
  - Added the required column `discipline` to the `celebrities` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "celebrities" DROP COLUMN "discpline",
ADD COLUMN     "discipline" TEXT NOT NULL;
