/*
  Warnings:

  - You are about to drop the `UserAuth` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `login` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserAuth" DROP CONSTRAINT "UserAuth_usuarioId_fkey";

-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "login" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL;

-- DropTable
DROP TABLE "UserAuth";
