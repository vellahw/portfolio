const navigation = [
  { href: "#projects", label: "개인 프로젝트" },
  { href: "#experience", label: "커리어" },
  { href: "#education", label: "활동" },
];

function Header() {
  return <header className="sticky top-0 z-20 mx-auto flex h-16 w-[calc(100%-2.5rem)] max-w-[720px] items-center justify-between border-b border-neutral-100 bg-white/95 backdrop-blur">
    <a className="text-lg font-semibold tracking-[-0.04em]" href="#top" aria-label="장한원 포트폴리오 처음으로">iamhanwon</a>
    <nav aria-label="주요 메뉴" className="flex gap-5 font-bold tracking-[-0.04em] sm:gap-7 sm:text-sm md:text-lg">
      {navigation.map((item) =>
        <a className="hover:text-neutral-500" href={item.href} key={item.href}>{item.label}</a>
      )}
    </nav>
  </header>;
}

export default Header;
