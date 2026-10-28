import{
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';

@Entity('origem')
export class Origem{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({length: 20})
    continente!: string;

    @Column({length: 20})
    pais!: string;

    @Column({length: 20})
    regiao!: string;

    @Column({type: 'text'})
    descricao!: string;

    @Column({default: true})
    ativo!: boolean;
}