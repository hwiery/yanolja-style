const { withSentryConfig } = require('@sentry/nextjs');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.builder.io', 'via.placeholder.com', 'source.unsplash.com', 'picsum.photos'],
  },
  experimental: {
    appDir: true,
  },
};

/**
 * @type {import('@sentry/nextjs').SentryWebpackPluginOptions}
 * 추가 Sentry 웹팩 플러그인 옵션 설정
 */
const sentryWebpackPluginOptions = {
  silent: true, // 빌드 출력에서 Sentry 관련 로그 숨김
};

// Sentry와 Next.js를 연동하여 에러 모니터링 활성화
module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions); 