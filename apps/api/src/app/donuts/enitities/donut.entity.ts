import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'donuts' })
export class Donut {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  price: number;
}
