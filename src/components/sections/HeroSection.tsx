import { useEffect, useState } from "react";
import portrait from "../../assets/hero-illustration.png";
import resumePdf from "../../assets/resume.pdf";
import { ArrowLink } from "../shared";

const words = ["Frontend", "UI/UX", "Java"];

function HeroSection() {
  return <section className="relative items-center py-16 sm:py-20" aria-labelledby="hero-title">
    <div className="relative mb-12">
      <div className="relative z-10">
        <h1 id="hero-title" className="text-[clamp(2.2rem,8vw,4.2rem)] font-extrabold leading-[1.3] tracking-[-0.075em]">
          안녕하세요,<br />
          <span><RotatingWord />를 좋아하는</span><br />
          개발자 장한원입니다<span className="text-neutral-400">.</span>
        </h1>
      </div>
      <img className="pointer-events-none absolute right-0 top-[72px] z-0 w-28 -translate-y-1/2 object-contain sm:w-40 md:top-1/2 md:w-56" src={portrait} alt="캐릭터 일러스트" />
    </div>

    <div className="relative z-10 space-y-3 text-xl font-medium">
      <p>사용자가 고민하지 않아도 자연스럽게 이용할 수 있는 웹을 지향합니다.</p>
      <p>작은 불편도 놓치지 않고 더 나은 흐름과 인터랙션으로 개선하는 과정을 좋아합니다.</p>
      <p>Java와 Spring 기반의 개인 프로젝트를 통해 화면 너머의 서비스 구조와 데이터 흐름을 이해하는 개발자로 성장하고 있습니다.</p>
    </div>

    <div className="mt-9 flex gap-6 text-md">
      <ArrowLink className="font-semibold" href="https://github.com/vellahw" label="Github" />
      <ArrowLink className="font-semibold" href="https://tavi.tistory.com/" label="Blog" />
      <ArrowLink className="font-semibold" href={resumePdf} label="Resume" />
    </div>
  </section>;
}

function RotatingWord() {
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    const pause = !deleting && value === word ? 1100 : deleting && value === "" ? 250 : deleting ? 55 : 95;
    const timer = window.setTimeout(() => {
      if (!deleting && value === word) setDeleting(true);
      else if (deleting && value === "") {
        setDeleting(false);
        setIndex((current) => (current + 1) % words.length);
      } else setValue((current) => deleting ? current.slice(0, -1) : word.slice(0, current.length + 1));
    }, pause);
    return () => window.clearTimeout(timer);
  }, [deleting, index, value]);

  return <span className="text-neutral-400" aria-label={words[index]}>{value}<span className="ml-0.5 inline-block h-[.9em] w-px translate-y-1 animate-pulse bg-neutral-500" aria-hidden="true" /></span>;
}

export default HeroSection;
