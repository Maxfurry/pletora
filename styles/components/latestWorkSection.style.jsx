import css from "styled-jsx/css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default css`
  section.latest-work-section {
    background-color: #575656;
    color: #fff;
    padding: 10%;
  }

  section.latest-work-section > h1 {
    text-transform: capitalize;
    height: 46px;
    width: 270px;
    font-size: 34px;
    font-weight: 500;
    line-height: 46px;
    margin-bottom: 50px;
  }

  section.latest-work-section > h1:after {
    content: "";
    display: block;
    height: 3px;
    /* background-color: #ff672f; */
    background-color: var(--main-color);
    margin-top: 10px;
    width: 51px;
  }

  section.latest-work-section .work-story {
    width: 100%;
    margin-bottom: 50px;
  }

  section.latest-work-section .work-story div {
    margin: 0 auto;
    height: 317px;
    width: 95%;
    background-color: #c8c8c8;
  }

  section.latest-work-section .work-story p {
    text-transform: capitalize;
    padding: 15px 0;
    text-align: center;
    border-bottom: 1px solid #c8c8c8;
  }
`;
