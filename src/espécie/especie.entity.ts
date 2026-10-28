import{
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';

@Entity('especie')
export class Especie{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({length: 20})
    nomePopular!: string;

    @Column({length: 100})
    nomeCientifico!: string;

    @Column({type: 'text'})
    descricao!: string;

    @Column({default: false})
    domestica!: boolean;

    @Column({default: true})
    ativo!: boolean;
}