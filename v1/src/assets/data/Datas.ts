export const worksData = [
  {
    name: "XESNARA(제스나라)",
    tech: ["Nuxt.js", "TypeScript"],
    href: "https://www.xesnara.com/",
    src: "xesnara",
    what:"프론트엔드 전반",
    more: "· 사용자 선택 언어 기반 다국어 콘텐츠 비교 학습 기능 구현\n" +
      "　: 원문과 다국어 콘텐츠를 좌·우 분할 화면에 동시 제공하여 페이지 이동 없이 비교 학습할 수 있는 UX 구축\n" +
      "· NICEPAY·Payletter 기반 멀티 PG 결제 시스템 구축\n" +
      "　: PG사별 상이한 요청/응답 구조를 서비스 결제 정책에 맞게 처리하여 복수 PG 환경의 결제 프로세스 구축\n" +
      "· i18n 기반 서비스 다국어 지원\n" +
      "· 반응형 UI 구현 및 퍼블리싱 품질 개선",
  },
  {
    name: "비비여성의원",
    tech: ["그누보드(PHP)", "JavaScript"],
    src: "bbkr",
    more: "로그인, 회원가입 기능 추가 및 수정",
  },
  {
    name: "BBC GINZA",
    tech: ["워드프레스(PHP)", "JavaScript"],
    href: "https://bb-clinic.jp/",
    src: "bbgz",
    more: "워드프레스 기반 게시판 및 페이징 기능 제작",
  },
  {
    name: "BBC GINZA 원장 소개 페이지",
    tech: ["워드프레스(PHP)", "JavaScript"],
    href: "https://bb-clinic.jp/byon/",
    src: "bbgz2",
  },
  {
    name: "BBC OMOTESANDO",
    tech: ["워드프레스(PHP)", "JavaScript"],
    src: "bbom",
    more: "워드프레스 기반 게시판 및 페이징 기능 제작",
  },
  {
    name: "대구봄여성의원",
    tech: ["그누보드(PHP)", "JavaScript"],
    href: "https://dgbom.co.kr/",
    src: "dgb",
  },
  {
    name: "청담오케이 여성클리닉",
    tech: ["그누보드(PHP)", "JavaScript"],
    src: "okay",
  },
  {
    name: "스누성형외과의원",
    what: "의료진 소개 페이지 리뉴얼",
    tech: ["그누보드(PHP)", "JavaScript"],
    src: "snu",
  },
  {
    name: "나를위한산부인과의원",
    tech: ["그누보드(PHP)", "JavaScript"],
    href: "http://na-medi.com/",
    src: "namedi",
  },
];

type Project = {
  name: string;
  thumbSrc: string;
  des: string[];
  team?: string;
  role: string[];
  tech: string[];
  features?: string[];
  href: string;
  liveHref?: string;
  year: string;
  slideCount: number;
};

export const projectData: Project[] = [
  {
    name: "SADARI 사다리",
    thumbSrc: "sadari",
    des: [
      "개인의 독서 기록을 소셜 활동과 독서모임으로 확장한 웹 서비스입니다.",
      "React·TypeScript 기반 프론트엔드와 Spring Boot·MyBatis 백엔드를 함께 개발했으며, 복잡한 모임 운영 정책과 사용자 상태 변화를 안정적으로 처리하는 데 집중했습니다.",
    ],
    team: "2명 (백엔드 개발자 1명, 프론트엔드 개발자 1명)",
    role: [
      "독후감 댓글·답글 기능 풀스택 개발",
      "독서 모임 생성·가입·운영·종료 기능 풀스택 개발",
      "반응형 UI 설계",
    ],
    tech: ["React", "TypeScript", "Java", "Spring Boot", "Spring Security", "JWT", "Redis", "MySQL", "MyBatis", "AWS EC2", "AWS RDS"],
    features: [
      "공개·승인제 모임의 가입 신청, 승인·거절, 초대, 자진 탈퇴, 강제 퇴장 및 재가입 제한 기능 구현",
      "모임 도서 추천·투표, 독서 회차 관리, 조기 마감, 목표 달성 결과 및 이전 독서 기록 조회 기능 구현",
      "모임장 부재 시 후보자·유권자 명부를 고정하고 비밀투표, 동률 결선, 기간 연장 및 운영 중지까지 이어지는 승계 절차 구현",
      "DB 행 잠금과 중복 방지 제약을 적용해 스케줄러 중복 실행과 동시 투표 상황에서도 선거 결과가 한 번만 확정되도록 처리",
      "계층형 댓글·답글, 사용자 언급, 수정·삭제, 좋아요 및 알림이 연결된 소셜 상호작용 구현",
      "TanStack Query 캐시를 활용해 좋아요를 즉시 반영하고 요청 실패 시 이전 상태로 복구한 뒤 서버 응답으로 최종 동기화",
      "독후감과 댓글을 하나의 신고 흐름으로 처리하고 대상 유형, 작성자 권한 및 중복 신고를 서버에서 검증",
      "Kakao OAuth·JWT 인증 API와 전역 로그인 상태, 인증 보호 라우팅을 연결하여 비로그인 사용자의 제한 화면 접근 차단",
    ],
    href: "https://github.com/vellahw/SADARI.git",
    liveHref: "https://sadaribooks.com/",
    year: "2026",
    slideCount: 6,
  },
  {   
    name: "GATHER 게더",
    thumbSrc: "gather",
    des: [
      "기존의 커뮤니티 프로젝트를 기반으로 UI와 코드 구조를 전반적으로 개선한 리팩토링 프로젝트입니다.",
      "반복 로직을 공통 함수로 분리해 코드 중복을 줄이고 재사용성을 높였으며, 프론트엔드 영역은 순수 JavaScript로 개발했습니다.",
    ],
    team: "2명 (백엔드 개발자 1명, 프론트엔드 개발자 1명)",
    role: [
      "메인, 상세보기, 회원가입, 로그인, 알림 페이지 프론트엔드 담당",
      "디자인 설계 및 UX/UI 구현",
      "프론트엔드 기술 환경 세팅",
    ],
    tech: ["JavaScript", "Java", "JSP", "Spring Framework", "Oracle", "MyBatis"],
    features: [
      "FormData를 활용한 파일·데이터 통합 처리 구조 구현",
      "동적 폼 전환 로직을 설계하여 입력 단계에 따른 UI 변화 구현",
      "트리 구조 데이터 기반의 계층형 UI 구현",
      "텍스트 에디터(Summernote)와 알림 라이브러리(SweetAlert2) 적용 및 커스텀",
      "이미지 슬라이드 애니메이션 구현",
    ],
    href: "https://github.com/vellahw/gather",
    year: "2024",
    slideCount: 10,
  },
  {
    name: "BLEND 블랜드",
    thumbSrc: "blend",
    des: [
      "교육과정 내 7개 팀 중 대상을 수상한 소상공인 카페용 블록체인 기반 마일리지 플랫폼입니다.",
      "KAS API를 연동해 블록체인 스마트 컨트랙트 기능을 서비스에 적용하고 기획·디자인·개발 간 협업 프로세스를 경험했습니다.",
    ],
    role: ["메뉴, 마이페이지, 마일리지 현황, 지갑 현황 구현", "UX/UI 구현"],
    tech: ["React", "JavasScript", "node.js", "mySQL"],
    href: "https://github.com/vellahw/BLEND",
    year: "2023",
    slideCount: 5,
  },
];

type Experience = {
  period: string;
  company: string;
  role: string;
  description?: string;
  website?: { href: string; label: string };
  groups: { title: string; items: string[] }[];
  projects?: { name: string; href?: string; src: string }[];
  tech?: string[];
};

export const experienceData: Experience[] = [
  {
    period: "2026.06 — 2026.08",
    company: "(주)한국심리교육원",
    role: "프론트엔드 개발 · 제스나라",
    description: "마음·행복, 부부, 성에너지 등 지식 콘텐츠를 제공하는 플랫폼에서 Nuxt.js와 TypeScript로 다국어 콘텐츠, 구독 결제, 사용자 인증을 개발했습니다.",
    website: { href: "https://www.xesnara.com/", label: "xesnara.com" },
    groups: [
      {
        title: "다국어 콘텐츠 비교 학습",
        items: [
          "한국어 원문과 선택 언어 번역본을 좌우 패널에 제공하고, 패널별 상태 모델로 언어·API 응답 불일치 문제를 해결했습니다.",
          "언어별 문장 길이와 HTML 구조 차이를 고려해 태그를 보존하며 본문을 안정적으로 분할하고, 보기 모드 전환 시 언어 상태를 자연스럽게 복원했습니다.",
        ],
      },
      {
        title: "NICEPAY · Payletter 구독 결제",
        items: [
          "PG별 요청과 결과 조회를 분리하고 성공·실패·대기 상태를 공통 모델로 통합해 하나의 체크아웃 흐름을 구축했습니다.",
          "오류 응답을 사용자 관점의 실패 유형으로 정리하고, 재시도 가능 여부와 고객센터 안내를 제공했습니다.",
        ],
      },
      {
        title: "이메일 · Google 통합 인증",
        items: [
          "중복 가입, 재가입 제한, 인증 만료를 구분해 회원가입과 인증 메일 재발송 흐름을 구현하고 검증 정책을 공통화했습니다.",
          "기기별 활성 세션을 감지해 사용자가 확인한 뒤 기존 세션을 전환하는 중복 로그인 흐름을 구현했습니다.",
        ],
      },
    ],
    tech: ["Nuxt.js", "TypeScript", "i18n", "NICEPAY", "Payletter"],
  },
  {
    period: "2024.04 — 2026.01",
    company: "주식회사 엔셀텍바이오랩",
    role: "프론트엔드 개발",
    description: "국내외 병·의원 홈페이지 리뉴얼에서 반응형·적응형 UI와 동적 인터랙션, 사용자 기능 개발 및 운영 유지보수를 주도했습니다.",
    groups: [
      {
        title: "주요 개발 경험",
        items: [
          "예약·상담 전환이 중요한 페이지의 UI와 CTA 배치를 구성·개선하고, SEO 작업으로 Lighthouse 점수를 90~100점대로 높였습니다.",
          "로그인·회원가입·소셜 로그인·페이징 기능을 개발하고, 그누보드·WordPress CMS 수정과 운영 이슈 대응을 맡았습니다.",
          "React·TypeScript 기반 컴포넌트 개발에도 참여했습니다.",
        ],
      },
    ],
    projects: worksData.filter((work) => work.src !== "xesnara"),
    tech: ["JavaScript", "PHP", "그누보드", "WordPress", "React", "TypeScript"],
  },
  {
    period: "2023.08 — 2023.09",
    company: "해커스홀딩스",
    role: "프론트엔드 개발 (인턴)",
    groups: [
      {
        title: "주요 개발 경험",
        items: ["React 기반 랜딩 페이지 구현", "Next.js 마이그레이션 과정 참여"],
      },
    ],
  },
];
