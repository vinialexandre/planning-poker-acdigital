import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Historia, HistoriaSchema } from 'src/entities/historia.entity';
import { Sala, SalaSchema } from 'src/entities/sala.entity';
import { HistoriaService } from '../historia/historia.service';
import { SalaController } from './sala.controller';
import { SalaService } from './sala.service';
import { SalaGateway } from './sala.gateway';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Sala.name, schema: SalaSchema }]),
        MongooseModule.forFeature([{ name: Historia.name, schema: HistoriaSchema }])
    ],
    controllers: [SalaController],
    providers: [SalaService, HistoriaService, SalaGateway],
})
export class SalaModule {}