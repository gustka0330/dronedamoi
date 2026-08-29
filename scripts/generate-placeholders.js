/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

const placeholders = [
  { name: 'hero.jpg', title: '교실에서 시작해 세계무대까지', category: 'DRONEDAMOI HERO', color1: '#081526', color2: '#1677FF' },
  { name: 'profile-main.jpg', title: '현직 초등교사 윤현삼', category: 'ABOUT YOON HYUN SAM', color1: '#0F2744', color2: '#0052CC' },
  { name: 'world-championship.jpg', title: '2023 FIDA World Championship 우승', category: 'WORLD CHAMPION COACH', color1: '#1A0B2E', color2: '#7928CA' },
  { name: 'achievement-2022.jpg', title: '구미시장배 전국대회 첫 도전', category: '2022 ACHIEVEMENT', color1: '#0B2239', color2: '#13547A' },
  { name: 'achievement-2023-world.jpg', title: '국토교통부장관배 및 국가대표 선발전', category: '2023 ACHIEVEMENT', color1: '#081526', color2: '#0070F3' },
  { name: 'achievement-2023-school.jpg', title: '교육감배 학교스포츠클럽 우승', category: '2023 SPORTS CLUB', color1: '#052E16', color2: '#10B981' },
  { name: 'achievement-2024.jpg', title: '국토교통부장관기 전국대회 지도', category: '2024 ACHIEVEMENT', color1: '#1C1917', color2: '#EA580C' },
  { name: 'portfolio-world.jpg', title: '세계대회 도전 프로젝트', category: 'DRONE SPORTS', color1: '#1E1B4B', color2: '#4338CA' },
  { name: 'portfolio-school.jpg', title: '교실과 체육관의 정규 드론수업', category: 'EDUCATION', color1: '#082F49', color2: '#0284C7' },
  { name: 'portfolio-coding.jpg', title: '코딩으로 제어하는 3D 자율비행', category: 'DRONE CODING', color1: '#083344', color2: '#0891B2' },
  { name: 'portfolio-media.jpg', title: '하늘에서 담는 학교의 이야기', category: 'DRONE MEDIA', color1: '#134E4A', color2: '#0D9488' },
  { name: 'portfolio-project.jpg', title: '교과와 지역사회 융합 PBL', category: 'DRONE PROJECT', color1: '#3B0764', color2: '#7E22CE' },
  { name: 'portfolio-training.jpg', title: '교사를 위한 현장 맞춤형 직무연수', category: 'TEACHER TRAINING', color1: '#172554', color2: '#2563EB' },
  { name: 'instagram-01.jpg', title: '세계대회 우승 트로피와 학생들', category: 'INSTAGRAM', color1: '#0F172A', color2: '#38BDF8' },
  { name: 'instagram-02.jpg', title: '교실 드론 코딩 자율비행 실습', category: 'INSTAGRAM', color1: '#0F172A', color2: '#38BDF8' },
  { name: 'instagram-03.jpg', title: '체육관 드론축구 맹훈련 현장', category: 'INSTAGRAM', color1: '#0F172A', color2: '#38BDF8' },
  { name: 'instagram-04.jpg', title: '교정 시네마틱 항공촬영 출사', category: 'INSTAGRAM', color1: '#0F172A', color2: '#38BDF8' },
  { name: 'instagram-05.jpg', title: '선생님들과 함께한 직무연수 현장', category: 'INSTAGRAM', color1: '#0F172A', color2: '#38BDF8' },
  { name: 'instagram-06.jpg', title: '학교자율시간 드론 챌린지 발표회', category: 'INSTAGRAM', color1: '#0F172A', color2: '#38BDF8' },
];

function generateSvg(item) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
  <defs>
    <linearGradient id="grad-${item.name.replace(/[^a-z0-9]/gi, '')}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${item.color1}" />
      <stop offset="100%" stop-color="${item.color2}" />
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.07)" stroke-width="1" />
    </pattern>
    <filter id="glow">
      <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <rect width="1200" height="800" fill="url(#grad-${item.name.replace(/[^a-z0-9]/gi, '')})" />
  <rect width="1200" height="800" fill="url(#grid)" />

  <circle cx="200" cy="150" r="180" fill="rgba(55, 183, 255, 0.12)" filter="url(#glow)" />
  <circle cx="1050" cy="650" r="220" fill="rgba(22, 119, 255, 0.15)" filter="url(#glow)" />

  <!-- Drone Graphic Icon -->
  <g transform="translate(600, 320) scale(1.6)" text-anchor="middle">
    <!-- Center Body -->
    <circle cx="0" cy="0" r="28" fill="#1677FF" stroke="#37B7FF" stroke-width="3" />
    <circle cx="0" cy="0" r="14" fill="#FFFFFF" />
    
    <!-- Arms -->
    <line x1="-60" y1="-60" x2="60" y2="60" stroke="#37B7FF" stroke-width="6" stroke-linecap="round" />
    <line x1="60" y1="-60" x2="-60" y2="60" stroke="#37B7FF" stroke-width="6" stroke-linecap="round" />
    
    <!-- Rotors -->
    <circle cx="-60" cy="-60" r="22" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-dasharray="6,4" />
    <circle cx="60" cy="-60" r="22" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-dasharray="6,4" />
    <circle cx="-60" cy="60" r="22" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-dasharray="6,4" />
    <circle cx="60" cy="60" r="22" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-dasharray="6,4" />
  </g>

  <!-- Category Badge -->
  <g transform="translate(600, 480)">
    <rect x="-140" y="-18" width="280" height="36" rx="18" fill="rgba(0, 0, 0, 0.5)" stroke="#37B7FF" stroke-width="1.5" />
    <text x="0" y="5" font-family="-apple-system, BlinkMacSystemFont, 'Pretendard', sans-serif" font-size="14" font-weight="700" fill="#37B7FF" text-anchor="middle" letter-spacing="2">${item.category}</text>
  </g>

  <!-- Title Text -->
  <text x="600" y="560" font-family="-apple-system, BlinkMacSystemFont, 'Pretendard', 'Noto Sans KR', sans-serif" font-size="34" font-weight="800" fill="#FFFFFF" text-anchor="middle">${item.title}</text>
  <text x="600" y="605" font-family="-apple-system, BlinkMacSystemFont, 'Pretendard', sans-serif" font-size="18" font-weight="500" fill="rgba(255, 255, 255, 0.75)" text-anchor="middle">DRONEDAMOI DRONE SCHOOL · 윤현삼</text>
</svg>`;
}

placeholders.forEach((item) => {
  const filePath = path.join(imagesDir, item.name);
  const svgContent = generateSvg(item);
  fs.writeFileSync(filePath, svgContent, 'utf-8');
});

console.log(`Successfully generated ${placeholders.length} placeholder graphics in public/images/`);
