import { InsertOneWriteOpResult, MongoClient, Cursor } from "mongodb";

export interface MongoDaoData {}

export abstract class AbstractMongoDao<D = MongoDaoData> {
  private readonly mongoDbUrl: string = "mongodb://localhost:27017/";
  private readonly mongoDbName: string = "mongodb";
  protected abstract collectionName: string;

  protected async insertOne(
    data: MongoDaoData
  ): Promise<InsertOneWriteOpResult<any>> {
    const db = await MongoClient.connect(this.mongoDbUrl);
    const dbObject = db.db(this.mongoDbName);
    const result = await dbObject
      .collection(this.collectionName)
      .insertOne(data);
    await db.close();
    return result;
  }

  protected async findAll(): Promise<Cursor<any>> {
    const db = await MongoClient.connect(this.mongoDbUrl);
    const dbObject = db.db(this.mongoDbName);
    const result = await dbObject
      .collection(this.collectionName)
      .find();
    await db.close();
    return result;
  }
}
