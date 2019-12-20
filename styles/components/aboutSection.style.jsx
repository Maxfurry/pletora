import css from "styled-jsx/css";

export default css`
  section.about-section {
    display: flex;
    text-align: center;
    flex-wrap: wrap;
  }

  section.about-section div {
    flex-basis: 50%;
    padding: 0 40px;
    margin-top: 30px;
    margin: 0 auto;
  }

  section.about-section div:first-child {
    margin-bottom: 50px;
  }

  section.about-section div p {
    max-width: 528px;
    min-width: 320px;
    margin: 0 auto;
    font-weight: 300;
    line-height: 27px;
    text-align: center;
  }

  section.about-section div p,
  section.about-section div h1 {
    margin-bottom: 30px;
  }

  section.about-section div h1 {
    font-weight: 500;
    font-size: 34px;
    line-height: 46px;
    letter-spacing: 0.85px;
    vertical-align: top;
  }

  section.about-section div h1:after {
    content: "";
    display: block;
    height: 3px;
    width: 51px;
    border-radius: 6px;
    /* background-color: #ff672f; */
    background-color: var(--main-color);
    margin: 0 auto;
  }

  @media only screen and (min-width: 938px) {
    section.about-section div:first-child {
      margin-bottom: 0;
    }
  }

  @media only screen and (max-width: 482px) {
    section.about-section div {
      padding: 0;
    }

    section.about-section div img {
      width: 290px;
    }

    section.about-section div p {
      width: 100%;
    }
  }
`;
