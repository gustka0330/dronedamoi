import { PortfolioItem } from '@/types';

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'case-world-champion',
    slug: 'world-champion-project',
    title: 'WORLD CHAMPION PROJECT',
    subtitle: '학생 드론축구팀 세계대회 도전과 우승',
    category: 'SPORTS',
    categoryLabel: '드론스포츠',
    client: '초등학교 유소년 드론축구 선수단',
    period: '2023.03 ~ 2023.11',
    description: '교내 자율동아리로 시작한 학생들이 1년간의 체계적인 전술 훈련과 멘탈 코칭을 거쳐 2023 FIDA 세계대회 Class 20 부문에서 세계 1위 챔피언에 오른 감동의 실전 프로젝트입니다.',
    challenge: '초기 학생들의 조종 편차, 실내 연습 공간의 제약, 실전 경기 시 소음과 긴장감에 따른 집중력 저하 극복 필요',
    solution: '포지션별(공격/수비) 특화 훈련 매뉴얼 구축, 이동식 세이프티 케이지 설치를 통한 일일 실전 훈련, 3분 루틴 멘탈 코칭 및 비디오 전술 분석 도입',
    results: [
      '2023 1st FIDA World Championship Class 20 우승 달성',
      '선수 전원 초정밀 3차원 조종술 및 위기 대응 역량 100% 획득',
      '팀원 간 자발적 소통 지수 및 학교생활 만족도 대폭 향상'
    ],
    tags: ['드론축구', '세계대회우승', '팀워크', '멘탈코칭', '학교스포츠클럽'],
    image: '/images/portfolio-world.jpg',
    featured: true,
  },
  {
    id: 'case-school-class',
    slug: 'school-drone-class',
    title: 'SCHOOL DRONE CLASS',
    subtitle: '교실과 체육관에서 시작하는 정규 드론수업',
    category: 'EDUCATION',
    categoryLabel: '정규수업/체험',
    client: '초·중학교 정규 학급 및 학교자율시간',
    period: '상시 운영 (학기제/집중이수제)',
    description: '단순한 일회성 조종 체험을 넘어, 항공 과학 원리와 비행 안전 규범을 체계적으로 배우고 협동 미션을 완수하는 학교 현장 밀착형 정규 교육과정입니다.',
    challenge: '학급당 20~25명 다인수 학급에서의 안전 통제, 비행 순번 대기 시간의 교육적 활용, 학생 간 공간지각 편차',
    solution: '2인 1조 버디 시스템(조종수-안전관제수) 운영, 태블릿 비행 시뮬레이터와 실물 비행의 융합 로테이션, 단계별 미션 패스제 도입',
    results: [
      '안전사고 0건의 완벽한 실내외 비행 수업 환경 구축',
      '전체 참여 학생 기본 호버링 및 장애물 코스 완주율 98% 기록',
      '2022 개정 교육과정 연계 수업 모델로 우수 교수학습 사례 선정'
    ],
    tags: ['학교자율시간', '기초조종', '안전교육', '버디시스템', '초등교육'],
    image: '/images/portfolio-school.jpg',
    featured: true,
  },
  {
    id: 'case-drone-coding',
    slug: 'drone-coding-mission',
    title: 'DRONE CODING',
    subtitle: '코딩으로 움직이는 3차원 자율비행 프로젝트',
    category: 'CODING',
    categoryLabel: 'SW/코딩교육',
    client: '교육지원청 영재교육원 및 SW 선도학급',
    period: '2023.05 ~ 2024.10',
    description: '엔트리 블록 코딩과 파이썬 텍스트 코딩을 기반으로 다각형 궤적 비행, ToF 센서 충돌 방지, 미션 패드 인식 자율 착륙을 구현하는 실전 컴퓨팅 사고력 증진 프로그램입니다.',
    challenge: '스크린 속 코딩에 익숙한 학생들이 물리적 환경의 기압·바람·배터리 변수를 고려하여 코드를 재설계하는 디버깅 역량 강화',
    solution: '3차원 좌표계 가이드 시트 제작, 단계별 센서 조건문 알고리즘 워크북 배포, 실생활 스마트 물류/재난구조 시나리오 PBL 미션 부여',
    results: [
      '복합 센서 기반 자율주행 알고리즘 프로젝트 전원 성공',
      '컴퓨팅 사고력 평가 항목(추상화, 알고리즘, 디버깅) 평균 42% 향상',
      '영재교육원 창의적 산출물 발표회 최우수 프로젝트 선정'
    ],
    tags: ['드론코딩', '엔트리', '파이썬', '자율주행', '영재교육'],
    image: '/images/portfolio-coding.jpg',
    featured: false,
  },
  {
    id: 'case-drone-media',
    slug: 'drone-media-story',
    title: 'DRONE MEDIA',
    subtitle: '하늘에서 우리 학교의 이야기를 만들다',
    category: 'MEDIA',
    categoryLabel: '미디어/영상',
    client: '초·중학교 방송반 및 미디어 동아리',
    period: '2023.09 ~ 2024.12',
    description: '시네마틱 항공 촬영 기법(Top Shot, Tracking, Orbit 등)을 익히고, 학생들이 직접 콘티를 기획하여 학교 홍보 영상과 생태 다큐멘터리를 제작한 미디어 리터러시 프로젝트입니다.',
    challenge: '초보자의 불안정한 짐벌 조작, 단조로운 일자 비행 영상의 한계, 항공촬영 법규 및 개인정보 초상권 준수 교육',
    solution: '8대 핵심 카메라 무빙 공식 훈련, 사전 콘티 및 샷 리스트 필수 작성 훈련, 드론원스톱 적법 승인 절차 학생 실습',
    results: [
      '학생 제작 학교 사계절 시네마틱 홍보 영상 완성 및 교내 상영',
      '청소년 영상 공모전 출품 및 미디어 창작 역량 입증',
      '영상 기획-촬영-편집-피드백 전 주기 미디어 파이프라인 경험'
    ],
    tags: ['항공촬영', '영상제작', '스토리보드', '학교홍보', '미디어리터러시'],
    image: '/images/portfolio-media.jpg',
    featured: false,
  },
  {
    id: 'case-drone-project',
    slug: 'drone-project-pbl',
    title: 'DRONE PROJECT',
    subtitle: '교과와 지역사회를 잇는 융합 PBL',
    category: 'PROJECT',
    categoryLabel: '교과연계 PBL',
    client: '초등학교 5~6학년 융합 프로젝트 학급',
    period: '2024.03 ~ 2024.07',
    description: '사회과(우리 고장의 지리·환경), 과학과(생태계와 기상), 실과(첨단 수송 기술)를 유기적으로 엮어 "우리 마을 3D 안전 지도 만들기" 및 "하천 생태 탐사"를 수행한 프로젝트입니다.',
    challenge: '단순 기술 습득에 매몰되지 않고 정규 교육과정의 핵심 성취기준과 유기적으로 결합하는 수업 설계',
    solution: '2022 개정 교육과정 기반 범교과 PBL 단원 재구성, 항공 사진 정사영상 합성 툴 활용, 마을 공동체와 결과 공유회 개최',
    results: [
      '학교 주변 어린이 통학로 위험 요소 발굴 및 안전 개선안 지자체 건의',
      '교과 성취기준 도달도 100% 및 자기주도 학습 태도 대폭 향상',
      '학부모 공개수업 및 전국 교과교육 실천 사례 발표'
    ],
    tags: ['PBL', '교과융합', '마을교육과정', '안전지도', '디지털트윈'],
    image: '/images/portfolio-project.jpg',
    featured: false,
  },
  {
    id: 'case-teacher-training',
    slug: 'teacher-training-workshop',
    title: 'TEACHER TRAINING',
    subtitle: '교사가 교사를 키우는 현장 맞춤형 직무연수',
    category: 'TRAINING',
    categoryLabel: '교원연수',
    client: '시·도 교육청, 교육지원청 및 전문적학습공동체',
    period: '2022 ~ 현재 연중 운영',
    description: '현직 초등교사의 눈높이에서 학교 기자재 구매부터 안전 관리, 수준별 지도 노하우, 교과 연계 교수학습 지도안까지 학교 현장에 바로 투입할 수 있도록 돕는 실전 직무연수입니다.',
    challenge: '참여 교원들의 기계 조작 두려움, 학교 현장 환경(체육관/교실)의 제약, 연수 후 실제 수업 도입의 어려움',
    solution: '1인 1기체 집중 핸즈온 실습, 실패 없는 3단계 비행 코칭 팁 공유, 완성형 차시별 수업 지도안 및 평가 루브릭 패키지 무료 제공',
    results: [
      '연수 참여 교원 만족도 99.4% (매우 만족)',
      '연수 수료 교원의 85% 이상이 소속교에서 드론 동아리/수업 즉각 개설',
      '교육청 우수 교원 연수 프로그램으로 연속 위탁 운영'
    ],
    tags: ['교원연수', '직무연수', '현직교사강의', '수업지도안', '교육청출강'],
    image: '/images/portfolio-training.jpg',
    featured: true,
  },
];

export function getPortfolioItemBySlug(slug: string): PortfolioItem | undefined {
  return portfolioItems.find((item) => item.slug === slug);
}
