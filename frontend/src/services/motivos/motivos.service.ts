import { IMotivosApi } from "@/apis/motivos/motivos.api";
import { IMotivoData, IMotivoEntity } from "@/entities/ITicket";

export interface IMotivosService {
  create(data: IMotivoData): Promise<IMotivoEntity>;
  update(id: number, data: IMotivoData): Promise<IMotivoEntity>;
  remove(id: number): Promise<IMotivoEntity>;
  findOneById(id: number): Promise<IMotivoEntity>;
  findMany(): Promise<IMotivoEntity[]>;
}

export class MotivosServiceImpl implements IMotivosService {
  constructor(private readonly motivosApi: IMotivosApi) {}

  async create(data: IMotivoData): Promise<IMotivoEntity> {
    const res = await this.motivosApi.create(data);

    return res;
  }

  async update(id: number, data: IMotivoData): Promise<IMotivoEntity> {
    const res = await this.motivosApi.update(id, data);

    return res;
  }

  async remove(id: number): Promise<IMotivoEntity> {
    const res = await this.motivosApi.remove(id);

    return res;
  }

  async findOneById(id: number): Promise<IMotivoEntity> {
    const res = await this.motivosApi.findOneById(id);

    return res;
  }

  async findMany(): Promise<IMotivoEntity[]> {
    const res = await this.motivosApi.findMany();

    return res;
  }
}
