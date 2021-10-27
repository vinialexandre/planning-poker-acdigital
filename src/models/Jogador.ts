import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty } from "class-validator"

export class Jogador {
    @IsNotEmpty()
    @ApiProperty()
    nome: string

    @IsEmail()
    @ApiProperty()
    email: string
}