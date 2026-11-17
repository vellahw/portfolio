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
  sections?: {
    title: string;
    items: { title: string; problem: string; solution: string; result: string; thumbSrc?: string }[];
  }[];
  tech: string[];
  features?: string[];
  href: string;
  liveHref?: string;
  year: string;
};

export const projectData: Project[] = [
  {
    name: "SADARI 사다리",
    thumbSrc: "sadari",
    des: [
      "독서 기록과 목표 관리, 소셜 활동, 독서 모임을 연결한 React PWA 기반 독서 플랫폼입니다.",
      "React·TypeScript 기반 프론트엔드와 Java·Spring Boot 기반 백엔드를 함께 개발하며 여러 사용자의 활동이 연결되는 과정에서 발생할 수 있는 상태와 예외 상황을 다뤘습니다.",
    ],
    team: "2명",
    role: [
      "독서 모임 기능 풀스택 개발",
      "댓글·좋아요·OAuth 인증 구현",
      "UI/UX 설계 및 구현"
    ],
    sections: [
      {
        title: "핵심 문제 해결",
        items: [
          {
            title: "도서 검색 로직 확장",
            problem:
              "개인 독후감 작성에 맞춰진 도서 검색 화면을 모임의 독서 회차 등록에도 활용하기 위해 도서를 선택한 뒤 개인 기록 화면이 아닌 해당 모임의 등록 또는 수정 흐름으로 이어져야 했습니다. 모임 번호와 수정 중인 회차 정보도 다음 화면까지 유지해야 했습니다.",
            solution:
              "검색 상태와 결과 조회, 도서 선택을 커스텀 훅으로 분리했습니다. URL 파라미터와 React Router의 location state를 기준으로 개인 검색과 모임 검색을 구분하고 선택한 도서 정보는 화면 상태로, ISBN은 URL 파라미터로 전달했습니다. 잘못된 모임 번호와 회차 수정 경로도 확인해 알맞은 화면으로 이동하도록 처리했습니다.",
            result:
              "검색 화면을 개인 독후감 작성과 모임 독서 등록·수정 흐름에서 함께 사용할 수 있게 했습니다. 화면 UI와 검색·이동 로직을 나누고 진입 목적에 따라 다음 화면과 전달 데이터를 분기하는 구조를 만들었습니다.",
            thumbSrc: "detail1",
          },
          {
            title: "모임 가입 상태별 알림 처리",
            problem:
              "모임 가입은 즉시 가입, 승인 신청, 초대 수락으로 처리 흐름이 나뉩니다. 각 흐름에서 상태가 바뀌는 시점과 알림을 받아야 하는 사용자도 달라 신청자와 모임장이 필요한 결과를 각각 확인할 수 있도록 처리해야 했습니다.",
            solution:
              "가입 신청·즉시 가입·승인 및 거절·초대 수락 처리 지점에 공통 알림 서비스를 연결했습니다. 처리 유형에 따라 수신자, 알림 템플릿, 모임 정보를 구분해 전달했습니다. 가입 상태 변경 후 알림 생성이 실패하면 처리 전체가 성공으로 끝나지 않도록 트랜잭션 흐름에 포함했습니다.",
            result:
              "신규 가입이나 신청은 모임장에게 승인·거절 결과는 신청자에게 전달되도록 각 상태 전이를 연결했습니다. 여러 가입 방식에서 알림 대상을 일관되게 관리하고 상태 변경과 알림 처리의 정합성도 함께 고려했습니다.",
            thumbSrc: "detail3",
          },
          {
            title: "OAuth 실패 콜백과 기존 로그인 상태의 충돌 처리",
            problem:
              "새 OAuth 로그인 요청이 실패했더라도 브라우저에 이전 인증 세션이 남아 있으면 인증 상태 조회 결과를 따라 로그인 성공 경로로 이동할 수 있었습니다. 인증 조회가 다시 실행될 때 오류 안내가 반복되는 문제도 함께 고려해야 했습니다.",
            solution:
              "콜백 URL의 실패 값을 인증 상태에 따른 화면 분기보다 먼저 확인하도록 흐름을 구성했습니다. useRef로 실패 안내 표시 여부를 관리해 인증 조회 후 effect가 다시 실행되어도 안내가 중복되지 않도록 했습니다. 안내를 닫은 뒤에는 replace 방식으로 로그인 화면에 이동하도록 처리했습니다.",
            result:
              "기존 세션이 남아 있어도 현재 로그인 시도의 실패를 우선 안내하고 실패 콜백 화면이 뒤로 가기 이력에 남지 않도록 했습니다. 인증 상태와 OAuth 요청 결과가 충돌하는 상황에서도 화면 이동을 예측 가능하게 만들었습니다.",
          },
          {
            title: "댓글 삭제 후에도 답글 맥락과 목록 상태 유지",
            problem:
              "부모 댓글을 완전히 제거하면 그 댓글에 연결된 답글의 대화 맥락이 끊길 수 있었습니다. 댓글은 별도의 바텀시트 컴포넌트로 노출되기 때문에 댓글 등록·삭제 뒤에는 댓글 목록과 독후감 목록의 댓글 수가 서로 다른 상태로 남을 가능성도 있었습니다.",
            solution:
              "댓글의 부모 번호를 기준으로 답글 관계를 유지하고 삭제 시 댓글 행을 제거하는 대신 삭제 상태로 처리해 화면에 삭제 안내와 기존 답글을 표시했습니다. 댓글 등록·삭제 요청은 TanStack Query mutation으로 관리하고 처리 성공 후 댓글 목록과 공개 독후감·모임 관련 Query를 무효화해 최신 데이터를 다시 불러오도록 했습니다.",
            result:
              "댓글이 삭제되어도 답글의 위치와 대화 흐름을 유지하고 등록·삭제 이후 관련 목록을 다시 조회해 댓글 내용과 댓글 수가 최신 상태로 표시되도록 했습니다.",
            thumbSrc: "detail4",
          },
        ],
      },
    ],
    tech: ["React", "TypeScript", "Java", "Spring Boot", "MySQL", "MyBatis", "Redis", "AWS"],
    href: "https://github.com/vellahw/SADARI",
    liveHref: "https://sadaribooks.com/",
    year: "2026.03 — 2026.10",

    // sections: [
    //   {
    //     title: "핵심 문제 해결",
    //     items: [
    //       {
    //         title: "모임 가입·탈퇴 상태 관리",
    //         des:"공개형·승인형 모임의 가입 흐름을 즉시 가입과 심사 기반 가입으로 분리하고 신청·승인·거절·초대·자진 탈퇴·강제 퇴장에 따른 회원 상태와 처리 이력을 관리했습니다. 거절 후 재신청 유예, 강제 퇴장 후 재가입 차단 등 예외 정책을 가입 검증 로직에 반영하여 복잡한 모임 가입 프로세스를 구현했습니다.",
    //         thumbSrc: "detail1"
    //       },
    //       {
    //         title: "모임장 부재 시 승계 선거",
    //         des: "모임장 부재로 운영이 중단되지 않도록 선거 시작 시점의 후보자와 유권자 명부를 고정하 변경 불가능한 비밀투표 방식의 승계 절차를 구현했습니다. 단독 당선, 동률 후보 결선, 1회 기간 연장, 최종 운영 중지로 이어지는 상태 전이를 정의하여 예외 상황에서도 모임 운영 상태가 명확하게 결정되도록 했습니다.",
    //         thumbSrc: "detail2"
    //       },
    //       {
    //         title: "독서 회차 및 도서 추천·투표",
    //         des: "최신 독서 회차의 종료일을 기준으로 다음 도서 추천·투표 주기와 마감일을 계산하고 추천·투표 요청과 회차 완료 처리를 각각 서비스 트랜잭션으로 구현했습니다. 조기 마감 시에는 활성 참여자 전원의 독후감 완료 여부를 확인한 뒤 회차와 참여자별 목표 결과를 갱신하고 기간 만료 시에는 참여자별 달성 결과와 결과 확인 대상을 기록한 뒤 회차를 완료 처리했습니다.",
    //         thumbSrc: "detail3"
    //       },
    //       {
    //         title: "댓글·답글",
    //         des:"댓글 등록·조회 기능에 부모 댓글 참조를 연결해 답글 관계를 구성하고 댓글 수정·삭제 기능을 구현했습니다. 삭제 시에는 데이터를 물리적으로 제거하지 않고 삭제 상태를 갱신해 댓글과 답글의 관계가 남도록 처리했습니다.",
    //         thumbSrc: "detail4"
    //       },
    //       "카카오 OAuth 기반의 최초 로그인·자동 회원가입 흐름을 구현하고 JWT Access/Refresh Token 발급과 HttpOnly 쿠키 기반 인증으로 개선했습니다. 토큰 만료 시 제한적으로 재발급한 뒤 인증 상태를 재확인하도록 구성했으며 React Query와 보호 라우팅을 연계하여 새로고침 및 페이지 이동에서도 일관된 로그인 상태를 유지했습니다.",
    //     ],
    //   }
    // ],
  },
  // {
  //   name: "GATHER 게더",
  //   thumbSrc: "gather",
  //   des: [
  //     "기존의 커뮤니티 프로젝트를 기반으로 UI와 코드 구조를 전반적으로 개선한 리팩토링 프로젝트입니다.",
  //     "페이지마다 흩어진 반복 로직과 복잡하게 얽힌 UI 상태를 추적해 공통 함수와 명확한 전환 흐름으로 정리했으며 프론트엔드 영역은 순수 JavaScript로 개발했습니다.",
  //   ],
  //   team: "2명 (백엔드 개발자 1명, 프론트엔드 개발자 1명)",
  //   role: [
  //     "메인, 상세보기, 회원가입, 로그인, 알림 페이지 프론트엔드 담당",
  //     "디자인 설계 및 UX/UI 구현",
  //   ],
  //   tech: ["JavaScript", "Java", "JSP", "Spring Framework", "Oracle", "MyBatis"],
  //   features: [
  //     "파일과 일반 데이터의 요청 로직이 나뉘어 중복되는 문제를 파악하고 FormData로 두 데이터를 한 번에 전달하는 구조로 통합했습니다.",
  //     "입력 단계마다 조건문이 늘어나는 폼을 단계별 상태와 전환 규칙으로 정리해 사용자 입력에 따라 필요한 UI만 바뀌도록 구현했습니다.",
  //     "깊이가 달라지는 데이터를 고정된 화면 구조로 표현하기 어려워 부모·자식 관계를 따라가는 트리 구조를 기반으로 계층형 UI를 구성했습니다.",
  //     "Summernote와 SweetAlert2의 화면과 동작을 프로젝트에 맞게 커스텀했습니다.",
  //   ],
  //   href: "https://github.com/vellahw/gather",
  //   year: "2024",
  // },
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
          "한국어 원문과 선택 언어 번역본을 좌우 패널에 제공하고 패널별 상태 모델로 언어·API 응답 불일치 문제를 해결했습니다.",
          "언어별 문장 길이와 HTML 구조 차이를 고려해 태그를 보존하며 본문을 안정적으로 분할하고 보기 모드 전환 시 언어 상태를 자연스럽게 복원했습니다.",
        ],
      },
      {
        title: "NICEPAY · Payletter 구독 결제",
        items: [
          "PG별 요청과 결과 조회를 분리하고 성공·실패·대기 상태를 공통 모델로 통합해 하나의 체크아웃 흐름을 구축했습니다.",
          "오류 응답을 사용자 관점의 실패 유형으로 정리하고 재시도 가능 여부와 고객센터 안내를 제공했습니다.",
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
    description: "국내외 병·의원 홈페이지 리뉴얼 프로젝트에서 프론트엔드 개발 전반을 주도했습니다.",
    groups: [
      {
        title: "주요 개발 경험",
        items: [
          "예약·상담 전환이 중요한 페이지의 UI와 CTA 배치를 구성·개선하고 Lighthouse 기준 SEO 점수를 90~100점대로 개선했습니다.",
          "로그인·회원가입·소셜 로그인·페이징 기능을 추가 개발하며 그누보드·WordPress CMS 기반 유지보수를 수행했습니다.",
          "React·TypeScript 기반 신규 OTT 서비스 개발에 참여해 공통 UI와 주요 화면을 구현했습니다.",
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
