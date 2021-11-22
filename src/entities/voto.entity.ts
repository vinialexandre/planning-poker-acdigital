import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Historia } from './historia.entity';
import { Jogador } from './jogador.entity';
import { Carta } from "./carta.entity";

export type VotoDocument = Voto & Document;

@Schema()
export class Voto { 
    @Prop()
    carta: Carta

    @Prop()
    jogador: Jogador
}

export const VotoSchema = SchemaFactory.createForClass(Voto);

VotoSchema.set('toJSON', {
    virtuals: true,
    versionKey:false,
});

VotoSchema.virtual('id')
.get(function() {
  return this._id.toHexString();
});