import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Administrador, AdministradorDocument } from '../../entities/administrador.entity';
import { AdministradorModel } from '../../models/Administrador'

@Injectable()
export class AdministradorService {

  constructor(@InjectModel(Administrador.name) private administradorModel: Model<AdministradorDocument>) {}

  criar(administrador: AdministradorModel): Promise<AdministradorDocument> {
    const user = new this.administradorModel(administrador)
    return user.save();
  }

  buscarTodos() {
    return this.administradorModel.find();
  }

  buscarUmAdministrador(email: string) {
    return this.administradorModel.findOne({ email: email });
  }

  alterar(id: string, administrador: AdministradorModel) {
    return this.administradorModel.findByIdAndUpdate({
      _id: id
    }, {
      $set: administrador,
    }, {
      new: true
    })
  }

  remover(id: string) {
    return this.administradorModel.deleteOne({ _id: id })
  }
}
