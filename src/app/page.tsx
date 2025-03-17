import Footer from "./components/footer";
import AboutMe from "./about/page";
import PortfolioPage from "./components/projects";

export default function Home() {
  return (
    <div>
      <AboutMe />
      <main>
        <PortfolioPage />

      </main>
      <Footer />
    </div>
  );
}
