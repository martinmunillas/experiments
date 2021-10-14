import {
  BaseEntity,
  Column,
  createConnection,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
class Test extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;
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
    entities: [Test],
  });
  console.log("Successfully connected to the database");

  const test = await Test.create({ name: "hello", id: 2 }).save();

  console.log(test);

  const a = await Test.create({ id: 2, name: "world" }).save();

  console.log(a);

  console.log(await Test.findOne(2));
})();
