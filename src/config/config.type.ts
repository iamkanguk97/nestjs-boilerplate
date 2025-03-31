/**
 * Total Config Category
 *
 * @author Jason
 */
export interface IConfig {
  database: Config.IDatabase;
}

export namespace Config {
  /**
   * Database Config Type
   *
   * @author Jason
   */
  export interface IDatabase {
    type: 'mysql' | 'postgres' | 'mariadb' | 'sqlite';
    url?: string;
    host?: string;
    port?: number;
    username?: string;
    password?: string;
    database?: string;
    synchronize?: boolean;
  }
}
