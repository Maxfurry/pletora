import LocalMap from "./localMap";

import contactSectionStyle from "../styles/components/contactSection.style";

function ContactInfo() {
  const info = [
    {
      label: "Operational Office: ",
      info:
        "1C, Alhaji Masha Close/Ademola Street, Off Awolowo Road, Ikoyi, Lagos."
    },
    {
      label: "Email: ",
      info: "contactus@pletoraconstruction.com"
    },
    {
      label: "Phone Number: ",
      info: "+234(0) 809 319 8241, 01 6328 493-4"
    }
  ];

  return (
    <>
      <ul>
        {info.map((singleInfo, i) => {
          const { label, info } = singleInfo;
          return (
            <li key={i}>
              <strong>{label}</strong>
              {info}
            </li>
          );
        })}
      </ul>
      <style jsx>{contactSectionStyle}</style>
    </>
  );
}

export default function ContactSection() {
  return (
    <>
      <section className="contact-section" id="contact">
        <div>
          <h1>Office address</h1>
          <div className="local-map">
            <LocalMap />
          </div>
        </div>
        <div>
          <h1>Get in touch</h1>
          <form action="">
            <div>
              <input type="text" placeholder="name" />
              <input type="text" placeholder="email address" />
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Send a message to us..."
            ></textarea>
            <button>send message</button>
          </form>
        </div>
        <div className="contact-info">
          <ContactInfo />
        </div>
      </section>
      <style jsx>{contactSectionStyle}</style>
    </>
  );
}
