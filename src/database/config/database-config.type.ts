/**
 * 데이터베이스 설정값 타입
 *
 * @author Jason
 */
export interface IDatabaseConfig {
  type: 'mysql' | 'postgres' | 'mariadb' | 'sqlite';
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  synchronize: boolean;
}
