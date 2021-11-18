import { SalaService } from './../sala/sala.service';
import { Module } from '@nestjs/common';
import { AdministradorController } from './administrador.controller';
import { AdministradorService } from './administrador.service';
import { Administrador, AdministradorSchema } from '../../entities/administrador.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { Sala, SalaSchema } from 'src/entities/sala.entity';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Administrador.name, schema: AdministradorSchema }]),
        MongooseModule.forFeature([{ name: Sala.name, schema: SalaSchema }])
    ],
    controllers: [AdministradorController],
    providers: [AdministradorService, SalaService]
})
export class AdministradorModule {}
