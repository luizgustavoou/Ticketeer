import { Request, Response } from "express";
import { TicketData } from "./entities/ticket.entity";
import { plainToClass } from "class-transformer";
import { TicketService } from "./ticket.service";

export class TicketControllerImpl {
  constructor(private readonly ticketService: TicketService) {}

  async findMany(req: Request, res: Response) {
    const output = await this.ticketService.findMany();

    return res.status(200).send(output);
  }
  async findOneById(req: Request, res: Response) {
    const { id } = req.params;

    const output = await this.ticketService.findOneById(+id);

    return res.status(200).send(output);
  }

  async create(req: Request, res: Response) {
    const ticketDTO = plainToClass(TicketData, req.body, {
      excludeExtraneousValues: true,
    });

    const output = await this.ticketService.create(ticketDTO);

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

    const output = await this.ticketService.update(+id, ticket);

    return res.status(201).send(output);
  }
}
