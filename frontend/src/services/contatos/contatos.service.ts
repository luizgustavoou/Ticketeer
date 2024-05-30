import { IContatosApi } from "@/apis/contatos/contatos.api";
import { IContatoData, IContatoEntity } from "@/entities/IContato";

export interface IContatosService {
  create(data: IContatoData): Promise<IContatoEntity>;
  update(id: number, data: IContatoData): Promise<IContatoEntity>;
  remove(id: number): Promise<IContatoEntity>;
  findOneById(id: number): Promise<IContatoEntity>;
  findMany(): Promise<IContatoEntity[]>;
}

export class ContatosServiceImpl implements IContatosService {
  constructor(private readonly contatosApi: IContatosApi) {}

  async create(data: IContatoData): Promise<IContatoEntity> {
    const res = await this.contatosApi.create(data);

    return res;
  }

  async update(id: number, data: IContatoData): Promise<IContatoEntity> {
    const res = await this.contatosApi.update(id, data);

    return res;
  }

  async remove(id: number): Promise<IContatoEntity> {
    const res = await this.contatosApi.remove(id);

    return res;
  }

  async findOneById(id: number): Promise<IContatoEntity> {
    const res = await this.contatosApi.findOneById(id);

    return res;
  }

  async findMany(): Promise<IContatoEntity[]> {
    const res = await this.contatosApi.findMany();

    return res;
  }
}
