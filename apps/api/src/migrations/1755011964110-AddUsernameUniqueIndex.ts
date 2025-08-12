import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUsernameUniqueIndex1755011964110 implements MigrationInterface {
  name = 'AddUsernameUniqueIndex1755011964110';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // 添加用户名唯一索引
    await queryRunner.query(`
      CREATE UNIQUE INDEX IF NOT EXISTS "IDX_users_username" ON "users" ("username")
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // 删除用户名唯一索引
    await queryRunner.query(`
      DROP INDEX IF EXISTS "IDX_users_username"
    `);
  }
}
