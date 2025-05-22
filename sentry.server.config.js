// sentry.server.config.js
// Sentry 서버 초기화 설정
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.SENTRY_DSN, // 서버용 DSN (환경 변수에 설정)
  tracesSampleRate: 1.0, // 성능 모니터링 샘플링 레이트
  // 환경에 따라 debug 모드 활성화할 수 있음
}); 