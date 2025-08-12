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
- **测试**: Jest + React Testing Library
- **Docker**: 容器化部署

## 📁 项目结构

```
PicNestProjectRoot/
├── apps/
│   ├── web/                 # React前端应用
│   └── api/                 # NestJS后端API
├── packages/
│   ├── ui/                  # 共享UI组件
│   ├── config/              # 共享配置
│   ├── types/               # 共享类型定义
│   └── utils/               # 共享工具函数
├── tools/                   # 开发工具和脚本
├── docs/                    # 项目文档
└── docker/                  # Docker配置文件
```

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
pnpm dev:web    # 启动前端
pnpm dev:api    # 启动后端
```

## 📋 开发计划

### 第一阶段：项目基础搭建

- [ ] 初始化Monorepo项目结构
- [ ] 配置Turbo构建系统
- [ ] 设置开发环境和工具链
- [ ] 配置数据库和Redis
- [ ] 基础项目文档

### 第二阶段：后端API开发

- [ ] 用户认证模块
- [ ] 用户管理模块
- [ ] 图片上传模块
- [ ] 图片管理模块
- [ ] 文件存储服务
- [ ] 病毒扫描集成
- [ ] 任务队列系统

### 第三阶段：前端界面开发

- [ ] 用户界面设计
- [ ] 认证页面
- [ ] 图片上传界面
- [ ] 图片管理界面
- [ ] 用户管理界面
- [ ] 响应式布局

### 第四阶段：核心功能实现

- [ ] 图片分享功能
- [ ] 短链接生成
- [ ] 分享过期处理
- [ ] 图片压缩和缩略图
- [ ] 存储空间管理
- [ ] 访问统计

### 第五阶段：优化和测试

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
