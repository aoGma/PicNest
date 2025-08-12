# VSCode 项目配置说明

## 📁 配置文件结构

```
.vscode/
├── settings.json          # 工作区设置
├── extensions.json        # 推荐扩展
├── launch.json           # 调试配置
├── tasks.json            # 任务配置
└── c_cpp_properties.json # C/C++ 配置
```

## ⚙️ 主要配置功能

### 1. 代码格式化 (settings.json)

- **Prettier** 设置为默认格式化工具
- 支持的文件类型：TypeScript、JavaScript、JSON、CSS、HTML、Markdown
- 自动格式化：保存时、粘贴时、输入时
- 自动修复 ESLint 错误和整理导入

### 2. 推荐扩展 (extensions.json)

- **核心工具**: Prettier、ESLint、TypeScript
- **React 开发**: Tailwind CSS、React Native
- **NestJS 开发**: NestJS 支持
- **Git 工具**: GitLens、Git Graph
- **主题**: Material Icon Theme
- **调试**: Jest、Docker 支持

### 3. 调试配置 (launch.json)

- **Web 应用调试**: Vite 开发服务器
- **API 服务器调试**: NestJS 应用
- **测试调试**: Jest 和 Vitest

### 4. 任务配置 (tasks.json)

- **依赖安装**: `pnpm install`
- **开发服务器**: Web 和 API 服务器启动
- **构建任务**: 全项目构建
- **测试任务**: 运行所有测试
- **代码质量**: Lint 和格式化

## 🚀 快速开始

### 1. 安装推荐扩展

打开 VSCode 时，会提示安装推荐的扩展，点击 "Install All" 即可。

### 2. 使用快捷键

- `Ctrl/Cmd + Shift + P`: 打开命令面板
- `Ctrl/Cmd + Shift + B`: 运行构建任务
- `F5`: 开始调试
- `Ctrl/Cmd + Shift + D`: 打开调试面板

### 3. 常用任务

在命令面板中输入 "Tasks: Run Task" 可以运行以下任务：

- `Install Dependencies`: 安装依赖
- `Start Web Dev Server`: 启动 Web 开发服务器
- `Start API Dev Server`: 启动 API 开发服务器
- `Build All`: 构建所有项目
- `Test All`: 运行所有测试
- `Lint All`: 检查代码质量
- `Format All`: 格式化所有代码

## 🎨 代码格式化规则

### Prettier 配置

```json
{
  "singleQuote": true, // 使用单引号
  "semi": true, // 使用分号
  "tabWidth": 2, // 缩进 2 个空格
  "trailingComma": "es5", // ES5 兼容的尾随逗号
  "printWidth": 80, // 行宽 80 字符
  "bracketSpacing": true, // 对象字面量括号内空格
  "arrowParens": "avoid" // 箭头函数单参数省略括号
}
```

### 自动格式化触发

- **保存时**: 自动格式化当前文件
- **粘贴时**: 自动格式化粘贴的代码
- **输入时**: 实时格式化（部分支持）

## 🔧 调试功能

### Web 应用调试

1. 按 `F5` 或选择 "Debug Web App"
2. 应用将在 `http://localhost:3000` 启动
3. 支持断点调试和热重载

### API 服务器调试

1. 按 `F5` 或选择 "Debug API Server"
2. 服务器将在 `http://localhost:3001` 启动
3. 支持 TypeScript 源码调试

### 测试调试

1. 选择 "Debug API Tests" 或 "Debug Web Tests"
2. 支持单步调试测试用例
3. 查看测试覆盖率报告

## 📝 代码质量工具

### ESLint 集成

- 实时错误检查
- 自动修复支持
- 保存时自动修复

### TypeScript 支持

- 智能导入建议
- 类型检查
- 重构支持

## 🎯 最佳实践

1. **扩展管理**: 只安装必要的扩展，避免性能问题
2. **格式化**: 保持一致的代码风格
3. **调试**: 使用断点而不是 console.log
4. **任务**: 利用预定义任务提高开发效率
5. **快捷键**: 熟悉常用快捷键提高编码速度

## 🔄 更新配置

如需修改配置：

1. 编辑 `.vscode/settings.json` 修改工作区设置
2. 编辑 `.vscode/extensions.json` 添加/移除推荐扩展
3. 编辑 `.vscode/launch.json` 修改调试配置
4. 编辑 `.vscode/tasks.json` 修改任务配置

## 📚 相关文档

- [VSCode 官方文档](https://code.visualstudio.com/docs)
- [Prettier 配置](https://prettier.io/docs/en/configuration.html)
- [ESLint 配置](https://eslint.org/docs/user-guide/configuring)
- [TypeScript 配置](https://www.typescriptlang.org/docs/)
