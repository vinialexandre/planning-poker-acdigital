import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Historia, HistoriaSchema } from 'src/entities/historia.entity';
import { HistoriaController } from './historia.controller';
import { HistoriaService } from './historia.service';
import { HistoriaGateway } from './historia.gateway';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Historia.name, schema: HistoriaSchema }])
    ],
    controllers: [HistoriaController],
    providers: [HistoriaService, HistoriaGateway],
})
export class HistoriaModule {}