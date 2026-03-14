# 🦞 OpenClaw 龙虾圈

> OpenClaw Here! 全民养虾，一站到底。

汇聚 OpenClaw 生态的开源产品、云端服务、技能社区和学习资料，一站式解决养虾难题，让人人都能轻松养虾，快乐养虾！

🔗 **在线访问**: [https://openclawhere.github.io](https://openclawhere.github.io)

## ✨ 功能特色

- 🦞 **龙虾产品** — 精选 OpenClaw 生态核心产品推荐，从开源框架到云端服务一目了然
- 🤖 **模型服务** — 整理市面上主流适配龙虾的开源模型服务，按需选用
- 🌐 **资源生态** — 31+ OpenClaw 生态产品导航，支持多维度筛选、搜索和排序
- 📚 **免费资料** — 汇总全网养虾资料，精选优质教程，打破信息差，杜绝智商税

## 📦 生态数据

项目收录了 **31+ 个 OpenClaw 生态产品**，覆盖 4 大类别：

| 分类 | 数量 | 说明 |
|------|------|------|
| 🦞 开源产品 | 7 | OpenClaw、ZeroClaw、PicoClaw、AutoClaw、QClaw、LobsterAI、UI-TARS Desktop |
| ☁️ 云端产品 | 8 | MaxClaw、KimiClaw、ArkClaw、WorkBuddy、CoPaw、小艺 Claw 等 |
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
├── src/
│   ├── main.tsx                # 入口（HashRouter）
│   ├── App.tsx                 # 路由配置
│   ├── index.css               # 全局样式 + CSS 变量
│   ├── sections/               # 页面组件
│   │   ├── Navigation.tsx      # 顶部导航栏
│   │   ├── Hero.tsx            # 首页英雄区
│   │   ├── FeaturedProducts.tsx # 龙虾产品（/products）
│   │   ├── ProductCategories.tsx # 模型服务（/models）
│   │   ├── ProductGuide.tsx    # 资源生态（/ecosystem）
│   │   ├── MarketTrends.tsx    # 免费资料（/resources）
│   │   └── Footer.tsx          # 页脚
│   ├── data/
│   │   └── products.ts         # OpenClaw 生态数据（31 个产品）
│   ├── components/ui/          # shadcn/ui 组件
│   ├── hooks/
│   │   └── use-mobile.ts       # 移动端检测
│   └── lib/
│       └── utils.ts            # 工具函数
└── dist/                       # 构建产物
```

## 🗺️ 路由说明

| 路由 | 页面 | 描述 |
|------|------|------|
| `/` | 首页 | Hero 展示 + 核心亮点 |
| `/products` | 龙虾产品 | 精选生态产品推荐 |
| `/models` | 模型服务 | 适配模型分类浏览 |
| `/ecosystem` | 资源生态 | 全量产品筛选导航 |
| `/resources` | 免费资料 | 学习资料和教程汇总 |

## 🌐 部署

项目使用 GitHub Pages 静态托管，通过 `HashRouter` 确保路由兼容：

```bash
pnpm build
# 构建产物输出到 dist/ 目录，直接部署即可
```

## 📄 License

MIT

---

Made with 🦞 by [OpenClaw Here](https://github.com/openclawhere)
