import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialMigration1755010660370 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // 创建用户表
    await queryRunner.query(`
      DO $$ BEGIN
        CREATE TYPE "public"."user_role_enum" AS ENUM('user', 'admin');
      EXCEPTION
        WHEN duplicate_object THEN null;
      END $$;
    `);

    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS "users" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "email" character varying NOT NULL,
        "password" character varying NOT NULL,
        "username" character varying,
        "avatar" character varying,
        "role" "public"."user_role_enum" NOT NULL DEFAULT 'user',
        "isEmailVerified" boolean NOT NULL DEFAULT false,
        "isActive" boolean NOT NULL DEFAULT true,
        "storageUsed" bigint NOT NULL DEFAULT '0',
        "storageLimit" bigint NOT NULL DEFAULT '10737418240',
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"),
        CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")
      )
    `);

    await queryRunner.query(`
      CREATE INDEX "IDX_97672ac88f789774dd47f7c8be3" ON "users" ("email")
    `);

    // 创建图片表
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS "images" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "filename" character varying NOT NULL,
        "originalName" character varying NOT NULL,
        "mimeType" character varying NOT NULL,
        "size" bigint NOT NULL,
        "path" character varying NOT NULL,
        "thumbnailPath" character varying,
        "compressedPath" character varying,
        "width" integer,
        "height" integer,
        "isPublic" boolean NOT NULL DEFAULT false,
        "isVirusScanned" boolean NOT NULL DEFAULT false,
        "isVirusFree" boolean NOT NULL DEFAULT true,
        "description" character varying,
        "tags" text,
        "userId" uuid NOT NULL,
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "PK_1fe148074c6a1a91b63cb9eeec6" PRIMARY KEY ("id")
      )
    `);

    // 创建分享类型枚举
    await queryRunner.query(`
      DO $$ BEGIN
        CREATE TYPE "public"."share_type_enum" AS ENUM('public', 'private', 'expires');
      EXCEPTION
        WHEN duplicate_object THEN null;
      END $$;
    `);

    // 创建分享表
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS "shares" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "shortCode" character varying NOT NULL,
        "type" "public"."share_type_enum" NOT NULL DEFAULT 'public',
        "password" character varying,
        "expiresAt" TIMESTAMP,
        "viewCount" integer NOT NULL DEFAULT '0',
        "isActive" boolean NOT NULL DEFAULT true,
        "userId" uuid NOT NULL,
        "imageId" uuid NOT NULL,
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "UQ_8c2f3b3b3b3b3b3b3b3b3b3b3b3" UNIQUE ("shortCode"),
        CONSTRAINT "PK_8c2f3b3b3b3b3b3b3b3b3b3b3b3" PRIMARY KEY ("id")
      )
    `);

    await queryRunner.query(`
      CREATE INDEX "IDX_8c2f3b3b3b3b3b3b3b3b3b3b3b3" ON "shares" ("shortCode")
    `);

    // 添加外键约束
    await queryRunner.query(`
      ALTER TABLE "images" ADD CONSTRAINT "FK_images_user"
      FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION
    `);

    await queryRunner.query(`
      ALTER TABLE "shares" ADD CONSTRAINT "FK_shares_user"
      FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION
    `);

    await queryRunner.query(`
      ALTER TABLE "shares" ADD CONSTRAINT "FK_shares_image"
      FOREIGN KEY ("imageId") REFERENCES "images"("id") ON DELETE CASCADE ON UPDATE NO ACTION
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // 删除外键约束
    await queryRunner.query(
      `ALTER TABLE "shares" DROP CONSTRAINT "FK_shares_image"`
    );
    await queryRunner.query(
      `ALTER TABLE "shares" DROP CONSTRAINT "FK_shares_user"`
    );
    await queryRunner.query(
      `ALTER TABLE "images" DROP CONSTRAINT "FK_images_user"`
    );

    // 删除表
    await queryRunner.query(`DROP TABLE "shares"`);
    await queryRunner.query(`DROP TABLE "images"`);
    await queryRunner.query(`DROP TABLE "users"`);

    // 删除枚举类型
    await queryRunner.query(`DROP TYPE "public"."share_type_enum"`);
    await queryRunner.query(`DROP TYPE "public"."user_role_enum"`);
  }
}
