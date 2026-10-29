import NavBar from "./NavBar";
import Hero from "./Hero";
import { ToolMarquee, About, Skills, AIWorkflow, Experience, Projects, Credentials, Contact } from "./Sections";
import Footer from "./Footer";
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
      <NavBar />
      <main>
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
    </div>
  );
};

export default HomePage;
