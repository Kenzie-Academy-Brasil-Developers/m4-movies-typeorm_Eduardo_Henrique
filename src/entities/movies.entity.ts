import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Movie {
  @Column()
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: "varchar", length: 50, unique: true })
  name: string;
  @Column({ type: "text", nullable: true })
  description?: string | null | undefined ;
  @Column({ type: "integer" })
  duration: number;
  @Column({ type: "integer" })
  price: number;
}

export default Movie;
