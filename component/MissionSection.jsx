import missionSectionStyle from "../styles/components/missionSection.style";

export default function MissionSection() {
  return (
    <>
      <section className="mission-section">
        <div>
          <h1>Company's Mission</h1>
        </div>
        <div>
          <img src="/static/images/aprostrophe.png" alt="" />
        </div>
        <div>
          <p>
            At <span>Pletora</span> we provide every client with the most
            innovative, highest quality standards of design, engineering and
            construction services in the safest and most sustainable way
            possible.
          </p>
        </div>
      </section>
      <style jsx>{missionSectionStyle}</style>
    </>
  );
}
