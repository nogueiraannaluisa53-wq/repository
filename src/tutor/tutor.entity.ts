import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';

@Entity('tutor')
export class Tutor{
    @PrimaryGeneratedColumn()
    id!: number;
    
    @Column({length: 100})
    nome!: string;

    @Column({length: 15, unique: true})
    cpf!: string;

    @Column({length: 20})
    email!: string;

    @Column({type: 'int'})
    telefone!: number;

    @Column({length: 100})
    endereco!: string;

    @Column({default: true})
    ativo!: boolean;
}