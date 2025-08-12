import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('health')
  getHealth(): { status: string; timestamp: string } {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  }

  @Get('redis')
  async getRedisStatus(): Promise<{ status: string; message: string }> {
    return await this.appService.getRedisStatus();
  }

  @Post('cache')
  async setCache(
    @Body() body: { key: string; value: any; ttl?: number }
  ): Promise<{ status: string; message: string }> {
    try {
      await this.appService.setCache(body.key, body.value, body.ttl);
      return { status: 'success', message: `Cache set for key: ${body.key}` };
    } catch (error) {
      return {
        status: 'error',
        message: `Failed to set cache: ${String(error)}`,
      };
    }
  }

  @Get('cache/:key')
  async getCache(
    @Param('key') key: string
  ): Promise<{ status: string; data?: unknown; message?: string }> {
    try {
      const value = await this.appService.getCache(key);
      return { status: 'success', data: value };
    } catch (error) {
      return {
        status: 'error',
        message: `Failed to get cache: ${String(error)}`,
      };
    }
  }

  @Delete('cache/:key')
  async deleteCache(
    @Param('key') key: string
  ): Promise<{ status: string; message: string }> {
    try {
      await this.appService.deleteCache(key);
      return { status: 'success', message: `Cache deleted for key: ${key}` };
    } catch (error) {
      return {
        status: 'error',
        message: `Failed to delete cache: ${String(error)}`,
      };
    }
  }
}
