# Crawfish 国际化实施计划

## ✅ 已完成的工作

### 1. i18n 基础架构

已创建完整的国际化框架：

#### 文件结构
```
ui/src/i18n/
├── index.ts           # 模块导出
├── locales.ts         # 语言配置（支持 en, zh）
├── translations.ts    # 翻译文件（中英文）
└── i18n.ts           # i18n 核心逻辑

ui/src/ui/components/
└── locale-switcher.ts # 语言切换器组件
```

#### 功能特性
- ✅ 支持 2 种语言：英语 (en)、中文 (zh)
- ✅ 自动检测浏览器语言
- ✅ 语言偏好持久化 (localStorage)
- ✅ 类型安全的翻译键
- ✅ 参数化翻译支持
- ✅ 语言切换器组件

#### 已翻译的内容
- ✅ 通用文本（保存、取消、删除等）
- ✅ 顶部栏（品牌标题、健康状态）
- ✅ 导航菜单（所有标签页）
- ✅ 核心页面（概览、聊天、配置、会话等）
- ✅ 渠道页面（WhatsApp, Telegram, Discord 等）
- ✅ 技能、日志、Cron、节点、调试页面

## 📋 待实施的工作

### 阶段 1：核心集成（高优先级）

#### 1.1 修改主应用文件
- [ ] `ui/src/ui/app.ts`: 添加 i18n 控制器
- [ ] `ui/src/ui/app-render.ts`: 替换硬编码文本为翻译
- [ ] `ui/src/ui/navigation.ts`: 添加翻译支持

#### 1.2 修改视图文件
需要修改的文件：
- [ ] `ui/src/ui/views/overview.ts`
- [ ] `ui/src/ui/views/chat.ts`
- [ ] `ui/src/ui/views/config.ts`
- [ ] `ui/src/ui/views/sessions.ts`
- [ ] `ui/src/ui/views/skills.ts`
- [ ] `ui/src/ui/views/channels.ts`
- [ ] `ui/src/ui/views/logs.ts`
- [ ] `ui/src/ui/views/cron.ts`
- [ ] `ui/src/ui/views/nodes.ts`
- [ ] `ui/src/ui/views/debug.ts`

#### 1.3 集成语言切换器
- [ ] 在顶部栏添加 `<locale-switcher></locale-switcher>`
- [ ] 样式调整

### 阶段 2：完善翻译（中优先级）

#### 2.1 审查现有翻译
- [ ] 检查翻译准确性
- [ ] 添加缺失的翻译键
- [ ] 统一术语使用

#### 2.2 扩展翻译覆盖
- [ ] 错误消息
- [ ] 表单验证
- [ ] 工具提示
- [ ] 占位符文本
- [ ] 按钮标签
- [ ] 状态消息

### 阶段 3：测试与优化（中优先级）

#### 3.1 功能测试
- [ ] 语言切换功能
- [ ] 语言持久化
- [ ] 所有页面翻译显示
- [ ] 响应式布局兼容性

#### 3.2 性能优化
- [ ] 翻译加载优化
- [ ] 减少重渲染
- [ ] 按需加载翻译

### 阶段 4：本土化功能（低优先级）

#### 4.1 本土化渠道
- [ ] 研究微信集成
- [ ] 研究支付宝集成
- [ ] 研究本土化支付服务
- [ ] 研究本土化云服务

#### 4.2 本土化服务
- [ ] CDN 选择（中国大陆）
- [ ] 地图服务集成
- [ ] 短信服务集成
- [ ] 存储服务选择

## 🚀 快速开始

### 测试 i18n 框架

1. 进入 UI 目录：
```bash
cd /data/workspace/crawfish/ui
```

2. 安装依赖（如果需要）：
```bash
pnpm install
```

3. 启动开发服务器：
```bash
pnpm dev
```

4. 访问 http://localhost:5173

### 集成到现有组件

```typescript
import { createI18n } from '../i18n';

@customElement('my-component')
export class MyComponent extends LitElement {
  private i18n = createI18n(this);

  render() {
    const { t } = this.i18n;
    return html`<p>${t.common.save}</p>`;
  }
}
```

## 📚 文档

详细的实施指南请参阅：
- `docs/i18n-guide.md` - 完整的 i18n 实施指南
- `docs/i18n-quickstart.md` - 快速开始指南

## 🎯 优先级建议

### 立即执行（本周）
1. ✅ i18n 基础架构（已完成）
2. 🔨 核心文件集成（app.ts, app-render.ts, navigation.ts）
3. 🔨 语言切换器集成

### 短期目标（2周内）
1. 📝 所有视图文件的翻译集成
2. 🧪 完整的功能测试
3. 🐛 Bug 修复和优化

### 中期目标（1个月内）
1. 🌏 翻译审查和改进
2. 📦 准备发布
3. 📖 用户文档更新

### 长期目标（持续）
1. 🇨🇳 本土化渠道集成
2. 🇯🇵 更多语言支持（日语、韩语等）
3. 🌐 社区贡献的翻译

## 🤝 贡献指南

### 添加新翻译

1. 在 `translations.ts` 中添加键值对
2. 确保所有语言都有对应翻译
3. 测试所有页面
4. 提交 PR

### 添加新语言

1. 在 `locales.ts` 中添加语言配置
2. 在 `translations.ts` 中添加完整翻译对象
3. 更新文档
4. 提交 PR

## 📞 联系方式

如有问题或建议，请联系开发团队。

---

**最后更新**: 2026-01-31
**状态**: 基础架构已完成，待集成到现有代码
