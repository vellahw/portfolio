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
    team: "2명 (백엔드 개발자 1명, 프론트엔드 개발자 1명)",
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
            title: "모임장 부재 시 승계 선거",
            problem: "모임장이 부재할 때 새 모임장을 선출해야 했습니다. 중복 투표를 제한하고 동률이나 무투표처럼 한 번에 당선자를 정하기 어려운 상황도 처리해야 했습니다.",
            solution: "선거 시작 시 후보자와 유권자 명부를 저장하고 서버에서 투표 자격과 기존 투표 여부를 확인했습니다. 투표 테이블의 기본키와 중복을 무시하는 INSERT를 사용해 한 유권자가 같은 선거에 여러 표를 저장하지 못하도록 했습니다. 화면에서는 후보 선택 상태를 표시하고 제출 중에는 버튼을 비활성화했습니다. 투표가 성공하면 선거 정보를 다시 조회하고 실패하면 모달을 유지했습니다.",
            result: "단독 당선과 동률 시 결선 및 선거 연장과 운영 일시중지로 이어지는 처리 흐름을 구현했습니다. 당선자를 확정할 때는 선거 결과와 모임장 권한 변경을 같은 트랜잭션에서 처리하도록 구성했습니다.",
          },
          {
            title: "독서 회차 마감과 다음 도서 투표",
            problem: "독서 회차에 따라 다음 도서의 추천·투표 기간을 구분해야 했습니다. 조기 마감 중 참여자의 독후감 상태가 변경되면 완독 여부를 확인한 결과와 최종 목표 결과가 달라질 수도 있었습니다.",
            solution: "신 회차의 목표 종료일을 기준으로 투표 주기와 마감일을 계산했습니다. 회원 관계 행을 FOR UPDATE로 잠근 뒤 현재 주기의 추천·투표 여부를 다시 확인했습니다. 조기 마감 시에는 회차와 연결된 독후감을 잠그고 완독 조건을 확인한 뒤 회차 완료와 참여자의 목표 결과 확정을 트랜잭션으로 묶었습니다. 프론트엔드에서는 투표 로직을 커스텀 훅으로 분리하고 투표 후 목록을 다시 조회해 후보별 득표율과 내 투표를 표시했습니다.",
            result: "현재 투표 주기의 후보와 결과를 화면에 표시하고 조기 마감의 후속 처리에 실패하면 앞선 상태 변경도 되돌리도록 구성했습니다. 득표수가 없을 때는 0%로 표시하고 진행 막대에 접근성 속성을 제공했습니다.",
            thumbSrc: "detail3",
          },
          {
            title: "모임 탈퇴 시 개인 기록과 모임 활동 분리",
            problem: "회원 상태만 탈퇴로 변경하면 사용자의 투표와 추천이 모임에 남을 수 있었습니다. 반대로 모임 활동을 정리하면서 개인 독후감까지 삭제하면 사용자의 기록이 사라질 수 있었습니다.",
            solution: "서버에서 활성 계정의 일반 모임원인지 확인하고 모임장의 자진 탈퇴는 제외했습니다. 회원 관계를 EXITED 상태로 변경한 뒤 투표와 추천 및 회차 참여 연결을 같은 트랜잭션에서 정리했습니다. 화면에서는 탈퇴 전 정리되는 활동과 보존되는 개인 기록을 안내하고 요청 중 화면 이동을 막았습니다.",
            result: "개인 독후감 원본은 보존하면서 모임 활동을 정리하도록 했습니다. 재가입 시에는 탈퇴 상태와 차단 여부를 함께 확인해 재가입이 차단되지 않은 자진 탈퇴자는 다시 가입할 수 있도록 했습니다."
          },
          {
            title: "댓글 삭제 후에도 답글 관계 유지",
            problem: "부모 댓글을 삭제할 때 답글과의 연결이 사라지면 대화의 맥락을 이해하기 어려웠습니다. 댓글 등록이나 삭제 후 다른 화면에 표시된 댓글 수가 이전 값으로 남을 가능성도 있었습니다.",
            solution: "댓글에 부모 댓글 번호를 저장하고 삭제 시 행을 제거하는 대신 삭제 상태로 변경했습니다. 화면에는 원문 대신 삭제 안내를 표시하고 답글은 확인할 수 있도록 했습니다. 댓글 작성과 답글 및 수정 상태를 구분해 관리하고 등록·삭제 후 React Query의 관련 조회를 무효화했습니다.",
            result: "삭제된 댓글의 답글 관계를 유지하도록 구성했습니다. 댓글이 변경되면 모임 독후감 목록에서 댓글 수를 다시 조회하도록 했습니다.",
            thumbSrc: "detail4",
          },
          {
            title: "OAuth 로그인 실패와 기존 인증 상태 충돌 처리",
            problem: "OAuth 로그인에 실패했더라도 이전 인증 세션이 남아 있으면 인증 상태 조회 결과에 따라 로그인 성공 화면으로 이동할 수 있었습니다.",
            solution: "서버가 전달한 OAuth 실패 값을 기존 인증 상태보다 먼저 확인하도록 화면 분기 순서를 변경했습니다. 인증 조회가 끝나 useEffect가 다시 실행되더라도 오류 안내가 반복되지 않도록 useRef로 안내 표시 여부를 관리했습니다.",
            result: "기존 세션이 남아 있어도 현재 로그인 시도의 실패를 안내하도록 했습니다. 사용자가 안내를 확인하면 replace 방식으로 로그인 화면에 이동해 실패 콜백 화면이 뒤로가기 이력에 남지 않도록 했습니다.",
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
  {   
    name: "GATHER 게더",
    thumbSrc: "gather",
    des: [
      "기존의 커뮤니티 프로젝트를 기반으로 UI와 코드 구조를 전반적으로 개선한 리팩토링 프로젝트입니다.",
      "페이지마다 흩어진 반복 로직과 복잡하게 얽힌 UI 상태를 추적해 공통 함수와 명확한 전환 흐름으로 정리했으며 프론트엔드 영역은 순수 JavaScript로 개발했습니다.",
    ],
    team: "2명 (백엔드 개발자 1명, 프론트엔드 개발자 1명)",
    role: [
      "메인, 상세보기, 회원가입, 로그인, 알림 페이지 프론트엔드 담당",
      "디자인 설계 및 UX/UI 구현",
    ],
    tech: ["JavaScript", "Java", "JSP", "Spring Framework", "Oracle", "MyBatis"],
    features: [
      "파일과 일반 데이터의 요청 로직이 나뉘어 중복되는 문제를 파악하고 FormData로 두 데이터를 한 번에 전달하는 구조로 통합했습니다.",
      "입력 단계마다 조건문이 늘어나는 폼을 단계별 상태와 전환 규칙으로 정리해 사용자 입력에 따라 필요한 UI만 바뀌도록 구현했습니다.",
      "깊이가 달라지는 데이터를 고정된 화면 구조로 표현하기 어려워 부모·자식 관계를 따라가는 트리 구조를 기반으로 계층형 UI를 구성했습니다.",
      "Summernote와 SweetAlert2의 화면과 동작을 프로젝트에 맞게 커스텀했습니다.",
    ],
    href: "https://github.com/vellahw/gather",
    year: "2024",
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
