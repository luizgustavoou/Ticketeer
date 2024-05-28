/*
  Warnings:

  - Added the required column `usuarioId` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "usuarioId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
