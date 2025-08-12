import { Injectable, Inject } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import type { Cache } from 'cache-manager';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getRedisStatus(): Promise<{ status: string; message: string }> {
    const redisHost = process.env.REDIS_HOST || 'localhost';
    const redisPort = process.env.REDIS_PORT || '6379';

    try {
      // 测试 Redis 连接
      await this.cacheManager.set('test', 'Hello PicNest', 60);
      const testValue = await this.cacheManager.get('test');

      return {
        status: 'success',
        message: `Redis connected successfully at ${redisHost}:${redisPort}. Test value: ${String(testValue)}`,
      };
    } catch (error) {
      return {
        status: 'error',
        message: `Redis connection failed: ${String(error)}`,
      };
    }
  }

  async setCache(key: string, value: any, ttl?: number): Promise<void> {
    await this.cacheManager.set(key, value, ttl);
  }

  async getCache(key: string): Promise<unknown> {
    return await this.cacheManager.get(key);
  }

  async deleteCache(key: string): Promise<void> {
    await this.cacheManager.del(key);
  }
}
