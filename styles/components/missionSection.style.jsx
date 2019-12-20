import css from "styled-jsx/css";

export default css`
  section.mission-section {
    display: flex;
    text-align: center;
    flex-direction: column;
    padding: 10%;
    padding-top: 5%;
  }

  section.mission-section div p {
    max-width: 648px;
    margin: 0 auto;
    font-size: 26px;
    font-weight: 300;
    line-height: 41px;
    text-align: center;
  }

  section.mission-section div p span {
    /* color: #ff672f; */
    color: var(--main-color);
    font-weight: 700;
  }

  section.mission-section div p,
  section.mission-section div h1 {
    margin-bottom: 30px;
  }

  section.mission-section div h1 {
    font-weight: 500;
    font-size: 34px;
    line-height: 46px;
    letter-spacing: 0.85px;
    vertical-align: top;
  }

  section.mission-section div h1:after {
    content: "";
    display: block;
    height: 3px;
    width: 51px;
    border-radius: 6px;
    /* background-color: #ff672f; */
    background-color: var(--main-color);
    margin: 10px auto 0;
  }

  section.mission-section div img {
    margin-bottom: 20px;
  }
`;
