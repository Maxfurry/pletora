import css from "styled-jsx/css";

export default css.global`
  @import url("https://fonts.googleapis.com/css?family=avenir");
  @font-face {
    font-family: "uknk";
    src: url("/static/avenir_font/AvenirLTStd-Book.otf") format("opentype");
    font-weight: bold;
  }
  :root {
    --main-color: #ffbb5c;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-size: 20px;
    line-height: 27px;
    font-family: Avenir, "Nunito";
    font-family: "avenir";
    // font-family: "uknk";
    min-width: 320px;
    overflow-x: hidden;
  }

  button {
    color: #000;
    height: 47px;
    width: 215px;
    font-size: 14px;
    background-color: #ff672f;
    background-color: var(--main-color);
    text-transform: uppercase;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: #353333;
    color: #fff;
  }

  section.contact-section div.contact-info ul {
    list-style-type: none;
  }
`;
