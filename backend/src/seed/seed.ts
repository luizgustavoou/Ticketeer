import { PrismaClient } from "@prisma/client";

import { STATIC_VEICULOS } from "./SYSTEM_Veiculos";
import { STATIC_CONTATOS } from "./SYSTEM_Contatos";
import { STATIC_MOTIVOS } from "./SYSTEM_Motivos";
import { STATIC_USUARIOS } from "./SYSTEM_Usuarios";
import { cryptService } from "../infra/services";

(async function () {
  const prisma = new PrismaClient();
  for (const motivo of STATIC_MOTIVOS) {
    const exists = await prisma.motivo.findFirst({
      where: {
        descricao: {
          equals: motivo.descricao,
        },
      },
    });

    if (!exists) {
      await prisma.motivo.create({
        data: motivo,
      });
    }
  }
})();

(async function () {
  const prisma = new PrismaClient();
  for (const veiculo of STATIC_VEICULOS) {
    const exists = await prisma.veiculo.findFirst({
      where: {
        identificador: {
          equals: veiculo.identificador,
        },
      },
    });

    if (!exists) {
      await prisma.veiculo.create({
        data: veiculo,
      });
    }
  }
})();

(async function () {
  const prisma = new PrismaClient();
  for (const contato of STATIC_CONTATOS) {
    const exists = await prisma.contato.findFirst({
      where: {
        descricao: {
          equals: contato.descricao,
        },
      },
    });

    if (!exists) {
      await prisma.contato.create({
        data: contato,
      });
    }
  }
})();

(async function () {
  const prisma = new PrismaClient();

  for (const usuario of STATIC_USUARIOS) {
    const hashPassword = await cryptService.generateHash(usuario.password);

    const exists = await prisma.usuario.findFirst({
      where: {
        email: {
          equals: usuario.email,
        },
      },
    });

    if (!exists) {
      await prisma.usuario.create({
        data: {
          ...usuario,
          password: hashPassword,
        },
      });
    }
  }
})();
