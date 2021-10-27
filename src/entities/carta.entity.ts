import { TipoDeCarta } from './enum/tipo.carta.enum';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type CartaDocument = Carta & Document;

@Schema()
export class Carta { 
    @Prop()
    tipo: TipoDeCarta

    @Prop()
    valor: string | number
}

export const CartaSchema = SchemaFactory.createForClass(Carta);