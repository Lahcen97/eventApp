import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Event } from "./Event";
import { Favorite } from "./Favorite";
import { UserFollow } from "./UserFollow";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 255, unique: true })
  email: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  password: string;

  @Column({ type: "varchar", length: 50, nullable: true })
  oauth_provider: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  oauth_id: string;

  @Column({ type: "boolean", default: false })
  is_admin: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Event, (event) => event.user)
  events: Event[];

  @OneToMany(() => Favorite, (favorite) => favorite.user)
  favorites: Favorite[];

  @OneToMany(() => UserFollow, (userFollow) => userFollow.follower)
  following: UserFollow[];

  @OneToMany(() => UserFollow, (userFollow) => userFollow.following)
  followers: UserFollow[];
}
