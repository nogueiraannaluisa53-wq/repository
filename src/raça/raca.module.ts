import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Raca } from "./raca.entity.js";

@Module({
    imports: [
        TypeOrmModule.forFeature([Raca])
    ]
})
export class RacaModule{}