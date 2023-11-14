/*
  Warnings:

  - You are about to drop the `_UserProjects` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `desc` on table `Project` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "_UserProjects" DROP CONSTRAINT "_UserProjects_A_fkey";

-- DropForeignKey
ALTER TABLE "_UserProjects" DROP CONSTRAINT "_UserProjects_B_fkey";

-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "desc" SET NOT NULL;

-- DropTable
DROP TABLE "_UserProjects";

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
