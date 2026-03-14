# AIPET - AI电子宠物世界

AI电子宠物产品资讯展示平台，汇集国内外56+款AI电子宠物产品，提供产品分类浏览、智能筛选导购、市场趋势分析等功能。

## 技术栈

| 类别 | 技术 | 版本 |
|------|------|------|
| 框架 | React | ^19.2.0 |
| 语言 | TypeScript | ~5.9.3 |
| 构建工具 | Vite | ^7.2.4 |
| CSS 框架 | TailwindCSS | ^3.4.19 |
| 组件库 | shadcn/ui (new-york 风格) | — |
| 图标 | lucide-react | ^0.562.0 |
| 表单 | react-hook-form + zod | — |
| 图表 | recharts | ^2.15.4 |
| 字体 | Google Fonts (Poppins) | — |

## 项目结构

```
openclawhere.github.io/
├── index.html                  # 入口 HTML，标题 "AI电子宠物世界"
├── vite.config.ts              # Vite 配置，路径别名 @→src，相对路径部署
├── tailwind.config.js          # TailwindCSS 配置 + shadcn 主题 + 动画
├── components.json             # shadcn/ui 配置 (new-york 风格)
├── public/                     # 静态资源 (产品图片、分类图片、头像)
├── src/
│   ├── main.tsx                # 应用入口
│   ├── App.tsx                 # 根组件，组装所有页面段落
│   ├── index.css               # 全局样式 + CSS 变量 + 自定义动画
│   ├── App.css                 # 旧模板遗留样式（未使用）
│   ├── sections/               # 页面段落组件（9 个）
│   │   ├── Navigation.tsx      # 顶部导航栏（滚动变形 + 移动端菜单）
│   │   ├── Hero.tsx            # 首屏英雄区（3D 鼠标追踪 + 粒子动画）
│   │   ├── ProductCategories.tsx  # 产品分类展示（5 大类）
│   │   ├── FeaturedProducts.tsx   # 精选产品轮播
│   │   ├── ProductGuide.tsx    # 智能导购（多维度筛选、搜索、排序）
│   │   ├── TechFeatures.tsx    # 技术特点介绍
│   │   ├── MarketTrends.tsx    # 市场趋势分析
│   │   ├── Testimonials.tsx    # 用户评价
│   │   └── Footer.tsx          # 页脚（链接、订阅、联系方式）
│   ├── components/ui/          # shadcn/ui 组件（53 个）
│   ├── data/
│   │   └── products.ts         # 产品数据定义（56 款产品 + 分类/价格/技术/用户维度）
│   ├── hooks/
│   │   └── use-mobile.ts       # 移动端检测 Hook
│   └── lib/
│       └── utils.ts            # 工具函数（cn 类名合并）
└── dist/                       # 构建产物
```

## 开发命令

```bash
npm run dev       # 启动开发服务器
npm run build     # TypeScript 编译 + Vite 打包
npm run preview   # 预览生产构建
npm run lint      # ESLint 代码检查
```

## 核心功能模块

### 导航 (Navigation)
- 固定顶部导航，滚动收缩为胶囊形状（`glass` 磨砂效果）
- 锚点平滑滚动到各段落
- 响应式移动端抽屉菜单

### 英雄区 (Hero)
- 渐变背景 + 浮动粒子 + 网格图案
- 3D 鼠标追踪图片（perspective 旋转）
- 浮动信息卡片动画

### 智能导购 (ProductGuide)
- 多维度筛选：产品类型、价格区间、技术特点、目标用户
- 实时搜索（名称/公司/描述）
- 排序（名称/价格升降序）
- 网格/列表视图切换
- 通过 `CustomEvent` 接收外部分类筛选

### 产品数据 (products.ts)
- `Product` 接口：id, name, company, category, price, techFeatures, targetUser, isDomestic 等
- 5 个产品类别：AI毛绒玩具、AI机器狗、AI桌面宠物、人形机器人、AI教育机器人
- 4 个价格区间：入门级/中端/高端/专业级
- 5 个技术特点：大模型驱动、情感计算、多模态交互、长期记忆、仿生设计
- 5 个目标用户群：儿童、年轻人、老年人、工业、家庭

## 设计系统

- **主色调**: `#4d67ff`（蓝色）| 辅色: `#6b82ff` / `#3a4fcc`
- **文字颜色**: `#333333`（主）/ `#666666`（次）
- **背景色**: `#f0f0f0`（灰白）
- **CSS 变量**: 通过 HSL 定义，支持 shadcn 语义化颜色 token
- **自定义动画**: `float`、`pulse-soft`、`slide-up`、`fade-in`、`accordion`
- **工具类**: `text-gradient`、`glass`、`glass-dark`、`hover-lift`、`glow-blue`

## 部署

- `base: './'` 配置支持相对路径部署
- 构建产物输出到 `dist/` 目录
- 适合 GitHub Pages 静态托管
