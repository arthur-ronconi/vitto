import BottomNavigationSection from "../sections/bottomnavigationsection";
import ContentBlockSection from "../sections/contentblocksection";
import HeroSection from "../sections/herosection";
import NavbarSection from "../sections/navbarsection";

export default function Home() {
  return (
    <div>
      <NavbarSection />
      <HeroSection />
      <ContentBlockSection />
      <BottomNavigationSection />
    </div>
  );
}
