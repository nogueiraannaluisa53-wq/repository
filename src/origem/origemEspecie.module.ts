import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Origem } from "./origemEspecie.entity.js";

@Module({
    imports: [
        TypeOrmModule.forFeature([Origem])
    ]
})

export class OrigemModule{}