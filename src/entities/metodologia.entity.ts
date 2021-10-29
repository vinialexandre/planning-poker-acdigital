import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Carta } from "./carta.entity"

export type MetodologiaDocument = Metodologia & Document;

@Schema({collection: 'metodologia'})
export class Metodologia {
    @Prop()
    nome: string

    @Prop()
    cartas: Carta[]
}

export const MetodologiaSchema = SchemaFactory.createForClass(Metodologia);