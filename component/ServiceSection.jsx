import serviceSectionStyle from "../styles/components/serviceSection.style";

export default function ServiceSection() {
  return (
    <>
      <section className="service-section" id="services">
        <div className="service-section-text">
          <h1> Our Services</h1>
          <p>
            These are some of the services we offer at Pletora Construction.
          </p>
        </div>
        <div className="service-item">
          <div>
            <img src="/static/images/service1.png" alt="" />
            <p>Architecture</p>
          </div>
        </div>
        <div className="service-item">
          <div>
            <img src="/static/images/service2.png" alt="" />
            <p>Consulting &#38; Planning</p>
          </div>
        </div>
        <div className="service-item">
          <div>
            <img src="/static/images/service3.png" alt="" />
            <p>Construction Services</p>
          </div>
        </div>
        <div className="service-item">
          <div>
            <img src="/static/images/service4.png" alt="" />
            <p>Engineering</p>
          </div>
        </div>
        <div className="service-item">
          <div>
            <img src="/static/images/service5.png" alt="" />
            <p>Environmental Graphics</p>
          </div>
        </div>
        <div className="service-item">
          <div>
            <img src="/static/images/service6.png" alt="" />
            <p>Interior Design</p>
          </div>
        </div>
      </section>
      <style jsx>{serviceSectionStyle}</style>
    </>
  );
}
