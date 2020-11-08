import { readFileSync } from "fs";
import * as mysql from "mysql";
import { pathToFileURL } from "url";

export interface DaoData {}

export abstract class AbstractDao<D = DaoData> {
  private readonly user: string;
  private readonly password: string;
  private readonly database: string = "CV";
  protected abstract readonly tableName: string;

  constructor() {
    const auth = JSON.parse(
      readFileSync(pathToFileURL("creds/mysql.creds.json"), "utf-8")
    );
    this.user = auth.user;
    this.password = auth.password;
  }

  private createConnection(): mysql.Connection {
    return mysql.createConnection({
      host: "localhost",
      user: this.user,
      password: this.password,
      database: this.database,
    });
  }

  protected async insertOne(data: D): Promise<mysql.OkPacket> {
    const connection: mysql.Connection = this.createConnection();
    return new Promise((res, rej) => {
      connection.query(
        `INSERT INTO ${this.tableName} (${Object.keys(data).join(
          ", "
        )}) VALUES (${Object.values(data)
          .map((e) =>
            [false, true].includes(e) ? (e === true ? 1 : 0) : `'${e}'`
          )
          .join(", ")})`,
        (err, rows) => {
          if (err) {
            rej(err);
          }
          res(rows);
        }
      );
    });
  }

  protected async findAll(): Promise<D[]> {
    const connection: mysql.Connection = this.createConnection();

    return new Promise((res, rej) => {
      connection.query(`SELECT * FROM ${this.tableName}`, (err, rows) => {
        if (err) {
          connection.end();
          rej(err);
        }
        connection.end();
        res(rows as D[]);
      });
    });
  }

  protected async find(id: string): Promise<D> {
    return undefined as any;
  }

  protected async findByAnd(data: D): Promise<any[]> {
    const connection: mysql.Connection = this.createConnection();
    return new Promise((res, rej) => {
      connection.query(
        `SELECT * FROM ${this.tableName} WHERE${Object.keys(data).map(e => ` ${e} = ? ` ).join('AND')}`,
        Object.values(data),
        (err, rows) => {
          if (err) {
            rej(err);
          }
          res(rows);
        }
      );
    });
  }
  
  protected async findByOr(data: D): Promise<any[]> {
    const connection: mysql.Connection = this.createConnection();
    return new Promise((res, rej) => {
      connection.query(
        `SELECT * FROM ${this.tableName} WHERE${Object.keys(data).map(e => ` ${e} = ? ` ).concat('OR')}`,
        Object.values(data),
        (err, rows) => {
          if (err) {
            rej(err);
          }
          res(rows);
        }
      );
    });
  }

  protected async updateOne(id: string, toUpdate: D): Promise<void> {
    return undefined;
  }
}
