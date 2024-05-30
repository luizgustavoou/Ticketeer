import { validateOrReject } from "class-validator";
import { Response, Request, NextFunction } from "express";
import { InputTicketData } from "../entities/ticket.entity";
import { plainToInstance } from "class-transformer";

export const createTicketValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.body) {
      return res.status(400).send({ message: "Missing request body!" });
    }

    const ticketDTO = plainToInstance(InputTicketData, req.body, {
      excludeExtraneousValues: true,
    });

    await validateOrReject(ticketDTO);

    next();
  } catch (e: any) {
    const message = Object.values(e[0].constraints)[0];
    res.status(400).send({ message });
  }
};
