import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Metodologia, MetodologiaSchema } from 'src/entities/metodologia.entity';
import { MetodologiaController } from './metodologia.controller';
import { MetodologiaService } from './metodologia.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Metodologia.name, schema: MetodologiaSchema }])
    ],
    controllers: [MetodologiaController],
    providers: [MetodologiaService],
})
export class MetodologiaModule {}