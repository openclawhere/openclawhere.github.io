#!/usr/bin/env tsx
/**
 * 获取产品网站缩略图
 * 为 products.ts 中没有 image 或 image 为空的条目生成截图
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.join(__dirname, '..');

// 动态导入 products.ts
const productsPath = path.join(PROJECT_ROOT, 'src', 'data', 'products.ts');

interface Product {
  id: string;
  name: string;
  url?: string;
  image?: string;
  category: string[];
}

// 简化的截图函数（实际项目中可以使用 puppeteer 或类似工具）
async function captureScreenshot(url: string, outputPath: string): Promise<boolean> {
  console.log(`📸 截图: ${url} -> ${outputPath}`);
  
  // 这里可以集成实际的截图工具，如:
  // - puppeteer
  // - playwright  
  // - screenshotAPI 服务
  
  // 临时方案：创建一个占位符
  const placeholderSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">
    <rect width="100%" height="100%" fill="#f0f0f0"/>
    <text x="50%" y="50%" text-anchor="middle" font-size="24" fill="#666">
      ${url.replace(/https?:\/\//, '').substring(0, 30)}
    </text>
  </svg>`;
  
  fs.writeFileSync(outputPath.replace('.png', '.svg').replace('.jpg', '.svg'), placeholderSvg);
  return true;
}

async function main() {
  console.log('🚀 开始更新网站缩略图...\n');
  
  // 读取 products.ts 内容
  const content = fs.readFileSync(productsPath, 'utf-8');
  
  // 提取 products 数组（简化解析）
  const productsMatch = content.match(/export const products: Product\[\] = (\[[\s\S]*?\]);/);
  if (!productsMatch) {
    console.error('❌ 无法解析 products.ts');
    process.exit(1);
  }
  
  // 使用更安全的方式获取产品数据
  // 这里简化处理，实际应该完整解析 TypeScript
  console.log('📦 已加载产品数据\n');
  
  const publicDir = path.join(PROJECT_ROOT, 'public', 'screenshots');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  // 解析 products 数组（简化版本）
  const productsLines = content.split('\n');
  let inProducts = false;
  let currentProduct: Partial<Product> = {};
  
  for (let i = 0; i < productsLines.length; i++) {
    const line = productsLines[i];
    
    if (line.includes('export const products')) {
      inProducts = true;
      continue;
    }
    
    if (!inProducts) continue;
    
    // 简单的属性提取
    const idMatch = line.match(/id:\s*['"]([^'"]+)['"]/);
    const urlMatch = line.match(/url:\s*['"](https?:\/\/[^'"]+)['"]/);
    const imageMatch = line.match(/image:\s*['"]([^'"]*)['"]/);
    
    if (idMatch) currentProduct.id = idMatch[1];
    if (urlMatch) currentProduct.url = urlMatch[1];
    if (imageMatch) currentProduct.image = imageMatch[1];
    
    // 检测产品对象结束
    if (line.trim() === '},' || line.trim() === '}') {
      if (currentProduct.id && currentProduct.url) {
        // 如果没有图片或图片为空，尝试获取截图
        if (!currentProduct.image || currentProduct.image === '') {
          console.log(`📝 产品: ${currentProduct.name || currentProduct.id}`);
          console.log(`   URL: ${currentProduct.url}`);
          
          const screenshotName = `${currentProduct.id}.svg`;
          const screenshotPath = path.join(publicDir, screenshotName);
          
          if (!fs.existsSync(screenshotPath)) {
            await captureScreenshot(currentProduct.url, screenshotPath);
          } else {
            console.log(`   ⏭️  已存在，跳过`);
          }
          console.log('');
        }
      }
      currentProduct = {};
    }
  }
  
  console.log('✅ 缩略图更新完成！');
}

main().catch(console.error);
