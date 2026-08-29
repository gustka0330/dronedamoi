# DRONEDAMOI DRONE SCHOOL (드론다모이 드론스쿨)

> **교실에서 시작해 세계무대까지. 아이들의 가능성을 드론으로 띄웁니다.**  
> 현직 초등학교 교사이자 학생드론교육 전문가 **윤현삼**의 공식 웹사이트 플랫폼입니다.

---

## 📌 프로젝트 개요

- **브랜드명**: DRONEDAMOI DRONE SCHOOL
- **대표/전문가**: 윤현삼 (현직 초등학교 교사 · 2023 FIDA World Championship Class 20 세계대회 우승팀 Coach)
- **타깃 고객**: 초등학교, 중학교, 시·도 교육청, 교육지원청, 교원연수원, 영재교육원, 학교자율시간, 늘봄학교, 미래교육 담당자
- **핵심 목표**: 학생 드론수업, 코딩, 항공촬영, 드론축구, 융합 PBL, 교원 직무연수 및 프로젝트 협업 문의 전환

---

## 🛠 기술 스택

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **SEO & Data**: Schema.org JSON-LD (Person & EducationalOrganization), Dynamic Sitemap, Robots.txt

---

## 🚀 빠른 시작

### 1. 의존성 설치
```bash
npm install
```

### 2. 로컬 개발 서버 실행
```bash
npm run dev
```
브라우저에서 `http://localhost:3000` 접속

### 3. 프로덕션 빌드 & 테스트
```bash
npm run build
npm run start
```

---

## 📂 프로젝트 구조

```text
dronedamoi/
├── public/
│   ├── images/              # 사진 및 그래픽 에셋 (hero.jpg, profile-main.jpg 등)
│   └── video/               # 히어로 배경 영상 (hero.mp4)
├── src/
│   ├── app/
│   │   ├── layout.tsx       # 공통 레이아웃 (SEO, Font, Header, Footer, JSON-LD)
│   │   ├── page.tsx         # 메인 홈 페이지 (13개 핵심 섹션)
│   │   ├── about/           # 윤현삼 소개 & 교육 철학 페이지
│   │   ├── program/         # 6대 교육 프로그램 목록
│   │   │   └── [slug]/      # 프로그램 상세 페이지 (차시별 커리큘럼, FAQ 등)
│   │   ├── achievements/    # 대회 지도 및 연구 성과 타임라인
│   │   ├── portfolio/       # 현장 교육 이야기 및 케이스 스터디
│   │   ├── insight/         # 교육 칼럼 및 인사이트
│   │   │   └── [slug]/      # 칼럼 상세 보기
│   │   ├── contact/         # 교육·연수 상담 문의 폼
│   │   ├── api/contact/     # 상담 신청 접수 API 라우트
│   │   ├── sitemap.ts       # 자동 생성 사이트맵
│   │   └── robots.ts        # 검색엔진 크롤링 규칙
│   ├── components/          # 재사용 가능한 UI 컴포넌트
│   ├── data/                # 데이터 모델 (프로그램, 수상실적, 칼럼, 영상 등)
│   └── types/               # TypeScript 인터페이스
```

---

## ⚙️ 콘텐츠 수정 가이드

### 1. 이미지 교체 방법
`/public/images/` 디렉터리에 동일한 파일명으로 사진을 넣으면 즉시 사이트에 반영됩니다.
- `hero.jpg`: 메인 히어로 배경 사진 (1920x1080 권장)
- `profile-main.jpg`: 윤현삼 프로필 사진 (800x1000 권장)
- `world-championship.jpg`: 2023 FIDA 세계대회 우승팀 지도 사진
- `achievement-2022.jpg` ~ `achievement-2024.jpg`: 대회 지도 사진
- `portfolio-school.jpg`, `portfolio-coding.jpg`, `portfolio-media.jpg`, `portfolio-project.jpg`, `portfolio-training.jpg`
- `instagram-01.jpg` ~ `instagram-06.jpg`: 인스타그램 피드용 정방형 사진

> **안내**: 이미지가 아직 없거나 로드되지 않아도 `ImageWithFallback` 컴포넌트가 내장되어 있어 앱이 절대 깨지지 않고 미려한 전용 그래픽 카드로 자동 표시됩니다.

### 2. 히어로 배경 영상 추가 방법
`/public/video/hero.mp4` 경로에 1080p MP4 비디오를 배치하면 데스크톱 히어로 영역에서 배경 영상이 자동 재생(muted loop)됩니다.

### 3. 교육 프로그램 수정
`src/data/programs.ts` 파일에서 차시별 커리큘럼, 교육 목표, 활동 내용, 권장 학년, FAQ를 간편하게 추가/수정할 수 있습니다.

### 4. 수상 및 지도 이력 수정
`src/data/achievements.ts` 파일에서 연도별 대회명, 역할(`우승팀 코치 윤현삼`, `학생 지도`), 지도 스토리를 수정할 수 있습니다.

### 5. 유튜브 영상 목록 수정
`src/data/videos.ts` 파일에서 영상 제목, 카테고리, 유튜브 URL을 수정할 수 있습니다.

### 6. SNS 링크 및 기본 사이트 정보 수정
`src/data/siteConfig.ts` 파일에서 인스타그램, 유튜브 채널 URL, 이메일, 브랜드 슬로건을 수정할 수 있습니다.

### 7. 문의 폼 Backend (Supabase / Email) 연동 위치
`src/app/api/contact/route.ts` 파일에 Supabase Client나 Resend/Nodemailer 이메일 발송 코드를 연결할 수 있도록 준비되어 있습니다.

```typescript
// src/app/api/contact/route.ts
// Supabase DB 저장 예시:
// const { data, error } = await supabase.from('inquiries').insert([body]);
```

---

## 🔒 브랜드 및 표현 원칙 준수

1. **지도자 표기 원칙**:
   - 본인이 선수로 우승한 것처럼 표기하지 않으며, 항상 **"우승팀 코치 윤현삼"**, **"우승팀 지도"**, **"학생 지도"**로 명확히 표기합니다.
2. **학생 중심 교육 철학**:
   - 드론을 단순한 기술이나 목적이 아닌 **"배움과 성장을 위한 도구"**로 정의합니다.

---

## 📄 라이선스
Copyright © 2026 DRONEDAMOI DRONE SCHOOL. All rights reserved.
