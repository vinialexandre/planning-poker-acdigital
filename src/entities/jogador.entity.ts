import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type JogadorDocument = Jogador & Document;

@Schema({collection: 'jogador'})
export class Jogador {
    @Prop()
    nome: string

    @Prop()
    email: string
}

export const JogadorSchema = SchemaFactory.createForClass(Jogador);

JogadorSchema.set('toJSON', {
    virtuals: true,
    versionKey:false,
});

JogadorSchema.virtual('id')
.get(function() {
  return this._id.toHexString();
});