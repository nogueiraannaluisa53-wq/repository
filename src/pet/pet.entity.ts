import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';

@Entity('pet')
export class Pet{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({length: 100})
    nome!: string;

    @Column({type: 'date'})
    dataNascimento!: Date;

    @Column({length: 15})
    sexo!: string;

    @Column({type: 'decimal'})
    peso!: number;

    @Column({length: 10})
    cor!: string;

    @Column({default: false})
    castrado!: boolean;

    @Column({default: true})
    ativo!: true;
}