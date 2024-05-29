import { Request, Response } from "express";
import { TicketRepository } from "./ticket.repository";
import { TicketData } from "./entities/ticket.entity";
import { plainToClass } from "class-transformer";

export class TicketControllerImpl {
  constructor(private readonly ticketRepository: TicketRepository) {}

  async findMany(req: Request, res: Response) {
    const output = await this.ticketRepository.findMany();

    return res.status(200).send(output);
  }
  async findOneById(req: Request, res: Response) {
    const { id } = req.params;

    const output = await this.ticketRepository.findOneById(+id);

    return res.status(200).send(output);
  }

  async create(req: Request, res: Response) {
    const ticketDTO = plainToClass(TicketData, req.body, {
        excludeExtraneousValues: true,
      });

    const output = await this.ticketRepository.create(ticketDTO);

    res.status(201).send(ticketDTO);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;

    const ticket = new TicketData();

    ticket.tipo = req.body.tipo;
    ticket.motivo = req.body.motivo;
    ticket.descricao = req.body.descricao;
    ticket.dataAbertura = req.body.dataAbertura;
    ticket.prazo = req.body.prazo;
    ticket.status = req.body.status;

    const output = await this.ticketRepository.update(+id, ticket);

    return res.status(201).send(output);
  }
}
