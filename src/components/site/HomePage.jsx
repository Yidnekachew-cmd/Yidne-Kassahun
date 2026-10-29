import NavBar from "./NavBar";
import Hero from "./Hero";
import { ToolMarquee, About, Skills, AIWorkflow, Experience, Projects, Credentials, Contact } from "./Sections";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
import Logo from "../Logo";
import { useContent } from "../../lib/content";

const HomePage = () => {
  const { loading } = useContent();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-brand-night">
        <Logo className="h-28 w-auto animate-pulse" light />
      </div>
    );
  }

  return (
    <div className="bg-brand-night">
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-brand-cream px-4 py-2 font-semibold text-brand-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <NavBar />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <ToolMarquee />
        <About />
        <Skills />
        <AIWorkflow />
        <Experience />
        <Projects />
        <Credentials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default HomePage;
