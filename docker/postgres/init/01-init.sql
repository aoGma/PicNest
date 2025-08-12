-- 创建数据库（如果不存在）
-- 注意：PostgreSQL 容器启动时会自动创建 picnest 数据库

-- 创建扩展（如果需要）
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 设置时区
SET timezone = 'UTC';

-- 创建用户表（如果需要）
-- 这里可以添加一些初始数据或表结构
