import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Sala, SalaDocument } from '../../entities/sala.entity';
import { Sala as SalaModel} from '../../models/sala'

@Injectable()
export class SalaService {

  constructor(@InjectModel(Sala.name) private salaModel: Model<SalaDocument>) {}

  criar(sala: SalaModel): Promise<SalaModel> {
    const user = new this.salaModel(sala)
    return user.save();
  }

  buscarTodos() {
    return this.salaModel.find();
  }

  buscarUmaSala(email: string) {
    return this.salaModel.findOne({ email: email });
  }

  buscarPorId(id: string) {
    return this.salaModel.findById(id);
  }

  alterar(id: string, sala: SalaModel) {
    return this.salaModel.findByIdAndUpdate({
      _id: id
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
