# 운영 워크플로우

이 문서는 로컬 개발부터 운영 환경 배포까지의 전체 워크플로우를 설명합니다.

## 1. 데이터 준비 (CSV)

1. `prisma/data/accommodations.csv` 파일을 업데이트합니다.
2. 이미지 파일을 `public/images` 디렉토리에 저장합니다.
3. CSV의 `image_url` 컬럼을 `/images/...` 경로로 설정합니다.

## 2. DB 시드

```bash
npm run seed
```

- `prisma/data/accommodations.csv`의 모든 데이터가 DB에 삽입됩니다.

## 3. 개발 환경

```bash
npm run dev
```

- 웹사이트: `http://localhost:3000`
- API: `http://localhost:3000/api/accommodations`

## 4. 백엔드 배포 (Railway)

1. GitHub에 코드 푸시 (`prisma/schema.prisma`, `app/api` 등 포함)
2. Railway 계정에 로그인하여 새 프로젝트 생성
3. GitHub 리포지토리 연결 후 프로젝트 임포트
4. 환경 변수 설정:
   - `DATABASE_URL`
   - `SENTRY_DSN`
5. 실행 명령 설정:
   ```bash
   npm run build && npm run start
   ```
6. Railway 대시보드에서 URL을 확인하여 API 동작 검증

## 5. 프론트엔드 배포 (Vercel)

1. GitHub에 코드 푸시
2. Vercel 계정에 로그인 후 새 프로젝트 임포트
3. 환경 변수 설정:
   - `DATABASE_URL`
   - `NEXT_PUBLIC_SENTRY_DSN`
4. 배포된 URL에서 웹사이트 동작 확인 