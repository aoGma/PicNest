# PicNest 图床网站

一个现代化的图片托管和分享平台，提供安全、高效的图片存储和管理服务。

## 🚀 项目特性

### 核心功能

- 📸 **图片上传与管理** - 支持多种格式的图片上传和批量管理
- 🔐 **用户认证系统** - 完整的用户注册、登录、权限管理
- 🛡️ **安全防护** - 病毒扫描、文件类型验证、访问控制
- 🔗 **智能分享** - 短链接生成、分享过期管理、访问统计
- 📱 **响应式设计** - 支持多设备访问的现代化UI
- 🗜️ **图片优化** - 自动压缩、缩略图生成、格式转换

### 技术特性

- ⚡ **高性能** - Redis缓存、数据库优化、CDN支持
- 🔄 **实时处理** - 异步任务队列、实时通知
- 📊 **数据统计** - 用户行为分析、存储空间监控
- 🔧 **易于扩展** - 模块化架构、插件系统

## 🛠️ 技术栈

### 后端

- **框架**: NestJS (Node.js)
- **数据库**: PostgreSQL
- **缓存**: Redis
- **文件存储**: 本地存储 + 云存储集成
- **认证**: JWT + Session
- **任务队列**: Bull + Redis
- **API文档**: Swagger/OpenAPI

### 前端

- **框架**: React 18
- **构建工具**: Vite + Turbo
- **包管理**: pnpm
- **UI组件**: Ant Design
- **状态管理**: Zustand/Redux Toolkit
- **路由**: React Router
- **HTTP客户端**: Axios

### 开发工具

- **Monorepo**: Turbo
- **代码规范**: ESLint + Prettier
- **类型检查**: TypeScript
- **代码质量**: Husky + lint-staged
- **容器化**: Docker + Docker Compose
- **IDE配置**: VSCode 工作区设置
- **测试**: Jest + React Testing Library

## 📁 项目结构

```
PicNestProjectRoot/
├── apps/
│   ├── web/                 # React前端应用
│   │   ├── src/
│   │   │   ├── App.tsx      # 主应用组件
│   │   │   ├── App.css      # 应用样式
│   │   │   └── main.tsx     # 应用入口
│   │   ├── package.json     # 前端依赖配置
│   │   └── vite.config.ts   # Vite构建配置
│   └── api/                 # NestJS后端API
│       ├── src/
│       │   ├── app.module.ts    # 主模块
│       │   ├── app.controller.ts # 主控制器
│       │   ├── app.service.ts   # 主服务
│       │   ├── entities/        # 数据库实体
│       │   │   ├── user.entity.ts
│       │   │   ├── image.entity.ts
│       │   │   └── share.entity.ts
│       │   └── config/          # 配置文件
│       │       ├── database.config.ts
│       │       └── redis.config.ts
│       └── package.json     # 后端依赖配置
├── packages/
│   └── config/              # 共享配置包
│       ├── package.json
│       └── tsconfig.json
├── .env                     # 环境变量
├── .env.example            # 环境变量模板
├── .gitignore              # Git忽略文件
├── .nvmrc                  # Node.js版本
├── .prettierrc             # Prettier配置
├── .prettierignore         # Prettier忽略文件
├── .husky/                 # Git钩子配置
├── docker-compose.yml      # Docker容器配置
├── package.json            # 根包配置
├── pnpm-workspace.yaml     # pnpm工作空间配置
├── turbo.json              # Turbo构建配置
├── tsconfig.json           # 根TypeScript配置
├── README.md               # 项目文档
├── TODO.md                 # 开发计划
└── VSCODE_SETUP.md         # VSCode配置说明
```

## 📊 当前状态

### ✅ 已完成功能

- **项目基础架构**: Monorepo 结构、Turbo 构建系统、pnpm 工作空间
- **开发环境**: TypeScript 配置、ESLint + Prettier、Husky + lint-staged
- **代码质量**: 自动格式化、提交前检查、代码规范统一
- **Docker 环境**: PostgreSQL 和 Redis 容器化配置
- **VSCode 配置**: 工作区设置、推荐扩展、调试配置
- **后端基础**: NestJS 应用、PostgreSQL 数据库、Redis 缓存
- **数据库设计**: 用户、图片、分享三个核心实体
- **数据库迁移**: TypeORM 迁移系统、用户名唯一索引
- **用户认证系统**: 用户注册、登录、JWT 认证、密码加密
- **API 文档**: Swagger/OpenAPI 文档，支持 Bearer 认证
- **前端基础**: React + Vite、Ant Design UI、响应式布局
- **首页设计**: 现代化 UI、功能展示、详细页脚

### 🔄 进行中功能

- **用户管理模块**: 用户信息更新、头像上传、密码修改
- **图片上传功能**: 文件上传、类型验证、存储管理
- **前端认证界面**: 登录、注册页面开发
- **API 文档**: Swagger 文档已配置，可访问 http://localhost:3000/api

### 📋 下一步计划

1. **用户管理功能** - 用户信息更新、头像上传、密码修改
2. **图片上传功能** - 文件上传、类型验证、存储管理
3. **前端认证界面** - 登录、注册页面开发
4. **图片管理功能** - 图片列表、编辑、删除

## 🚀 快速开始

### 环境要求

- Node.js 20.19.4
- pnpm 10.14.0
- PostgreSQL >= 14
- Redis >= 6

### 安装依赖

```bash
pnpm install
```

### 环境配置

```bash
cp .env.example .env
# 编辑 .env 文件配置数据库和Redis连接
```

### 启动开发环境

```bash
# 启动所有服务
pnpm dev

# 或分别启动
pnpm dev:web    # 启动前端 (http://localhost:5173)
pnpm dev:api    # 启动后端 (http://localhost:3000)

# 构建项目
pnpm build      # 构建所有应用
pnpm build:web  # 构建前端
pnpm build:api  # 构建后端

# 代码检查
pnpm lint       # 检查所有代码
pnpm lint:fix   # 自动修复代码格式
```

### 数据库和缓存

#### 使用 Docker Compose (推荐)

```bash
# 启动所有服务
docker-compose up -d

# 查看服务状态
docker-compose ps

# 停止服务
docker-compose down
```

#### 手动启动容器

```bash
# 启动 PostgreSQL (Docker)
docker run --name picnest-postgres \
  -e POSTGRES_DB=picnest \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=password \
  -p 5432:5432 \
  -d postgres:15

# 启动 Redis (Docker)
docker run --name picnest-redis \
  -p 6379:6379 \
  -d redis:7-alpine
```

## 📋 开发进度

### ✅ 第一阶段：项目基础搭建 (已完成)

- [x] 初始化Monorepo项目结构
- [x] 配置Turbo构建系统
- [x] 设置开发环境和工具链
- [x] 配置TypeScript、ESLint、Prettier
- [x] 设置Husky和lint-staged代码质量检查
- [x] 配置Docker容器环境
- [x] 设置VSCode开发环境
- [x] 配置数据库和Redis
- [x] 基础项目文档

### ✅ 第二阶段：后端API开发 (进行中)

- [x] NestJS 应用创建和配置
- [x] TypeORM 和 PostgreSQL 配置
- [x] Redis 连接配置
- [x] 数据库实体设计 (User, Image, Share)
- [x] 数据库迁移文件创建和部署
- [x] Swagger API 文档配置
- [x] 基础 API 接口 (健康检查、缓存操作)
- [ ] 用户认证模块
- [ ] 用户管理模块
- [ ] 图片上传模块
- [ ] 图片管理模块
- [ ] 文件存储服务
- [ ] 病毒扫描集成
- [ ] 任务队列系统

### ✅ 第三阶段：前端界面开发 (进行中)

- [x] React 应用创建和配置
- [x] Vite 构建工具配置
- [x] Ant Design UI 组件集成
- [x] 基础布局组件
- [x] 响应式首页设计
- [ ] 认证页面
- [ ] 图片上传界面
- [ ] 图片管理界面
- [ ] 用户管理界面

### 🔄 第四阶段：核心功能实现 (待开始)

- [ ] 图片分享功能
- [ ] 短链接生成
- [ ] 分享过期处理
- [ ] 图片压缩和缩略图
- [ ] 存储空间管理
- [ ] 访问统计

### 🔄 第五阶段：优化和测试 (待开始)

- [ ] 性能优化
- [ ] 安全加固
- [ ] 单元测试
- [ ] 集成测试
- [ ] 部署配置

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 📞 联系方式

- 项目主页: [GitHub Repository]
- 问题反馈: [Issues]
- 邮箱: [your-email@example.com]

---

**PicNest** - 让图片分享更简单、更安全、更高效 🎯
