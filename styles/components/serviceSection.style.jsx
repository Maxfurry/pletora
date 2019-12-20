import css from "styled-jsx/css";

export default css`
  section.service-section {
    display: flex;
    flex-wrap: wrap;
    padding: 10%;
    margin: 0 auto;
    margin-top: 50px;
    background-color: #f9f9f9;
    justify-content: space-between;
  }

  section.service-section .service-section-text {
    flex-basis: 100%;
    width: fit-content;
    margin: 0 auto;
  }

  section.service-section .service-section-text h1 {
    height: 46px;
    width: 220px;
    text-transform: capitalize;
    margin-bottom: 15px;
    font-size: 34px;
    font-weight: 500;
    line-height: 46px;
    text-align: left;
  }

  section.service-section .service-section-text p {
    height: 54px;
    max-width: 375px;
    font-size: 20px;
    font-weight: 300;
    line-height: 27px;
  }

  section.service-section .service-section-text p:after {
    content: "";
    display: block;
    height: 3px;
    /* background-color: #ff672f; */
    background-color: var(--main-color);
    margin-top: 10px;
    width: 51px;
  }

  section.service-section .service-item {
    height: 193px;
    min-width: 261px;
    flex-basis: 80%;
    margin: 80px auto 0;
    background-color: #f9f9f9;
    border: 0.5px solid #000;
  }

  section.service-section .service-item:last-child {
    margin-bottom: 50px;
  }

  section.service-section .service-item div {
    width: 170px;
    margin: 0 auto;
    display: flex;
    height: 100%;
    justify-content: center;
    flex-direction: column;
  }

  section.service-section .service-item img {
    height: 52px;
    width: 52px;
    margin: 0 auto 20px;
  }

  section.service-section .service-item p {
    height: 22px;
    width: 170px;
    color: #000;
    font-family: Avenir;
    font-size: 16px;
    font-weight: 300;
    line-height: 22px;
    text-align: center;
  }

  @media only screen and (min-width: 768px) {
    section.service-section .service-item {
      flex-basis: 46%;
    }

    section.service-section .service-item:last-child {
      margin-bottom: 0;
    }
  }

  @media only screen and (min-width: 938px) {
    section.service-section {
      justify-content: flex-start;
    }

    section.service-section .service-section-text {
      flex-basis: 50%;
      margin: 0;
    }

    section.service-section .service-section-text p {
      padding-right: 5px;
    }

    section.service-section .service-item {
      flex-basis: 25%;
      border-right: none;
      margin: 0;
      min-width: 170px;
    }

    section.service-section .service-item:nth-last-child(6) {
      border-bottom: none !important;
    }

    section.service-section .service-item:last-child {
      border-right: 0.5px solid #000;
    }

    section.service-section .service-item:nth-last-child(5) {
      border-bottom: none;
      border-right: 0.5px solid #000;
    }
  }

  @media only screen and (min-width: 988px) {
    section.service-section .service-section-text p {
      padding-right: 0;
    }
  }
`;
