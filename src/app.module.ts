
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdministradorModule } from './modules/administrador/administrador.module';
import { MetodologiaModule } from './modules/metodologia/metodologia.module';
import { HistoriaModule } from './modules/historia/historia.module';
import { SalaModule } from './modules/sala/sala.module';
import { RouterModule } from '@nestjs/core/router';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://acdigital:4cdigit4l@cluster0.6l6ps.mongodb.net/planning-poker?retryWrites=true&w=majority'),
    AdministradorModule,
    SalaModule, 
    HistoriaModule,
    MetodologiaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
