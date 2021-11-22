import { ApiProperty } from "@nestjs/swagger"
import { CartaModel } from "./carta"

export class MetodologiaModel {
    @ApiProperty()
    id?: string
    
    @ApiProperty()
    nome: string

    @ApiProperty()
    cartas: CartaModel[]
}