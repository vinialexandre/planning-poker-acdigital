import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { MetodologiaModel } from 'src/models/Metodologia';
import {
  Metodologia,
  MetodologiaDocument,
} from '../../entities/metodologia.entity';

@Injectable()
export class MetodologiaService {
  constructor(
    @InjectModel(Metodologia.name)
    private metodologiaModel: Model<MetodologiaDocument>,
  ) {}

  buscarMetodologia() {
    return this.metodologiaModel.find();
  }

  buscarMetodologiaPorId(id: string) {
    return this.metodologiaModel.findById(id);
  }

  alterarMetodologia(metodologia: MetodologiaModel) {
    return this.metodologiaModel.findByIdAndUpdate(
      {
        _id: metodologia.id,
      },
      {
        $set: metodologia,
      },
      {
        new: true,
      },
    );
  }

  adicionarMetodologia(metodologia: MetodologiaModel): Promise<Metodologia> {
    const medologiaCriada = new this.metodologiaModel(metodologia);
    return medologiaCriada.save();
  }

  remover(id: string) {
    return this.metodologiaModel.deleteOne({ _id: id });
  }
}
