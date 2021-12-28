import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Historia, HistoriaSchema } from 'src/entities/historia.entity';
import { HistoriaController } from './historia.controller';
import { HistoriaService } from './historia.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Historia.name, schema: HistoriaSchema }])
    ],
    controllers: [HistoriaController],
    providers: [HistoriaService],
})
export class HistoriaModule {}