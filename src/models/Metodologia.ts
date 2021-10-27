import { ApiProperty } from "@nestjs/swagger"
import { Carta } from "./carta"

export class Metodologia {
    @ApiProperty()
    nome: string

    @ApiProperty()
    cartas: Carta[]
}