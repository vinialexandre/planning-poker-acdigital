import { ApiProperty } from "@nestjs/swagger"
import { CartaModel } from "./carta"

export class MetodologiaModel {
    @ApiProperty()
    nome: string

    @ApiProperty()
    cartas: CartaModel[]
}