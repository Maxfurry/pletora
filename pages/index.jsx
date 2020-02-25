import Head from "next/head";

import Layout from "../component/Layout";
import AboutSection from "../component/AboutSection";
import ServiceSection from "../component/ServiceSection";
import MissionSection from "../component/MissionSection";
import LatestWorkSection from "../component/LatestWorkSection";
import ContactSection from "../component/ContactSection";

function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <Layout>
        <>
          <AboutSection />
          <ServiceSection />
          <MissionSection />
          <LatestWorkSection />
          <ContactSection />
        </>
      </Layout>
    </>
  );
}

export default Home;
