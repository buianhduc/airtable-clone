/*
  Warnings:

  - You are about to drop the column `ownerid` on the `Base` table. All the data in the column will be lost.
  - Added the required column `ownerId` to the `Base` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Base" DROP CONSTRAINT "Base_ownerid_fkey";

-- AlterTable
ALTER TABLE "Base" DROP COLUMN "ownerid",
ADD COLUMN     "ownerId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Base" ADD CONSTRAINT "Base_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
