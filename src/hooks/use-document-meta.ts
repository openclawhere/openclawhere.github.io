import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
}

const DEFAULT_TITLE = 'OpenClaw 龙虾圈 - 全民养虾，一站劝退';
const DEFAULT_DESCRIPTION =
  '一站式开源龙虾养殖平台，汇聚生态产品、云端服务、技能社区和学习资料，让人人都能轻松养虾，快乐养虾！';

/**
 * Dynamically updates document title and meta description for SEO.
 * Helps search engines understand page content when they can execute JS.
 */
export function useDocumentMeta({ title, description }: SEOProps = {}) {
  useEffect(() => {
    const fullTitle = title ? `${title} | OpenClaw 龙虾圈` : DEFAULT_TITLE;
    document.title = fullTitle;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description ?? DEFAULT_DESCRIPTION);
    }

    // Update og:title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', fullTitle);
    }

    // Update og:description
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description ?? DEFAULT_DESCRIPTION);
    }

    return () => {
      // Restore defaults when component unmounts
      document.title = DEFAULT_TITLE;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', DEFAULT_DESCRIPTION);
    };
  }, [title, description]);
}
