import Header from "./components/Header";
import ActivitySection from "./components/sections/ActivitySection";
import ExperienceSection from "./components/sections/ExperienceSection";
import HeroSection from "./components/sections/HeroSection";
import ProjectsSection from "./components/sections/ProjectsSection";

function App() {
  return (
    <>
      <Header />
      <main id="top" className="mx-auto w-[calc(100%-2.5rem)] max-w-[720px]">
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <ActivitySection />

        <footer className="flex justify-between py-5 text-xs text-neutral-500">
          <span>© 2026 장한원 <a className="transition-colors hover:text-neutral-500" href="mailto:iamhanwon@gmail.com">iamhanwon@gmail.com</a></span>
          <a className="link-arrow link-arrow-up" href="#top">
            <span className="link-arrow-label">맨 위로</span>
            <span className="link-arrow-icon" aria-hidden="true">↑</span>
          </a>
        </footer>
      </main>
    </>
  );
}

export default App;
