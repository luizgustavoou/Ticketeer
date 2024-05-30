import { MotivoData, MotivoEntity } from "../tickets/entities/ticket.entity";
import { MotivosRepository } from "./motivos.repository";

export abstract class MotivosService {
  abstract findMany(): Promise<MotivoEntity[]>;
  abstract findOneById(id: number): Promise<MotivoEntity>;
  abstract create(data: MotivoData): Promise<MotivoEntity>;
  abstract update(id: number, data: Partial<MotivoData>): Promise<MotivoEntity>;
  abstract delete(id: number): Promise<MotivoEntity>;
}

export class MotivosServiceImpl implements MotivosService {
  constructor(private readonly motivosRepository: MotivosRepository) {}

  async findMany(): Promise<MotivoEntity[]> {
    const output = await this.motivosRepository.findMany();

    return output;
  }
  async findOneById(id: number): Promise<MotivoEntity> {
    const output = await this.motivosRepository.findOneById(id);

    return output;
  }
  async create(data: MotivoData): Promise<MotivoEntity> {
    const output = await this.motivosRepository.create(data);

    return output;
  }
  async update(id: number, data: Partial<MotivoData>): Promise<MotivoEntity> {
    const output = await this.motivosRepository.update(id, data);

    return output;
  }

  async delete(id: number): Promise<MotivoEntity> {
    const output = await this.motivosRepository.delete(id);

    return output;
  }
}
