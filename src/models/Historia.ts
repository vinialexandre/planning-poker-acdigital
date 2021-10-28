import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"
import { Voto } from "./voto"

export class Historia {

    @IsNotEmpty()
    @ApiProperty()
    nome: string

    @ApiProperty()
    votos: Voto[]

    @ApiProperty()
    emAberto: boolean

    @ApiProperty()
    dataHora: string
}