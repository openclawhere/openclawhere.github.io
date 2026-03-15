export interface Product {
  id: string;
  name: string;
  company: string;
  category: string[];
  description: string;
  url?: string;
  features?: string;
  tags: string[];
  stars: {
    difficulty?: number;
    customizability?: number;
    speed?: number;
    security?: number;
  };
  status?: string;
  pricing?: string;
  model?: string;
  releaseDate?: string;
  license?: string;
  members?: string;
  skills?: string;
  image?: string;
}

export const categories = [
  { id: 'open-source', name: '开源产品', count: 7, icon: '🦞', image: '/category-bionic-pet.png' },
  { id: 'cloud', name: '云端产品', count: 8, icon: '☁️', image: '/category-robot-dog.png' },
];

export const tagFilters = [
  { id: 'typescript', name: 'TypeScript' },
  { id: 'rust', name: 'Rust' },
  { id: 'go', name: 'Go' },
  { id: 'multi-model', name: '多模型支持' },
  { id: 'cloud-hosted', name: '云端托管' },
  { id: 'skills-market', name: '技能市场' },
  { id: 'chinese', name: '中文支持' },
];

export const statusFilters = [
  { id: 'released', name: '已发布' },
  { id: 'beta', name: 'Beta / 内测' },
];

// 默认评分
const defaultStars = {
  difficulty: 7.0,
  customizability: 7.0,
  speed: 7.0,
  security: 7.0
};

// 开源产品
export const openSourceProducts: Product[] = [
  {
    id: 'openclaw-original',
    name: 'OpenClaw',
    company: 'Peter Steinberger',
    category: ['开源项目', '免费'],
    description: '开源自托管 AI 智能体框架，支持本地部署与多模型接入，技能生态丰富，社区活跃，适合深度定制需求。',
    url: 'https://docs.openclaw.ai/zh-CN',
    tags: ['TypeScript', '本地部署', '社区活跃'],
    stars: { difficulty: 10, customizability: 10, speed: 6, security: 6 },
    image: './product/openclaw-original.webp',
  },
  {
    id: 'zeroclaw',
    name: 'ZeroClaw',
    company: 'zeroclaw-labs',
    category: ['开源项目', '免费'],
    description: '轻量级 AI 助手，主打极致性能与最小资源占用，快启动、可插拔设计，适合嵌入式与低资源设备部署。',
    url: 'https://www.zeroclawlabs.ai/',
    tags: ['Rust', '极致性能', '快速启动'],
    stars: { difficulty: 6, customizability: 9, speed: 9, security: 8 },
    image: './product/zeroclaw.webp',
  },
  {
    id: 'zeroclaw-fork',
    name: 'ZeroClaw (fork版本)',
    company: 'openagen',
    category: ['开源项目', '免费'],
    description: 'ZeroClaw 是用 Rust 编写的下一代 AI 助手框架。超轻量、极速启动、内存安全，为生产环境而生。',
    url: 'https://zeroclaw.org',
    tags: ['Rust', '极致性能', '快速启动'],
    stars: { difficulty: 6, customizability: 9, speed: 9, security: 8 },
    image: './product/zeroclaw.webp',
  },
  {
    id: 'picoclaw',
    name: 'PicoClaw',
    company: 'SipeedIO',
    category: ['开源项目', '免费'],
    description: 'Go 语言开发的嵌入式友好型 AI 智能体，适配树莓派等边缘设备，资源占用低，兼容 OpenClaw 技能生态，适合物联网场景与轻量任务处理。',
    url: 'https://picoclaw.io/',
    tags: ['Go', '嵌入式友好', '单文件部署', '边缘计算', '低资源占用', 'OpenClaw 兼容'],
    stars: { difficulty: 5, customizability: 8, speed: 8, security: 7 },
    image: './product/picoclaw.webp',
  },
  {
    id: 'autoclaw',
    name: 'AutoClaw',
    company: '智谱 AI',
    category: ['付费', '云产品'],
    description: '智谱推出的一键安装本地版 OpenClaw，预装 50+ 热门技能，部署零门槛，开箱即用。',
    url: 'https://autoglm.zhipuai.cn/autoclaw/',
    tags: ['本地部署', '一键安装', '开箱即用', '技能丰富', 'GLM 模型优化'],
    stars: { difficulty: 2, customizability: 7, speed: 8, security: 8 },
    image: './product/autoclaw.webp',
  },
  {
    id: 'qclaw',
    name: 'QClaw',
    company: '腾讯',
    category: ['付费', '云产品'],
    description: '腾讯推出的云端 AI 智能体平台，与企业微信深度集成，适合企业团队协作与办公自动化场景。',
    url: 'https://qclaw.qq.com/',
    tags: ['云端部署', '企业微信集成', '办公自动化'],
    stars: { difficulty: 3, customizability: 6, speed: 7, security: 9 },
    image: './product/qclaw.webp',
  },
  {
    id: 'lobsterai',
    name: 'LobsterAI',
    company: '网易有道',
    category: ['云产品', '免费', '付费'],
    description: '有道推出的纯云端 Agent 平台，零部署注册即用，内置常用技能，适合不想折腾的普通用户。',
    url: 'https://lobsterai.youdao.com/#/index',
    tags: ['注册即用', 'API 调用', '有道生态', '轻量使用'],
    stars: { difficulty: 1, customizability: 5, speed: 8, security: 8 },
    image: './product/lobsterai.webp',
  },
  // {
  //   id: 'ui-tars-desktop',
  //   name: 'UI-TARS Desktop',
  //   company: 'UI-TARS',
  //   category: 'open-source',
  //   categoryName: '开源产品',
  //   description: '基于自研 Seed-VL 多模态大模型的视觉操作版本',
  //   url: 'https://github.com/ui-tars/ui-tars-desktop',
  //   releaseDate: '2026 年 2 月',
  //   features: '纯视觉识别操作任意软件界面',
  //   isDomestic: false,
  //   tags: ['multi-model'],
  // },
]

// 云端产品
export const cloudProducts: Product[] = [
  {
    id: 'maxclaw',
    name: 'MaxClaw',
    company: 'MiniMax',
    category: ['云产品', '付费'],
    description: 'MiniMax 推出的云端 SaaS 版 AI 智能体，与飞书/钉钉国内生态直连，适合企业与团队协作场景。',
    url: 'https://agent.minimax.io/max-claw',
    tags: ['云端 SaaS', '蜂群智能体', '离线任务', '云存储'],
    stars: { difficulty: 2, customizability: 6, speed: 7, security: 8 },
    image: './product/maxclaw.webp',
  },
  {
    id: 'kimiclaw',
    name: 'KimiClaw',
    company: '月之暗面',
    category: ['云产品', '免费', '付费'],
    description: '内置数千现成技能，支持蜂群智能体、离线任务与飞书集成，浏览器开箱即用，无需部署。',
    url: 'https://www.kimi.com/bot',
    tags: ['全包式云端', '蜂群智能体', '开箱即用'],
    stars: { difficulty: 1, customizability: 7, speed: 9, security: 8 },
    image: './product/kimiclaw.webp',
  },
  {
    id: 'arkclaw',
    name: 'ArkClaw',
    company: '火山引擎（字节跳动）',
    category: ['云产品', '免费', '付费'],
    description: '与飞书深度打通，云原生沙箱隔离环境，安全托底，支持一人指挥多只 AI 协同工作。',
    url: 'https://www.volcengine.com/experience/ark?mode=claw',
    tags: ['飞书深度集成', '云原生沙箱', '零门槛'],
    stars: { difficulty: 1, customizability: 6, speed: 8, security: 10 },
    image: './product/arkclaw.webp',
  },
  {
    id: 'workbuddy',
    name: 'WorkBuddy',
    company: '腾讯',
    category: ['付费', '云产品'],
    description: '腾讯 AI 原生工作台，兼容 OpenClaw 技能，下载安装即用，支持企业微信/QQ/飞书/钉钉远程遥控。',
    url: 'https://www.codebuddy.cn/work/',
    tags: ['桌面智能体', 'OpenClaw 兼容', '多 IM 支持', '远程遥控', '多窗口并行', 'MCP 协议'],
    stars: { difficulty: 2, customizability: 7, speed: 7, security: 9 },
    image: './product/workbuddy.webp',
  },
  {
    id: 'copaw',
    name: 'CoPaw',
    company: '阿里云通义团队',
    category: ['开源项目', '免费', '云产品'],
    description: '可端可云个人智能助理，支持钉钉/飞书/QQ 多平台接入，一键本地或云端部署，部署门槛低。',
    url: 'https://copaw.agentscope.io/',
    tags: ['模块化设计', '双模式部署', '多平台接入', '千问模型', '低门槛', '开源免费'],
    stars: { difficulty: 4, customizability: 9, speed: 7, security: 8 },
    image: './product/copaw.webp',
  },
  {
    id: 'jvs-claw',
    name: 'JVS Claw',
    company: '阿里云',
    category: ['云产品', '免费', '付费'],
    description: '阿里云基于 OpenClaw 深度定制的移动端 AI 助手，一键养虾模式，支持多端访问，安全可靠。',
    url: 'https://jvs.wuying.aliyun.com/',
    tags: ['移动端优先', '云端隔离环境', '一键养虾', '多端访问', '零配置', '安全可靠'],
    stars: { difficulty: 1, customizability: 5, speed: 8, security: 9 },
    image: './product/jvs-claw.webp',
  },
  {
    id: 'kiloclaw',
    name: 'KiloClaw',
    company: 'Kilo-org',
    category: ['开源项目', '免费'],
    description: '面向大规模任务处理的分布式 AI 智能体框架，支持集群部署，适合企业级大规模自动化场景。',
    url: 'https://kilo.ai/kiloclaw',
    tags: ['分布式架构', '集群部署', '大规模任务', '负载均衡', 'OpenClaw 兼容', '企业级'],
    stars: { difficulty: 8, customizability: 9, speed: 9, security: 7 },
    image: '/product/kiloclaw.webp',
  },
]

// 社区网站
export const communityProducts: Product[] = [
  {
    id: 'openclaw-cn',
    name: 'OpenClaw 中文社区',
    company: '社区',
    category: ['社区网站', '免费'],
    
    description: 'OpenClaw 最大中文社区',
    url: 'https://www.openclawcn.cc/',
    members: '5000+',
    skills: '120+ 中文技能',
    features: '日活 1200+',
    stars: defaultStars,
    tags: ['chinese'],
  },
  {
    id: 'clawd-cn',
    name: 'Clawd 中文社区',
    company: '社区',
    category: ['社区网站', '免费'],
    
    description: 'OpenClaw 中文社区分支，完全开源免费',
    url: 'https://clawd.org.cn/',
    features: '论坛讨论，开源免费',
    stars: defaultStars,
    tags: ['chinese'],
  },
  {
    id: 'discord',
    name: 'Discord 官方社区',
    company: 'Discord',
    category: ['社区网站', '免费'],
    
    description: '官方 Discord 社区，最活跃的交流平台',
    url: 'https://discord.gg/clawd',
    features: '实时讨论、玩法分享、Bug 求助',
    stars: defaultStars,
    tags: [],
  },
  {
    id: 'github-discussions',
    name: 'GitHub Discussions',
    company: 'GitHub',
    category: ['社区网站', '免费'],
    
    description: '官方 GitHub 技术讨论区',
    url: 'https://github.com/openclaw/openclaw/discussions',
    features: '功能建议、Issue 追踪',
    stars: defaultStars,
    tags: [],
  },
  {
    id: 'twitter',
    name: 'OpenClaw 官方 Twitter',
    company: 'Twitter/X',
    category: ['社区网站', '免费'],
    
    description: '官方 Twitter 账号，新功能发布和用户成果分享',
    url: 'https://x.com/openclaw',
    features: '新功能发布、用户成果分享',
    stars: defaultStars,
    tags: [],
  },
  {
    id: 'open-claw-me',
    name: 'Open-Claw.me',
    company: '社区',
    category: ['社区网站', '免费'],
    
    description: '独立社区资源网站，提供教程和指南',
    url: 'https://open-claw.me/zh/about',
    stars: defaultStars,
    tags: ['chinese'],
  },
  {
    id: 'awesome-openclaw',
    name: 'Awesome OpenClaw',
    company: 'GitHub',
    category: ['社区网站', '免费'],
    
    description: 'OpenClaw 生态资源汇总',
    url: 'https://github.com/vincentkoc/awesome-openclaw',
    stars: defaultStars,
    tags: [],
  },
  {
    id: 'clawlodge',
    name: 'Clawlodge',
    company: 'Memepilot',
    category: ['社区网站', '免费'],
    
    description: '社区共享和发现优化的 OpenClaw 配置',
    url: 'https://github.com/memepilot/clawlodge',
    stars: defaultStars,
    tags: [],
  },
]

// 生态工具
export const ecosystemProducts: Product[] = [
  {
    id: 'clawhub',
    name: 'ClawHub 官方技能市场',
    company: 'ClawHub',
    category: ['生态工具', '免费'],
    
    description: '官方技能注册中心，类似 npm 之于 Node.js',
    url: 'https://clawhub.ai/',
    skills: '19000+',
    stars: defaultStars,
    tags: ['skills-market'],
  },
  {
    id: 'openclaw-skills',
    name: 'OpenClaw Skills 官方仓库',
    company: 'OpenClaw',
    category: ['生态工具', '免费'],
    
    description: '官方技能 GitHub 仓库',
    url: 'https://github.com/openclaw/skills',
    stars: defaultStars,
    tags: ['skills-market'],
  },
  {
    id: 'openclawskills-best',
    name: 'openclawskills.best',
    company: '社区',
    category: ['生态工具', '免费'],
    
    description: '安全过滤器，适配生产环境',
    url: 'https://openclawskills.best',
    stars: defaultStars,
    tags: ['skills-market'],
  },
  {
    id: 'skills-sh',
    name: 'Skills.sh',
    company: 'Skills.sh',
    category: ['生态工具', '免费'],
    
    description: '精选技能市场，官方技能 51+，安装 6.4K+',
    url: 'https://skills.sh',
    skills: '51+',
    stars: defaultStars,
    tags: ['skills-market'],
  },
  {
    id: 'lobehub',
    name: 'LobeHub',
    company: 'LobeHub',
    category: ['生态工具', '免费'],
    
    description: '精选垂类技能平台',
    url: 'https://lobehub.com',
    stars: defaultStars,
    tags: ['skills-market'],
  },
  {
    id: 'voltagent',
    name: 'VoltAgent',
    company: 'VoltAgent',
    category: ['生态工具', '免费'],
    
    description: '精选垂类技能平台',
    url: 'https://voltagent.com',
    stars: defaultStars,
    tags: ['skills-market'],
  },
  {
    id: 'clawsphere',
    name: 'Clawsphere',
    company: 'Clawsphere',
    category: ['生态工具', '免费'],
    
    description: 'OpenClaw 代理职业声誉和劳动市场',
    url: 'https://clawsphere.io',
    stars: defaultStars,
    tags: [],
  },
  {
    id: 'openclaw-cn-skills',
    name: 'OpenClaw 中文技能市场',
    company: 'Clawd',
    category: ['生态工具', '免费'],
    
    description: '用户自发布技能，经过真实 Agent 环境测试',
    url: 'http://clwd.org.cn/skills',
    stars: defaultStars,
    tags: ['skills-market', 'chinese'],
  },
]

export const products: Product[] = [
  ...openSourceProducts,
  ...cloudProducts,
];

export const featuredProducts = products