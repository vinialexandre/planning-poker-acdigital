import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { JogadorModel } from 'src/models/Jogador';
import { Sala, SalaDocument } from '../../entities/sala.entity';
import { SalaModel } from '../../models/Sala'

@Injectable()
export class SalaService {

  constructor(@InjectModel(Sala.name) private salaModel: Model<SalaDocument>) {}

  adicionarSala(sala: SalaModel): Promise<SalaModel> {
    const salaCriada = new this.salaModel(sala)
    return salaCriada.save();
  }

  async buscarSalas(email: string): Promise<SalaModel[]> {
    return await this.salaModel.find({ "administrador.email": email }).sort({ field: 'desc', test: -1 });
  }

  buscarPorId(id: string) {
    return this.salaModel.findById(id);
  }

  alterarSala(sala: SalaModel) {
    return this.salaModel.findByIdAndUpdate({
      _id: sala.id
    }, {
      $set: sala,
    }, {
      new: true
    })
  }

  removerSala(id: string) {
    return this.salaModel.deleteOne({ _id: id })
  }

  async adicionarJogador(id: string, jogador: JogadorModel) {
    let sala: SalaModel = await this.salaModel.findById(id)
    sala.jogadores.push(jogador)

    return this.salaModel.findByIdAndUpdate({
      _id: sala.id
    }, {
      $set: sala ,
    }, {
      new: true
    })
  }

}
