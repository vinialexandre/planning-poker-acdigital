import { Module } from '@nestjs/common';
import { AdministradorController } from './administrador.controller';
import { AdministradorService } from './administrador.service';

@Module({
    imports: [],
    controllers: [AdministradorController],
    providers: [AdministradorService]
})
export class AdministradorModule {}
