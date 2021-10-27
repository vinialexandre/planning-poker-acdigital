import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Sala, SalaSchema } from 'src/entities/sala.entity';
import { SalaController } from './sala.controller';
import { SalaService } from './sala.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Sala.name, schema: SalaSchema }])
    ],
    controllers: [SalaController],
    providers: [SalaService],
})
export class SalaModule {}