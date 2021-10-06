import { Module } from '@nestjs/common';
import { AdministradorModule } from './modules/administrador/administrador.module';
import { HistoriaModule } from './modules/historia/historia.module';
import { SalaModule } from './modules/sala/sala.module';

@Module({
  imports: [AdministradorModule, SalaModule, HistoriaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
