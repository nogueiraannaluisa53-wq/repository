import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';

@Entity('raça')
export class Raca{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({length: 20})
    nome!: string;

    @Column({length: 15})
    porte!: string;

    @Column({type: 'text'})
    descricao!: string;

    @Column({type: 'int'})
    expectativaVida!: number;

    @Column({default: true})
    ativo!: boolean;
}