import { AbstractMongoDao } from "@daos/MockDb/abstract_mongo_dao";
import User, { IUser } from "@entities/User";

export interface IUserDao {
  getOne: (email: string) => Promise<IUser | null>;
  getAll: () => Promise<IUser[]>;
  add: (user: IUser) => Promise<void>;
  update: (user: IUser) => Promise<void>;
  delete: (id: number) => Promise<void>;
}

class UserDao extends AbstractMongoDao<IUser> implements IUserDao {
  protected collectionName: string = "user";

  /**
   * @param email
   */
  public async getOne(email: string): Promise<IUser | null> {
    // TODO
    return [] as any;
  }

  /**
   *
   */
  public async getAll(): Promise<IUser[]> {
    const result = (await super.findAll())
      .map((doc) => new User(doc))
      .toArray();
    console.info(`getting all users with result : ${result}`);
    return result;
  }

  /**
   *
   * @param user
   */
  public async add(user: IUser): Promise<void> {
    const result = await super.insertOne(user);
    console.info(`added user with result : ${result}`);
  }

  /**
   *
   * @param user
   */
  public async update(user: IUser): Promise<void> {
    // TODO
    return {} as any;
  }

  /**
   *
   * @param id
   */
  public async delete(id: number): Promise<void> {
    // TODO
    return {} as any;
  }
}

export default UserDao;
