
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
export class Administrador {
    @IsNotEmpty()
    @ApiProperty()
    nome: string

    @IsEmail()
    @ApiProperty()
    email: string
}
