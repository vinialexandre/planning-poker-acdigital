import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"
import { VotoModel } from "./voto"

export class HistoriaModel {
    @ApiProperty()
    id?: string

    @ApiProperty()
    idSala?: string

    @IsNotEmpty()
    @ApiProperty()
    nome: string

    @ApiProperty()
    votos: VotoModel[]

    @ApiProperty()
    emAberto: boolean
}