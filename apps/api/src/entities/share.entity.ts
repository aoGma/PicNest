import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  Index,
} from 'typeorm';
import { User } from './user.entity';
import { Image } from './image.entity';

export enum ShareType {
  PUBLIC = 'public',
  PRIVATE = 'private',
  EXPIRES = 'expires',
}

@Entity('shares')
export class Share {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  @Index()
  shortCode: string;

  @Column({
    type: 'enum',
    enum: ShareType,
    default: ShareType.PUBLIC,
  })
  type: ShareType;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  expiresAt: Date;

  @Column({ default: 0 })
  viewCount: number;

  @Column({ default: true })
  isActive: boolean;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  user: User;

  @Column()
  userId: string;

  @ManyToOne(() => Image, (image) => image.shares, { onDelete: 'CASCADE' })
  image: Image;

  @Column()
  imageId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
