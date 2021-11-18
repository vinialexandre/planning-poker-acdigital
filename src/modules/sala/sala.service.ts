import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Sala, SalaDocument } from '../../entities/sala.entity';
import { Sala as SalaModel } from '../../models/sala'

@Injectable()
export class SalaService {

  constructor(@InjectModel(Sala.name) private salaModel: Model<SalaDocument>) {}

  criar(sala: SalaModel): Promise<SalaModel> {
    const salaCriada = new this.salaModel(sala)
    return salaCriada.save();
  }

  buscarSalas(email: string) {
    return this.salaModel.find({ "administrador.email": email });
  }

  buscarPorId(id: string) {
    return this.salaModel.findById(id);
  }

  buscarHistoriasDaSala(id: string, aberta: 'true' | 'false') {
    // const emAberto = aberta.toLowerCase() == 'true'
    // return this.salaModel.find({ _id: id, historias:{ emAberto: emAberto }});
  }

  alterar(sala: SalaModel) {
    return this.salaModel.findByIdAndUpdate({
      _id: sala._id
    }, {
      $set: sala,
    }, {
      new: true
    })
  }

  remover(id: string) {
    return this.salaModel.deleteOne({ _id: id })
  }
}
