import aboutSectionStyle from "../styles/components/aboutSection.style";

export default function AboutSection() {
  return (
    <>
      <section className="about-section" id="about">
        <div>
          <h1>About Pletora</h1>
          <p>
            Pletora Construction is a Nigerian design, architecture, engineering
            and planning company. We unite a diverse team of architects,
            engineers, builders and industry experts to help bring our customers
            dreams to life.
          </p>
          <button>View Projects</button>
        </div>
        <div>
          {" "}
          <img src="/static/images/aboutSection.png" />
        </div>
      </section>
      <style jsx>{aboutSectionStyle}</style>
    </>
  );
}
