import {
  BaseEntity,
  Column,
  createConnection,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
class TestParent extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @OneToMany(() => TestChild, (child) => child.parent, { eager: true })
  @JoinColumn()
  childs!: TestChild[];
}

@Entity()
class TestChild extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @ManyToOne(() => TestParent, (parent) => parent.childs)
  parent!: TestParent;
}

(async (): Promise<void> => {
  const conn = await createConnection({
    username: "root",
    password: "root",
    database: "test",
    host: "localhost",
    port: 3306,
    dropSchema: true,
    type: "mysql",
    logging: true,
    synchronize: true,
    entities: [TestChild, TestParent],
  });
  console.log("Successfully connected to the database");

  await TestParent.create({
    name: "hello",
    id: 34,
  }).save();

  console.log(await TestParent.findOne(34));

  conn.close();
})();
