import { Module } from '@nestjs/common';
import { AdministradorController } from './administrador.controller';
import { AdministradorService } from './administrador.service';
import { Administrador, AdministradorSchema } from '../../entities/administrador.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Administrador.name, schema: AdministradorSchema }])
    ],
    controllers: [AdministradorController],
    providers: [AdministradorService]
})
export class AdministradorModule {}
