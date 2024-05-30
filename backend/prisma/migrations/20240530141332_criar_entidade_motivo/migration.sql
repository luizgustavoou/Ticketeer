/*
  Warnings:

  - You are about to drop the column `motivo` on the `Ticket` table. All the data in the column will be lost.
  - Added the required column `motivoId` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "motivo",
ADD COLUMN     "motivoId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Motivo" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "Motivo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_motivoId_fkey" FOREIGN KEY ("motivoId") REFERENCES "Motivo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
