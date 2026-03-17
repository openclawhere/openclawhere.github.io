import puppeteer from 'puppeteer';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { openSourceProducts, cloudProducts, communityProducts, ecosystemProducts } from '../src/data/products.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PRODUCT_DIR = path.resolve(__dirname, '../public/product');
const ECOSYSTEM_DIR = path.resolve(__dirname, '../public/ecosystem');

// Ensure directories exist
if (!fs.existsSync(PRODUCT_DIR)) {
  fs.mkdirSync(PRODUCT_DIR, { recursive: true });
}
if (!fs.existsSync(ECOSYSTEM_DIR)) {
  fs.mkdirSync(ECOSYSTEM_DIR, { recursive: true });
}

const productItems = [...openSourceProducts, ...cloudProducts].map(p => ({ ...p, dir: PRODUCT_DIR }));
const ecosystemItems = [...communityProducts, ...ecosystemProducts].map(p => ({ ...p, dir: ECOSYSTEM_DIR }));
const allItems = [...productItems, ...ecosystemItems];

async function captureScreenshots() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  console.log(`Found ${allItems.length} products to check...`);

  for (const item of allItems) {
    if (!item.url) {
      console.log(`Skipping ${item.name} (No URL provided)`);
      continue;
    }

    // Skip discord/github resources generally or just try. We try all that have URL.
    if (item.url.includes('discord.com') || item.url.includes('github.com')) {
        console.log(`Skipping ${item.name} (Probably not a product landing page)`);
        continue;
    }

    const outputPath = path.join(item.dir, `${item.id}.webp`);
    
    // Optional: skip if already exists to save time (uncomment if needed)
    // if (fs.existsSync(outputPath)) {
    //   console.log(`Skipping ${item.name} (Screenshot already exists)`);
    //   continue;
    // }

    console.log(`Processing ${item.name}... (${item.url})`);

    try {
      const page = await browser.newPage();
      
      // Set viewport for a 16:9 aspect ratio standard desktop
      await page.setViewport({ width: 1280, height: 720 });
      
      // Navigate and wait for network idle to ensure page is loaded
      await page.goto(item.url, { 
        waitUntil: 'networkidle2',
        timeout: 30000 
      });

      // Capture screenshot as buffer
      const screenshotBuffer = await page.screenshot({ type: 'jpeg', quality: 90 });
      await page.close();

      // Optimize and resize using sharp
      await sharp(screenshotBuffer)
        .resize({ width: 800, height: 450, fit: 'cover' })
        .webp({ quality: 80 })
        .toFile(outputPath);

      console.log(`✅ Saved optimized screenshot for ${item.name}`);
    } catch (error: unknown) {
      console.error(`❌ Failed to process ${item.name}:`, (error as Error).message);
    }
  }

  await browser.close();
  console.log('Finished capturing screenshots!');
}

captureScreenshots().catch(console.error);
