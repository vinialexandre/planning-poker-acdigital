import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { HistoriaModel } from 'src/models/historia';
import { VotoModel } from 'src/models/voto';
import { Historia, HistoriaDocument } from '../../entities/historia.entity';

@Injectable()
export class HistoriaService {

  constructor(@InjectModel(Historia.name) private historiaModel: Model<HistoriaDocument>) {}

  buscarHistoriasdaSala(idSala: string, emAberto: boolean) {
    return this.historiaModel.find({ idSala: idSala, emAberto: emAberto  });
  }

  adicionarHistoria(historia: HistoriaModel): Promise<HistoriaModel> {
    const historiaCriada = new this.historiaModel(historia)
    return historiaCriada.save();
  }

  alterarHistoria(historia: HistoriaModel) {
    return this.historiaModel.findByIdAndUpdate({
      _id: historia.id
    }, {
      $set: historia,
    }, {
      new: true
    })
  }

  removerHistoria(id: string) {
    return this.historiaModel.deleteOne({ _id: id })
  }

  async adicionarVotoJogador(idHistoria: string, voto: VotoModel) {
    let historia: HistoriaModel = await this.historiaModel.findById({ _id: idHistoria })
    historia.votos.push(voto)

    return this.historiaModel.findByIdAndUpdate({
      _id: historia.id
    }, {
      $set: historia,
    }, {
      new: true
    })
  }


  async finalizarHistoria(idHistoria: string) {
    let historia: HistoriaModel = await this.historiaModel.findById({ _id: idHistoria })
    historia.emAberto = false
    
    return this.historiaModel.findByIdAndUpdate({
      _id: historia.id
    }, {
      $set: historia,
    }, {
      new: true
    })
  }

  async reiniciarVotacaoHistoria(idHistoria: string){
    let historia: HistoriaModel = await this.historiaModel.findById({ _id: idHistoria })
    historia.votos = []
    
    return this.historiaModel.findByIdAndUpdate({
      _id: historia.id
    }, {
      $set: historia,
    }, {
      new: true
    })
  }
}
