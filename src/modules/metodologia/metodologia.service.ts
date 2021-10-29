import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Metodologia, MetodologiaDocument } from '../../entities/metodologia.entity';
import { Metodologia as MetodologiaModel } from '../../models/metodologia'

@Injectable()
export class MetodologiaService {

  constructor(@InjectModel(Metodologia.name) private metodologiaModel: Model<MetodologiaDocument>) {}


  buscarMetodologia() {
    return this.metodologiaModel.findOne();
  }

}
