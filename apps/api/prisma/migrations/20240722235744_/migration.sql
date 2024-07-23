/*
  Warnings:

  - You are about to drop the column `displine` on the `celebrities` table. All the data in the column will be lost.
  - Added the required column `discpline` to the `celebrities` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "celebrities" DROP COLUMN "displine",
ADD COLUMN     "discpline" TEXT NOT NULL;
