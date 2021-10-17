import {
  BaseEntity,
  Column,
  createConnection,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
class TestParent extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @OneToOne(() => TestChild, (child) => child.parent)
  @JoinColumn()
  child!: TestChild;
}

@Entity()
class TestChild extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @OneToOne(() => TestParent, (parent) => parent.child)
  parent!: TestParent;
}

(async (): Promise<void> => {
  await createConnection({
    username: "root",
    password: "root",
    database: "test",
    host: "localhost",
    port: 3306,
    type: "mysql",
    logging: true,
    synchronize: true,
    entities: [TestChild, TestParent],
  });
  console.log("Successfully connected to the database");

  const test = await TestParent.create({
    name: "hello",
    id: 34,
    child: {
      id: 34,
      name: "asdf",
    },
  }).save();

  console.log(test);
})();
