import { useEffect, useState, useLayoutEffect } from "react";
import Slider from "react-slick";

import latestWorkSectionStyle from "../styles/components/latestWorkSection.style";

const Images = [
  {
    image_url: "/static/images/sampleWork1.png",
    text: "Road Construction 2017"
  },
  {
    image_url: "/static/images/sampleWork2.png",
    text: "Road Construction 2017"
  },
  {
    image_url: "/static/images/sampleWork3.png",
    text: "Road Construction 2017"
  },
  {
    image_url: "/static/images/aboutSection.png",
    text: "Road Construction 2017"
  }
];

const settings = {
  dots: false,
  infinite: true,
  speed: 2500,
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToScroll: 1,
  lazyLoad: false
};

export default function LatestWorkSection() {
  const [size, setSize] = useState(0);

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (Images && Images.length < 3) {
      settings.slidesToShow = Images.length;
    }

    if (window.innerWidth > 1024) {
      settings.slidesToShow = 3;
    }

    if (window.innerWidth <= 1024) {
      settings.slidesToShow = 2;
    }

    if (window.innerWidth <= 768) {
      settings.slidesToShow = 1;
    }
  }, [size]);

  return (
    <>
      <section className="latest-work-section" id="projects">
        <h1>Our Latest Work</h1>
        <div>
          <Slider {...settings} className="wrapper">
            {Images.map((image, i) => (
              <div className="work-story" key={i}>
                <div
                  style={{
                    background: `url(${image.image_url}) no-repeat`,
                    backgroundSize: "cover"
                  }}
                ></div>
                {/* <p>{image.text}</p> */}
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <style jsx>{latestWorkSectionStyle}</style>
    </>
  );
}
