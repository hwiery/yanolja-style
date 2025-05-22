# 야놀자 스타일 프론트엔드 프로젝트

이 프로젝트는 야놀자와 유사한 여행 예약 서비스의 프론트엔드를 Next.js와 TailwindCSS를 활용하여 구현한 것입니다.

## 프로젝트 개요

본 프로젝트는 여행 예약 서비스의 프론트엔드를 구현하였으며, 다음과 같은 핵심 기능을 제공합니다:

- 호텔/리조트/펜션 등 다양한 숙박 시설 예약
- 레저/티켓 구매
- 공연/전시 정보 제공 및 예약
- 프로모션 및 특가 정보 제공

## 기술 스택

- **프레임워크**: Next.js 14
- **스타일링**: TailwindCSS
- **언어**: TypeScript
- **상태 관리**: React의 내장 상태 관리 기능 사용
- **컴포넌트 라이브러리**: 자체 제작 UI 컴포넌트 사용

## 설치 및 실행 방법

### 사전 요구사항

- Node.js (v18 이상)
- npm 또는 yarn

### 설치

```bash
# 저장소 클론
git clone https://github.com/hwiery/yanolja-style.git
cd yanolja-style

# 의존성 설치
npm install
# 또는
yarn install
```

### 실행 및 스크립트

아래 명령어를 순서대로 실행하여 데이터베이스, 이미지, 재고 등을 초기화하고 개발 서버를 실행합니다:

```bash
# CSV 목업 데이터 생성
npm run generate-csv

# DB 시드
npm run seed

# 재고 랜덤 할당
npm run assign-stock

# 이미지 URL 업데이트
npm run update-imageurls

# Prisma 스키마 DB 반영
npx prisma db push

# 개발 서버 실행
npm run dev
```

## 관리자 페이지

관리자용 페이지는 아래 경로에서 확인합니다:

- 관리자 목록: `http://localhost:3000/admin`
- 관리자 상세: `http://localhost:3000/admin/accommodations/{id}`

## 예약 시뮬레이션

상품 상세 페이지에서 "예약하기" 버튼을 클릭하여 재고가 1씩 차감되는지 확인할 수 있습니다.  
재고가 0인 경우 버튼이 비활성화되고, alert로 안내됩니다.

## 데이터베이스 설정

### Railway 프로젝트 생성 및 PostgreSQL 추가
1. Railway에 접속하여 새 프로젝트를 생성합니다.
2. PostgreSQL 플러그인을 추가하여 데이터베이스 인스턴스를 생성합니다.
3. 생성된 데이터베이스의 `DATABASE_URL`을 복사합니다.

### 로컬 .env.local 설정
프로젝트 루트에 생성된 `.env.local` 파일에 아래 내용을 추가하거나 갱신합니다:
```bash
DATABASE_URL=<복사한 DATABASE_URL>
```

## 프로젝트 구조

```
/
├── app/                   # Next.js 앱 디렉토리
│   ├── layout.tsx         # 루트 레이아웃
│   ├── page.tsx           # 메인 페이지
│   └── globals.css        # 전역 스타일
├── components/            # 컴포넌트 디렉토리
│   ├── ui/                # 재사용 가능한 UI 컴포넌트
│   │   ├── Button.tsx     # 버튼 컴포넌트
│   │   ├── Card.tsx       # 카드 컴포넌트
│   │   ├── TabButton.tsx  # 탭 버튼 컴포넌트
│   │   └── ImageSlider.tsx# 이미지 슬라이더 컴포넌트
│   ├── BannerSection.tsx  # 메인 배너 섹션
│   ├── BottomNavigation.tsx # 하단 네비게이션
│   ├── CategoryNavigation.tsx # 카테고리 네비게이션
│   ├── HotLeisureSection.tsx # 인기 레저 섹션
│   ├── HotPerformanceSection.tsx # 인기 공연 섹션
│   ├── SpecialDealSection.tsx # 특가 섹션
│   ├── UrbanVacationSection.tsx # 도시 휴가 섹션
│   ├── WeatherSection.tsx # 날씨 관련 섹션
│   └── WLight.tsx         # 메인 컴포넌트
├── public/                # 정적 파일 디렉토리
│   └── images/            # 이미지 파일
│       ├── banners/       # 배너 이미지
│       ├── hotels/        # 호텔 이미지
│       ├── icons/         # 아이콘 이미지
│       ├── leisure/       # 레저 이미지
│       └── promotions/    # 프로모션 이미지
├── .gitignore             # Git 무시 파일 목록
├── next-env.d.ts          # Next.js TypeScript 정의
├── package.json           # 프로젝트 의존성 및 스크립트
├── postcss.config.js      # PostCSS 설정
├── tailwind.config.js     # TailwindCSS 설정
└── tsconfig.json          # TypeScript 설정
```

## 개발 진행 상황

### 완료된 작업

1. **프로젝트 구조 개선**
   - Next.js 프로젝트 설정 완료
   - TailwindCSS 설정 완료
   - 컴포넌트 파일들을 components 폴더로 구조화
   - public 폴더 생성 및 이미지 디렉토리 구조 설정

2. **React 의존성 문제 해결**
   - React import 경로 수정
   - 컴포넌트 타입 정의 수정
   - 클라이언트 컴포넌트와 서버 컴포넌트 구분 ('use client' 지시어 적용)

3. **컴포넌트 재구성**
   - WLight.tsx 컴포넌트를 더 작은 컴포넌트로 분리
   - 컴포넌트 간 중복 코드 제거
   - 공통 UI 요소를 재사용 가능한 컴포넌트로 추출
   - 재사용 가능한 UI 컴포넌트 생성 (Button, Card, TabButton, ImageSlider)

### 다음 진행해야 할 작업

1. **이미지 최적화**
   - 외부 CDN 이미지 URL을 내부 이미지로 대체 (각 컴포넌트별 필요한 이미지 다운로드)
   - Next.js의 Image 컴포넌트 사용으로 최적화
   - 이미지 크기 및 품질 최적화

2. **UI 정리 및 사용자 정의**
   - 각 섹션의 불필요한 요소 제거 및 간소화
   - 디자인 일관성 유지를 위한 색상 및 스타일 통일
   - 원하는 섹션만 선별하여 사용자 정의 레이아웃 구성

3. **기능 구현**
   - 카테고리, 필터 등의 탭 실제 작동 기능 구현
   - 검색 기능 구현
   - 필요한 상태 관리 추가

4. **반응형 디자인 개선**
   - 다양한 화면 크기에 대응하는 반응형 디자인 추가
   - 모바일 우선 디자인 보완

5. **접근성 개선**
   - 시맨틱 HTML 요소 사용 확대
   - 모든 이미지에 alt 텍스트 추가
   - ARIA 속성 적절히 사용

## 커스터마이징 가이드

프로젝트를 자신의 입맛에 맞게 커스터마이징하는 방법입니다:

### 1. 필요한 섹션만 선택하기

`components/WLight.tsx` 파일에서 원하지 않는 섹션을 제거하거나 순서를 변경할 수 있습니다:

```tsx
function WLight() {
  return (
    <main className="...">
      <HeaderSection />
      
      {/* 원하는 섹션만 유지하고 나머지는 제거 */}
      <BannerSection />
      <CategoryNavigation />
      <HotLeisureSection />
      {/* ... */}
      
      <FooterSection />
    </main>
  );
}
```

### 2. 이미지 데이터 준비하기

1. **이미지 다운로드**: 프로젝트에 필요한 이미지를 수집하고 `public/images` 디렉토리의 해당 하위 폴더에 저장합니다.
2. **이미지 참조 업데이트**: 각 컴포넌트에서 외부 CDN URL 대신 로컬 이미지 경로를 사용하도록 업데이트합니다.

예시 코드:
```tsx
// 변경 전
const images = [
  {
    src: "https://cdn.example.com/image.jpg",
    alt: "이미지 설명"
  }
];

// 변경 후
const images = [
  {
    src: "/images/banners/main-banner.jpg",
    alt: "이미지 설명"
  }
];
```

### 3. 컬러 테마 커스터마이징

`tailwind.config.js` 파일을 수정하여 프로젝트 전반의 색상 테마를 변경할 수 있습니다:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#색상코드',
          DEFAULT: '#색상코드',
          dark: '#색상코드',
        },
        secondary: {
          light: '#색상코드',
          DEFAULT: '#색상코드',
          dark: '#색상코드',
        },
        // 추가 색상 정의
      },
    },
  },
  // 기타 설정
};
```

## 라이센스

이 프로젝트는 MIT 라이센스 하에 제공됩니다. 자세한 내용은 LICENSE 파일을 참조하세요.

## 기여 방법

1. 이 저장소를 포크합니다.
2. 새 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`).
3. 변경사항을 커밋합니다 (`git commit -m 'Add some amazing feature'`).
4. 브랜치에 푸시합니다 (`git push origin feature/amazing-feature`).
5. Pull Request를 생성합니다.

## API 테스트

### 로컬 환경
아래 명령어로 API가 정상 동작하는지 확인합니다:
```bash
# 전체 숙소 목록 조회
curl http://localhost:3000/api/accommodations

# 특정 숙소 상세 조회 (id는 실제 UUID로 변경)
curl http://localhost:3000/api/accommodations/<id>
```

### 프로덕션 환경
배포된 URL에 아래 명령을 실행하여 API 응답을 확인합니다:
```bash
# 전체 숙소 목록 조회
curl https://<your-vercel-domain>/api/accommodations

# 특정 숙소 상세 조회
curl https://<your-vercel-domain>/api/accommodations/<id>
```

## 로깅 및 모니터링

Sentry를 통한 오류 및 성능 모니터링 설정:

1. 환경 변수 설정 (`.env.local`):
   ```bash
   SENTRY_DSN=<your server DSN>
   NEXT_PUBLIC_SENTRY_DSN=<your public DSN>
   ```
2. Sentry 초기화 파일 확인:
   - `sentry.server.config.js`
   - `sentry.client.config.js`
3. 배포 후 Sentry 대시보드에서 에러 및 트랜잭션 확인

## 배포

배포는 Vercel을 권장합니다. 아래 순서를 따라주세요:

1. GitHub에 저장소를 푸시합니다.
2. Vercel 계정 연결 후 프로젝트 임포트.
3. 환경 변수 설정:
   - `DATABASE_URL`
   - `SENTRY_DSN`
   - `NEXT_PUBLIC_SENTRY_DSN`
4. 빌드 및 배포 완료. (자동 배포 활성화)

## 백엔드 배포 (Railway)

Railway에 백엔드 서비스를 배포하려면 다음 단계를 따릅니다:

1. GitHub에 백엔드 코드를 푸시합니다. (`prisma/schema.prisma`, `app/api` 코드 포함)
2. Railway 계정에 로그인하여 새 프로젝트 생성
3. GitHub 리포지토리 연결 후 프로젝트 임포트
4. 환경 변수 설정:
   - `DATABASE_URL`
   - `SENTRY_DSN`
5. 실행 명령 설정:
   ```bash
   npm run build && npm run start
   ```
6. Railway 대시보드에서 배포된 URL을 확인하여 API가 동작하는지 검증합니다. 