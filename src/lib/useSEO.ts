import { useEffect } from 'react';

const BASE_URL = 'https://iamsolo-test1.web.app';
const DEFAULT_IMAGE = `${BASE_URL}/images/characters/f1_youngsook.png`;
const SITE_NAME = '솔로나라 심리테스트';
const DEFAULT_TITLE = '솔로나라에서 나는 어떤 캐릭터일까? | 무료 연애 성향 심리테스트';
const DEFAULT_DESCRIPTION =
  '나만의 연애 성향 캐릭터를 찾아보세요! 심리학 원형(Archetype) 이론을 기반으로 한 12가지 데이트 스타일 분석 심리테스트. 무료로 나의 연애 스타일과 찰떡궁합을 확인하세요.';

interface SEOOptions {
  /** 페이지 고유 제목 (사이트명은 자동 추가됨) */
  title?: string;
  description?: string;
  /** 절대 경로 이미지 URL */
  image?: string;
  /** 경로 부분만 입력 (예: '/result'). 미입력 시 BASE_URL */
  path?: string;
  type?: 'website' | 'article';
  /** noindex 처리 여부 (개인정보처리방침 등) */
  noIndex?: boolean;
}

function setMeta(selector: string, content: string) {
  const el = document.querySelector(selector) as HTMLMetaElement | null;
  if (el) el.setAttribute('content', content);
}

export function useSEO({
  title,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  path,
  type = 'website',
  noIndex = false,
}: SEOOptions = {}) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
    const fullUrl = path ? `${BASE_URL}${path}` : BASE_URL;

    document.title = fullTitle;

    setMeta('meta[name="description"]', description);
    setMeta('meta[name="robots"]', noIndex ? 'noindex, nofollow' : 'index, follow');

    // Open Graph
    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:image"]', image);
    setMeta('meta[property="og:url"]', fullUrl);
    setMeta('meta[property="og:type"]', type);

    // Twitter
    setMeta('meta[name="twitter:title"]', fullTitle);
    setMeta('meta[name="twitter:description"]', description);
    setMeta('meta[name="twitter:image"]', image);
    setMeta('meta[name="twitter:url"]', fullUrl);

    // Canonical
    const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) canonical.setAttribute('href', fullUrl);

    return () => {
      // 언마운트 시 기본값으로 복원
      document.title = DEFAULT_TITLE;
      setMeta('meta[name="description"]', DEFAULT_DESCRIPTION);
      setMeta('meta[property="og:title"]', DEFAULT_TITLE);
      setMeta('meta[property="og:description"]', DEFAULT_DESCRIPTION);
      setMeta('meta[property="og:image"]', DEFAULT_IMAGE);
      setMeta('meta[property="og:url"]', BASE_URL);
      setMeta('meta[name="twitter:title"]', DEFAULT_TITLE);
      setMeta('meta[name="twitter:description"]', DEFAULT_DESCRIPTION);
      setMeta('meta[name="twitter:image"]', DEFAULT_IMAGE);
      const c = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (c) c.setAttribute('href', `${BASE_URL}/`);
    };
  }, [title, description, image, path, type, noIndex]);
}
