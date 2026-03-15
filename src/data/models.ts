export const modelList = [
    {
      "id": "model-provider-001",
      "name": "OpenAI",
      "company": "OpenAI",
      "category": ["云产品", "付费"],
      "description": "OpenClaw内置原生支持的核心模型提供商，支持GPT-5.2、GPT-4o等全系列模型，提供最完善的工具调用与流式响应能力，需API密钥认证。",
      "url": "https://openai.com",
      "tags": ["原生支持", "OpenAI协议", "工具调用", "流式响应", "全系列模型"]
    },
    {
      "id": "model-provider-002",
      "name": "Anthropic",
      "company": "Anthropic",
      "category": ["云产品", "付费"],
      "description": "OpenClaw内置原生支持，主打Claude Opus 4.6、Claude Sonnet 4.5等长文本模型，支持200K+上下文，适合复杂推理与内容创作任务。",
      "url": "https://anthropic.com",
      "tags": ["原生支持", "Anthropic协议", "长文本处理", "复杂推理", "内容创作"]
    },
    {
      "id": "model-provider-003",
      "name": "Google Gemini",
      "company": "Google",
      "category": ["云产品", "免费", "付费"],
      "description": "支持Gemini 2.0 Flash、Gemini Flash-Lite等多模态模型，OpenClaw内置适配，提供图像理解与生成能力，适合多模态交互场景。",
      "url": "https://ai.google.dev",
      "tags": ["原生支持", "Google协议", "多模态", "图像理解", "免费额度"]
    },
    {
      "id": "model-provider-004",
      "name": "Moonshot AI (Kimi)",
      "company": "月之暗面",
      "category": ["云产品", "免费", "付费"],
      "description": "国产长文本处理标杆，原生支持256K上下文，OpenClaw内置适配，提供Kimi K2.5全系列模型，Agent协作能力突出，支持中文优化。",
      "url": "https://moonshot.cn",
      "tags": ["国产大模型", "长文本处理", "中文优化", "Agent协作", "内置适配"]
    },
    {
      "id": "model-provider-005",
      "name": "MiniMax",
      "company": "MiniMax",
      "category": ["云产品", "免费", "付费"],
      "description": "国产多模态模型提供商，OpenClaw内置支持M2.5系列模型，主打情感交互与语音视频生成，提供50G云存储，与飞书/钉钉生态直连。",
      "url": "https://minimax.chat",
      "tags": ["国产大模型", "多模态", "情感交互", "语音生成", "生态直连"]
    },
    {
      "id": "model-provider-006",
      "name": "智谱AI (GLM)",
      "company": "智谱AI",
      "category": ["云产品", "免费", "付费"],
      "description": "国产主流模型提供商，OpenClaw内置适配GLM-4系列模型，GLM-4-Flash提供2000万+Token不限量免费额度，适合国内用户快速上手。",
      "url": "https://bigmodel.cn",
      "tags": ["国产大模型", "中文优化", "免费额度", "内置适配", "GLM系列"]
    },
    {
      "id": "model-provider-007",
      "name": "阿里云百炼 (Qwen)",
      "company": "阿里云",
      "category": ["云产品", "免费", "付费"],
      "description": "阿里通义千问系列模型，OpenClaw通过兼容模式接入，支持qwen-turbo、qwen-plus、qwen-max等，提供高速推理与多模态能力。",
      "url": "https://dashscope.aliyun.com",
      "tags": ["国产大模型", "兼容模式", "多模态", "高速推理", "千问系列"]
    },
    {
      "id": "model-provider-008",
      "name": "DeepSeek",
      "company": "深度求索",
      "category": ["云产品", "免费", "付费"],
      "description": "国产高性能模型提供商，OpenClaw支持V3系列模型，提供超强代码生成与数学推理能力，兼容OpenAI协议，配置简单。",
      "url": "https://deepseek.com",
      "tags": ["国产大模型", "代码生成", "数学推理", "OpenAI兼容", "高速推理"]
    },
    {
      "id": "model-provider-009",
      "name": "火山引擎方舟 (ByteDance)",
      "company": "字节跳动",
      "category": ["云产品", "免费", "付费"],
      "description": "OpenClaw官方深度合作，支持豆包系列模型，提供doubao-pro-128k等高性能模型，适合国内低延迟访问，支持图片理解能力。",
      "url": "https://ark.volcengine.com",
      "tags": ["国产大模型", "官方合作", "低延迟", "图片理解", "豆包系列"]
    },
    {
      "id": "model-provider-010",
      "name": "OpenRouter",
      "company": "OpenRouter",
      "category": ["云产品", "免费", "付费"],
      "description": "聚合型模型中转服务，OpenClaw内置支持，一键接入200+模型，提供统一API与额度管理，适合测试不同模型性能与效果。",
      "url": "https://openrouter.ai",
      "tags": ["聚合服务", "多模型接入", "统一API", "额度管理", "内置支持"]
    },
    {
      "id": "model-provider-011",
      "name": "PinCC",
      "company": "PinCC团队",
      "category": ["云产品", "免费", "付费"],
      "description": "Claude专用中转服务，OpenClaw支持通过自定义Provider接入，提供更稳定的国内访问通道，支持Claude全系列模型与工具调用。",
      "url": "https://pincc.ai",
      "tags": ["中转服务", "Claude专用", "国内访问", "工具调用", "自定义Provider"]
    },
    {
      "id": "model-provider-012",
      "name": "硅基流动 (SiliconFlow)",
      "company": "硅基流动团队",
      "category": ["云产品", "免费", "付费"],
      "description": "国产模型聚合中转平台，OpenClaw兼容接入，支持主流国产模型与海外模型，提供灵活的计费方式与API管理，适合国内开发者。",
      "url": "https://siliconflow.cn",
      "tags": ["中转服务", "国产模型聚合", "灵活计费", "API管理", "国内优化"]
    },
    {
      "id": "model-provider-013",
      "name": "Ollama",
      "company": "Ollama团队",
      "category": ["开源项目", "免费"],
      "description": "本地模型部署工具，OpenClaw支持通过自定义Provider接入，可在本地运行Llama 3、Mistral等开源模型，数据完全本地掌控，隐私安全。",
      "url": "https://ollama.com",
      "tags": ["本地部署", "开源模型", "数据隐私", "自定义Provider", "离线运行"]
    },
    {
      "id": "model-provider-014",
      "name": "litellm",
      "company": "BerriAI",
      "category": ["开源项目", "免费"],
      "description": "模型统一调用网关，OpenClaw支持接入，提供OpenAI兼容接口，可聚合管理不同厂商模型，支持负载均衡与故障转移，适合企业级部署。",
      "url": "https://litellm.ai",
      "tags": ["统一网关", "多模型聚合", "负载均衡", "故障转移", "企业级部署"]
    },
    {
      "id": "model-provider-015",
      "name": "Clauddy",
      "company": "Clauddy团队",
      "category": ["云产品", "免费", "付费"],
      "description": "AI模型管理平台，OpenClaw支持作为自定义Provider接入，提供Anthropic与OpenAI兼容接口，支持模型缓存与成本控制，简化多模型管理。",
      "url": "https://clauddy.com",
      "tags": ["模型管理", "缓存优化", "成本控制", "兼容接口", "自定义Provider"]
    }
  ]