# 🦞 OpenClaw 龙虾圈

> OpenClaw Here! 拥抱 AI，全民养虾。

汇聚 OpenClaw 生态的开源产品、云端服务、技能社区和学习资料，一站式解决 AI 智能体部署难题，让人人都能轻松拥有私人 AI 助手！

🔗 **在线访问**: [https://openclawhere.github.io](https://openclawhere.github.io)

## ✨ 功能特色

- 🦞 **龙虾产品** — 精选 OpenClaw 生态核心产品推荐，从开源框架到云端服务一目了然
- 🤖 **模型服务** — 整理市面上主流适配的开源模型服务，包括 GPT-4、Claude、Gemini、通义千问等
- 🌐 **资源生态** — 31+ OpenClaw 生态产品导航，支持多维度筛选、搜索和排序
- 📚 **免费资料** — 汇总全网 AI 智能体学习资料，精选优质教程，打破信息差，杜绝智商税

## 📦 生态数据

项目收录了 **31+ 个 OpenClaw 生态产品**，覆盖 4 大类别：

| 分类 | 数量 | 说明 |
|------|------|------|
| 🦞 开源产品 | 7 | OpenClaw、ZeroClaw、PicoClaw、AutoClaw、QClaw、LobsterAI、KiloClaw |
| ☁️ 云端产品 | 8 | MaxClaw、KimiClaw、ArkClaw、WorkBuddy、CoPaw、JVS Claw 等 |
| 👥 社区网站 | 8 | 中文社区、Discord、GitHub Discussions、Twitter 等 |
| 🔧 生态工具 | 8 | ClawHub、Skills.sh、LobeHub、VoltAgent、Clawsphere 等 |

## 🛠️ 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | React 19 + TypeScript |
| 构建 | Vite 7 |
| 样式 | TailwindCSS 3 |
| 组件 | shadcn/ui (new-york) |
| 路由 | react-router-dom (HashRouter) |
| 图标 | lucide-react |
| 图表 | recharts |
| 字体 | Google Fonts (Poppins) |
| UI 库 | Radix UI primitives |
| 表单 | react-hook-form + zod |
| 动画 | CSS animations + Tailwind utilities |

## 🚀 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览生产构建
pnpm preview
```

## 📁 项目结构

```
openclawhere.github.io/
├── public/                     # 静态资源（Logo、二维码、分类图片）
│   ├── ecosystem/              # 生态产品图片
│   └── product/                # 产品图片
├── src/
│   ├── main.tsx                # 入口（HashRouter）
│   ├── App.tsx                 # 路由配置
│   ├── index.css               # 全局样式 + CSS 变量
│   ├── sections/               # 页面组件
│   │   ├── Navigation.tsx      # 顶部导航栏
│   │   ├── Hero.tsx            # 首页英雄区（SEO 优化）
│   │   ├── WarningGuide.tsx    # 劝退警告指南
│   │   ├── SelectionGuide.tsx  # 产品选择指南
│   │   ├── ConfigurationGuide.tsx # 配置指南
│   │   ├── SkillGuide.tsx      # 技能指南
│   │   ├── FeaturedProducts.tsx # 龙虾产品（/products，SEO 优化）
│   │   ├── ModelsPage.tsx      # 模型服务（/models，SEO 优化）
│   │   ├── ProductGuide.tsx    # 资源生态（/ecosystem，SEO 优化）
│   │   ├── MarketTrends.tsx    # 免费资料（/resources，SEO 优化）
│   │   └── Footer.tsx          # 页脚
│   ├── data/
│   │   ├── products.ts         # OpenClaw 生态数据（31+ 产品）
│   │   └── models.ts           # AI 模型数据
│   ├── components/
│   │   ├── ui/                 # shadcn/ui 组件
│   │   ├── ModelCard.tsx       # 模型卡片
│   │   ├── ProductCard.tsx     # 产品卡片
│   │   └── WebsiteCard.tsx     # 网站卡片
│   ├── hooks/
│   │   ├── use-document-meta.ts # SEO Meta 管理
│   │   └── use-mobile.ts       # 移动端检测
│   └── lib/
│       └── utils.ts            # 工具函数
└── dist/                       # 构建产物
```

## 🗺️ 路由说明

| 路由 | 页面 | 描述 |
|------|------|------|
| `/` | 首页 | Hero 展示 + 核心亮点（4 个 Guide 组件） |
| `/products` | 龙虾产品 | 精选生态产品推荐卡 |
| `/models` | 模型服务 | AI 大模型分类浏览 |
| `/ecosystem` | 资源生态 | 全量产品筛选导航 |
| `/resources` | 免费资料 | 学习资料和教程汇总 |

## 🌐 部署

项目使用 GitHub Pages 静态托管，通过 `HashRouter` 确保路由兼容：

```bash
pnpm build
# 构建产物输出到 dist/ 目录，直接部署即可
```

## 🔍 SEO 优化

项目已实施全面的 SEO 优化策略，提升搜索引擎可见性：

### Meta 标签优化
- **Title & Description**: 针对 AI 智能体、开源框架等关键词优化
- **Open Graph**: 完整的社交媒体分享标签
- **Twitter Card**: 支持 Twitter 平台预览
- **百度 SEO**: 包含百度统计和自动推送脚本

### 结构化数据 (JSON-LD)
- **WebSite**: 网站基本信息和搜索功能
- **Organization**: 组织信息和社交账号
- **SoftwareApplication**: 软件应用详情和评分

### 页面级 SEO
每个页面都配置了独立的 title 和 description：
- 首页：AI 智能体平台介绍
- 模型页：大模型服务分类
- 产品页：生态产品推荐
- 资源页：学习资料汇总

### robots.txt 配置
- 支持主流搜索引擎爬虫（Google、Baidu、Bing 等）
- 合理的爬取延迟设置
- 禁止索引静态资源和源文件

### Sitemap
- 动态更新所有页面 URL
- 设置合理的更新频率和优先级
- 提交到各大搜索引擎站长工具

### 性能优化
- 主题色配置 (`theme-color`)
- 移动端优化标识
- 图片懒加载支持
- 关键 CSS 内联

## 📊 搜索引擎提交

建议在部署后主动提交到以下平台：
- [Google Search Console](https://search.google.com/search-console)
- [百度搜索资源平台](https://ziyuan.baidu.com/)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)

## 📄 License

MIT

---

Made with 🦞 and AI by [OpenClaw Here](https://github.com/openclawhere)

## 🔗 相关链接

- **GitHub**: [openclawhere.github.io](https://github.com/openclawhere/openclawhere.github.io)
- **OpenClaw 官方文档**: [docs.openclaw.ai](https://docs.openclaw.ai/zh-CN)
- **中文社区**: [openclawcn.cc](https://www.openclawcn.cc/)
- **Discord**: [discord.gg/clawd](https://discord.gg/clawd)
