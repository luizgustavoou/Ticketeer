import { MotivoData, MotivoEntity } from "../tickets/entities/ticket.entity";
import { ContatosRepository } from "./contatos.repository";

export abstract class ContatosService {
  abstract findMany(): Promise<MotivoEntity[]>;
  abstract findOneById(id: number): Promise<MotivoEntity>;
  abstract create(data: MotivoData): Promise<MotivoEntity>;
  abstract update(id: number, data: Partial<MotivoData>): Promise<MotivoEntity>;
  abstract delete(id: number): Promise<MotivoEntity>;
}

export class ContatosServiceImpl implements ContatosService {
  constructor(private readonly contatosRepository: ContatosRepository) {}

  async findMany(): Promise<MotivoEntity[]> {
    const output = await this.contatosRepository.findMany();

    return output;
  }
  async findOneById(id: number): Promise<MotivoEntity> {
    const output = await this.contatosRepository.findOneById(id);

    return output;
  }
  async create(data: MotivoData): Promise<MotivoEntity> {
    const output = await this.contatosRepository.create(data);

    return output;
  }
  async update(id: number, data: Partial<MotivoData>): Promise<MotivoEntity> {
    const output = await this.contatosRepository.update(id, data);

    return output;
  }

  async delete(id: number): Promise<MotivoEntity> {
    const output = await this.contatosRepository.delete(id);

    return output;
  }
}
