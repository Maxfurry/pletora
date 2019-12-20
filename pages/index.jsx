import Layout from "../component/Layout";
import AboutSection from "../component/AboutSection";
import ServiceSection from "../component/ServiceSection";
import MissionSection from "../component/MissionSection";
import LatestWorkSection from "../component/LatestWorkSection";
import ContactSection from "../component/ContactSection";

function Home() {
  return (
    <Layout>
      <>
        <AboutSection />
        <ServiceSection />
        <MissionSection />
        <LatestWorkSection />
        <ContactSection />
      </>
    </Layout>
  );
}

export default Home;
