import { validateOrReject } from "class-validator";
import { Response, Request, NextFunction } from "express";
import { plainToClass } from "class-transformer";
import { MotivoData } from "../../tickets/entities/ticket.entity";

export const createMotivoValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.body) {
      return res.status(400).send({ message: "Missing request body!" });
    }

    const motivoDTO = plainToClass(MotivoData, req.body, {
      excludeExtraneousValues: true,
    });

    await validateOrReject(motivoDTO);

    next();
  } catch (e: any) {
    const message = Object.values(e[0].constraints)[0];
    res.status(400).send({ message });
  }
};
