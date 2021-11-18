import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Historia } from './historia.entity';
import { Administrador } from './administrador.entity';
import { Jogador } from './jogador.entity';

export type SalaDocument = Sala & Document;

@Schema({collection: 'sala'})
export class Sala {
    @Prop()
    nome: string

    @Prop()
    jogadores?: Jogador[]

    @Prop()
    administrador: Administrador

    @Prop()
    historias?: Historia[]
}

export const SalaSchema = SchemaFactory.createForClass(Sala);