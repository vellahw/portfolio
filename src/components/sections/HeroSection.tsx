// import { useEffect, useState } from "react";
import { ArrowLink } from "../shared";

// const words = ["사용자의 흐름을 고민하는", "배우고 직접 만들어가는", "서비스의 흐름을 함께 고민하는"];

function HeroSection() {
  return <section className="relative items-center py-16 sm:py-20" aria-labelledby="hero-title">
    <div className="relative mb-12">
      <div className="relative z-10">
        <h1 id="hero-title" className="text-[clamp(2.2rem,8vw,3.8rem)] font-black leading-[1.3] tracking-[-0.075em]">
          안녕하세요,<br />
          개발자 장한원입니다<span className="text-[#CDDC39]">.</span>
        </h1>
      </div>
      <img className="pointer-events-none absolute right-0 top-[52px] z-0 w-28 -translate-y-1/2 object-contain sm:w-40 md:top-1/2 md:w-46" src="/hero-illustration.png" alt="캐릭터 일러스트" />
    </div>

    <div className="relative z-10 space-y-3 text-xl font-medium">
      <p>사용자가 고민하지 않아도 자연스럽게 이용할 수 있는 웹을 지향합니다.</p>
      <p>새로운 기술을 직접 구현하며 익히고 어려운 문제는 동료와 소통하며 해결까지 이어갑니다.</p>
      <p>프론트엔드 경험을 바탕으로 Java와 Spring Boot 기반의 개인 프로젝트를 통해 개발 범위를 넓히고 있습니다.</p>
    </div>

    <div className="mt-9 flex gap-6 text-md">
      <ArrowLink className="font-semibold" href="https://github.com/vellahw" label="Github" />
      <ArrowLink className="font-semibold" href="https://tavi.tistory.com/" label="Blog" />
    </div>
  </section>;
}

export default HeroSection;
