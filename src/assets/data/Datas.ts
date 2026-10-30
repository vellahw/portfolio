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
  period?: string;
  team?: string;
  role: string[];
  sections?: { title: string; items: string[] }[];
  tech: string[];
  features?: string[];
  href: string;
  liveHref?: string;
  year: string;
  slideCount: number;
};

export const projectData: Project[] = [
  /* 기존 SADARI 프로젝트 데이터
  {
    name: "SADARI 사다리",
    thumbSrc: "sadari",
    des: [
      "개인의 독서 기록을 소셜 활동과 독서모임으로 확장한 웹 서비스입니다.",
      "가입부터 운영·종료까지 이어지는 복잡한 모임 정책을 상태 변화와 동시성 문제로 나누어 분석하고, React·TypeScript 프론트엔드와 Spring Boot·MyBatis 백엔드 전반에서 일관되게 동작하도록 구현했습니다.",
    ],
    team: "2명 (백엔드 개발자 1명, 프론트엔드 개발자 1명)",
    role: [
      "독후감 댓글·답글 기능 풀스택 개발",
      "독서 모임 생성·가입·운영·종료 기능 풀스택 개발",
      "반응형 UI 설계",
    ],
    tech: ["React", "TypeScript", "Java", "Spring Boot", "Spring Security", "JWT", "Redis", "MySQL", "MyBatis", "AWS EC2", "AWS RDS"],
    features: [
      "공개·승인제마다 달라지는 가입 흐름을 신청·승인·거절·초대·탈퇴·강제 퇴장 상태로 세분화하고, 재가입 제한까지 하나의 규칙으로 연결했습니다.",
      "독서 회차가 조기 마감되거나 목표를 달성하는 과정에서 기록이 어긋나지 않도록 추천·투표·회차 상태를 함께 추적하고, 완료 결과와 이전 기록을 이어서 조회하도록 설계했습니다.",
      "모임장 부재 시 운영이 멈추는 문제를 해결하기 위해 후보자·유권자 명부를 고정하고, 비밀투표·동률 결선·기간 연장·운영 중지로 이어지는 승계 절차를 구현했습니다.",
      "스케줄러와 사용자의 투표 요청이 동시에 선거를 확정할 수 있는 지점을 추적해 DB 행 잠금과 중복 방지 제약을 적용하고, 결과가 한 번만 확정되도록 처리했습니다.",
      "댓글·답글의 계층 관계와 수정·삭제 이후의 맥락이 유지되도록 데이터 흐름을 정리하고, 사용자 언급·좋아요·알림을 하나의 상호작용으로 연결했습니다.",
      "좋아요 응답을 기다리는 동안 UI가 늦게 반응하는 문제를 TanStack Query의 낙관적 업데이트로 해결하고, 실패 시 캐시를 복구한 뒤 서버 응답으로 최종 동기화했습니다.",
      "독후감과 댓글마다 신고 로직이 중복되는 문제를 공통 흐름으로 통합하고, 대상 유형·작성자 권한·중복 신고 여부를 서버에서 검증했습니다.",
      "새로고침과 보호 페이지 이동에서 인증 상태가 엇갈리지 않도록 Kakao OAuth·JWT API, 전역 로그인 상태, 보호 라우팅의 흐름을 맞춰 비로그인 접근을 차단했습니다.",
    ],
    href: "https://github.com/vellahw/SADARI.git",
    liveHref: "https://sadaribooks.com/",
    year: "2026",
    slideCount: 6,
  },
  */
  {
    name: "SADARI 사다리",
    thumbSrc: "sadari",
    des: [
      "독서 기록·목표·소셜 활동과 독서 모임을 연결한 React PWA 기반 독서 플랫폼입니다.",
      "React 프론트엔드와 Spring Boot 백엔드를 함께 개발하며 복잡한 모임 정책, 데이터 정합성, 동시성, 인증 상태처럼 실제 서비스에서 발생하는 문제를 해결하는 데 집중했습니다.",
    ],
    team: "2명 (백엔드 개발자 1명, 프론트엔드 개발자 1명)",
    role: [
      "독서 모임 영역의 프론트엔드·백엔드 개발 담당",
      "모임 상태와 사용자 권한에 따른 서버 정책 및 화면 흐름 설계",
      "가입부터 운영·종료까지 이어지는 사용자 경험과 상태 피드백 개선",
    ],
    sections: [
      {
        title: "핵심 문제 해결",
        items: [
          "공개형·승인형 모임의 가입 방식을 즉시 가입과 심사 기반 가입으로 분리하고 가입 신청·승인·거절·초대·자진 탈퇴·강제 퇴장 상태를 회원 관계와 처리 이력으로 관리했습니다. 또한 거절 후 재신청 유예기간과 강제 퇴장 후 재가입 차단 정책을 가입 검증 로직에 통합하고 행 잠금을 적용해 동시 요청에도 정원과 회원 상태의 정합성이 유지되도록 구현했습니다.",
          "독서 회차가 조기 마감되거나 목표를 달성하는 과정에서 기록이 어긋나지 않도록 추천·투표·회차 상태를 함께 추적하고, 완료 결과와 이전 기록을 이어서 조회하도록 설계했습니다.",
          "모임장 부재 시 운영이 멈추는 문제를 해결하기 위해 후보자·유권자 명부를 고정하고, 비밀투표·동률 결선·기간 연장·운영 중지로 이어지는 승계 절차를 구현했습니다.",
          "스케줄러와 사용자의 투표 요청이 동시에 선거를 확정할 수 있는 지점을 추적해 DB 행 잠금과 중복 방지 제약을 적용하고, 결과가 한 번만 확정되도록 처리했습니다.",
          "부모 댓글 참조를 이용해 댓글과 답글의 2단계 계층을 구성하고 논리 삭제와 버전 해시 기반 수정 충돌 검사를 적용해 수정·삭제 이후에도 대화 맥락이 유지되도록 했습니다. ",
          "좋아요 응답을 기다리는 동안 UI가 늦게 반응하는 문제를 TanStack Query의 낙관적 업데이트로 해결하고 실패 시 캐시를 복구한 뒤 서버 응답으로 최종 동기화했습니다.",
          "카카오 OAuth 기반의 최초 로그인·자동 회원가입 흐름을 구현하고 JWT Access/Refresh Token 발급과 HttpOnly 쿠키 기반 인증으로 개선했습니다. 토큰 만료 시 제한적으로 재발급한 뒤 인증 상태를 재확인하도록 구성했으며 React Query와 보호 라우팅을 연계하여 새로고침 및 페이지 이동에서도 일관된 로그인 상태를 유지했습니다.",
        ],
      }
    ],
    tech: ["React", "TypeScript", "Java", "Spring Boot", "MySQL", "MyBatis", "Redis", "AWS"],
    href: "https://github.com/vellahw/SADARI",
    liveHref: "https://sadaribooks.com/",
    year: "2026",
    slideCount: 6,
  },
  {   
    name: "GATHER 게더",
    thumbSrc: "gather",
    des: [
      "기존의 커뮤니티 프로젝트를 기반으로 UI와 코드 구조를 전반적으로 개선한 리팩토링 프로젝트입니다.",
      "페이지마다 흩어진 반복 로직과 복잡하게 얽힌 UI 상태를 추적해 공통 함수와 명확한 전환 흐름으로 정리했으며, 프론트엔드 영역은 순수 JavaScript로 개발했습니다.",
    ],
    team: "2명 (백엔드 개발자 1명, 프론트엔드 개발자 1명)",
    role: [
      "메인, 상세보기, 회원가입, 로그인, 알림 페이지 프론트엔드 담당",
      "디자인 설계 및 UX/UI 구현",
      "프론트엔드 기술 환경 세팅",
    ],
    tech: ["JavaScript", "Java", "JSP", "Spring Framework", "Oracle", "MyBatis"],
    features: [
      "파일과 일반 데이터의 요청 로직이 나뉘어 중복되는 문제를 파악하고, FormData로 두 데이터를 한 번에 전달하는 구조로 통합했습니다.",
      "입력 단계마다 조건문이 늘어나는 폼을 단계별 상태와 전환 규칙으로 정리해, 사용자 입력에 따라 필요한 UI만 바뀌도록 구현했습니다.",
      "깊이가 달라지는 데이터를 고정된 화면 구조로 표현하기 어려워 부모·자식 관계를 따라가는 트리 구조를 기반으로 계층형 UI를 구성했습니다.",
      "기본 UI가 서비스 흐름과 맞지 않는 지점을 확인해 Summernote와 SweetAlert2의 화면과 동작을 프로젝트에 맞게 커스텀했습니다.",
      "여러 이미지의 현재 위치와 전환 시점을 상태로 관리해 흐름이 끊기지 않는 슬라이드 애니메이션을 구현했습니다.",
    ],
    href: "https://github.com/vellahw/gather",
    year: "2024",
    slideCount: 10,
  },
  // {
  //   name: "BLEND 블랜드",
  //   thumbSrc: "blend",
  //   des: [
  //     "교육과정 내 7개 팀 중 대상을 수상한 소상공인 카페용 블록체인 기반 마일리지 플랫폼입니다.",
  //     "블록체인 기능을 실제 마일리지 사용 흐름에 연결하기 위해 KAS API와 스마트 컨트랙트의 동작을 파악하고, 메뉴·마이페이지·마일리지·지갑 상태를 사용자가 이해할 수 있는 UI로 구현했습니다.",
  //   ],
  //   role: ["메뉴, 마이페이지, 마일리지 현황, 지갑 현황 구현", "UX/UI 구현"],
  //   tech: ["React", "JavasScript", "node.js", "mySQL"],
  //   href: "https://github.com/vellahw/BLEND",
  //   year: "2023",
  //   slideCount: 5,
  // },
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
    role: "프론트엔드 개발",
    description: "제스나라는 마음·행복, 부부, 성에너지 등 다양한 주제의 지식 콘텐츠를 다루는 플랫폼 서비스입니다. Nuxt.js, TypeScript 기반 환경에서 다국어 콘텐츠, 결제, 사용자 인증 파트를 담당하여 개발했습니다.",
    website: { href: "https://www.xesnara.com/", label: "제스나라" },
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
    tech: ["Nuxt.js", "TypeScript"],
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
    tech: ["JavaScript", "PHP", "그누보드", "WordPress"],
  },
  {
    period: "2023.08 — 2023.09",
    company: "해커스홀딩스",
    role: "프론트엔드 개발 (인턴)",
    groups: [
      {
        title: "",
        items: ["React 기반 랜딩 페이지 구현", "Next.js 마이그레이션 과정 참여"],
      },
    ],
  },
];
