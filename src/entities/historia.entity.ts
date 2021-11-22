import { Voto } from "./voto.entity"
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HistoriaDocument = Historia & Document;

@Schema({collection: 'historia'})
export class Historia {
    @Prop()
    idSala?: string

    @Prop()
    nome: string

    @Prop()
    votos: Voto[]

    @Prop()
    emAberto: boolean
}

export const HistoriaSchema = SchemaFactory.createForClass(Historia);

HistoriaSchema.set('toJSON', {
    virtuals: true,
    versionKey:false,
});

HistoriaSchema.virtual('id')
.get(function() {
  return this._id.toHexString();
});