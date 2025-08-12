import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 配置 Swagger
  const { DocumentBuilder, SwaggerModule } = await import('@nestjs/swagger');

  const config = new DocumentBuilder()
    .setTitle('PicNest API')
    .setDescription('PicNest 图片托管平台 API 文档')
    .setVersion('1.0')
    .addTag('认证', '用户认证相关接口')
    .addTag('用户', '用户管理相关接口')
    .addTag('图片', '图片管理相关接口')
    .addTag('分享', '图片分享相关接口')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  console.log('Swagger 文档已配置在: http://localhost:3000/api');

  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
