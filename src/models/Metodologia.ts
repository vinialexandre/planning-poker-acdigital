import { ApiProperty } from "@nestjs/swagger"
import { CartaModel } from "./Carta"

export class MetodologiaModel {
    @ApiProperty()
    id?: string
    
    @ApiProperty()
    nome: string

    @ApiProperty()
    cartas: CartaModel[]
}