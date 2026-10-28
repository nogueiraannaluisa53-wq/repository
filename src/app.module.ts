import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tutor } from './tutor/tutor.entity.js';
import { Pet } from './pet/pet.entity.js';
import { Raca } from './raça/raca.entity.js';
import { Especie } from './espécie/especie.entity.js';
import { Origem } from './origem/origemEspecie.entity.js';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345678',
      database: 'clinicaVet_db',
      entities: [Tutor, Pet, Raca, Especie, Origem],
      synchronize: true,
      logging: true,      
    }),
  ],
})
export class AppModule {}
