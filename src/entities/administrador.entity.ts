import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AdministradorDocument = Administrador & Document;

@Schema({collection: 'administrador'})
export class Administrador {
    @Prop({
        type: String,
        required: true
    })
    nome: string

    @Prop({
        type: String,
        required: true
    })
    email: string
}


export const AdministradorSchema = SchemaFactory.createForClass(Administrador);

AdministradorSchema.set('toJSON', {
    virtuals: true,
    versionKey:false,
});

AdministradorSchema.virtual('id')
.get(function() {
  return this._id.toHexString();
});