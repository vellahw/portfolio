import { PageSection } from "../shared";

function ActivitySection() {
  return <PageSection id="education" title="활동">
    <div className="space-y-8">
      <div>
        <h3 className="mb-2 text-lg font-bold text-neutral-700">학력 · 교육 · 경험</h3>
        <ul className="divide-y divide-neutral-100 text-lg">
          <Fact period="2024.03 — 재학 중" name="한국방송통신대학교" detail="컴퓨터과학과" />
          <Fact period="2023.05 — 2023.07" name="한국에이아이블록체인융합원" detail="블록체인 기반 기술 사업화 전문 인력 양성 과정" />
          <Fact period="2022.07 — 2023.03" name="이젠컴퓨터아카데미" detail="AWS 클라우드 기반 Java 개발자 과정" />
          <Fact period="2016.09 — 2021.05" name="[비개발 경력] 의류 디자이너 근무" detail="" />
        </ul>
      </div>
      <div className="pt-6">
        <h3 className="text-xl font-bold">자격</h3>
        <p className="mt-2 text-lg">정보처리기능사</p>
      </div>
    </div>
  </PageSection>;
}

function Fact({ period, name, detail }: { period: string; name: string; detail: string }) {
  return <li className="grid grid-column-[7rem_1fr] py-4">
    <p className="text-xl font-bold">{name}</p>
    <p className="mt-1 block text-md font-normal">{detail}</p>
    <time className="pt-1 text-sm tabular-nums text-neutral-900">{period}</time>
  </li>;
}

export default ActivitySection;
