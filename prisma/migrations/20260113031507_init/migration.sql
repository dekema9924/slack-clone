/*
  Warnings:

  - You are about to drop the column `DisplayName` on the `user` table. All the data in the column will be lost.
  - Added the required column `DateOfBirth` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "DisplayName",
ADD COLUMN     "DateOfBirth" TEXT NOT NULL,
ADD COLUMN     "displayName" TEXT;
