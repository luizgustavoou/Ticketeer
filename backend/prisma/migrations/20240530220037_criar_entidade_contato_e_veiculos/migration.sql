/*
  Warnings:

  - Added the required column `veiculoId` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `identificador` to the `Veiculo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "contatoId" INTEGER,
ADD COLUMN     "veiculoId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Veiculo" ADD COLUMN     "identificador" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Contato" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "Contato_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_veiculoId_fkey" FOREIGN KEY ("veiculoId") REFERENCES "Veiculo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_contatoId_fkey" FOREIGN KEY ("contatoId") REFERENCES "Contato"("id") ON DELETE SET NULL ON UPDATE CASCADE;
