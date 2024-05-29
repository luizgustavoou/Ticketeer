/*
  Warnings:

  - Added the required column `role` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'ATENDENTE');

-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "role" "Role" NOT NULL;
