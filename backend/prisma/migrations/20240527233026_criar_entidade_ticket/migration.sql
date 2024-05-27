/*
  Warnings:

  - You are about to drop the column `userId` on the `UserAuth` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[usuarioId]` on the table `UserAuth` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `login` to the `UserAuth` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuarioId` to the `UserAuth` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "StatusTicket" AS ENUM ('PARADO', 'PROGRESSO', 'CONCLUIDO');

-- CreateEnum
CREATE TYPE "TipoTicket" AS ENUM ('OPERACIONAL', 'SUPORTE', 'RELACIONAMENTO', 'VENDAS');

-- DropForeignKey
ALTER TABLE "UserAuth" DROP CONSTRAINT "UserAuth_userId_fkey";

-- DropIndex
DROP INDEX "UserAuth_userId_key";

-- AlterTable
ALTER TABLE "UserAuth" DROP COLUMN "userId",
ADD COLUMN     "login" TEXT NOT NULL,
ADD COLUMN     "usuarioId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ticket" (
    "id" SERIAL NOT NULL,
    "tipo" "TipoTicket" NOT NULL,
    "motivo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "dataAbertura" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "prazo" TIMESTAMP(3) NOT NULL,
    "status" "StatusTicket" NOT NULL DEFAULT 'PARADO',

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Veiculo" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Veiculo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserAuth_usuarioId_key" ON "UserAuth"("usuarioId");

-- AddForeignKey
ALTER TABLE "UserAuth" ADD CONSTRAINT "UserAuth_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
