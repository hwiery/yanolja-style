// sentry.client.config.js
// Sentry 클라이언트 초기화 설정
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN, // 클라이언트용 DSN
  tracesSampleRate: 1.0, // 성능 모니터링 샘플링 레이트
  // debug: process.env.NODE_ENV !== 'production',
}); 