import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AdministradorDocument = Administrador & Document;

@Schema()
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