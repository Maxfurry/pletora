import css from "styled-jsx/css";

export default css`
  .parentContainer {
    position: relative;
    padding-bottom: 77px; /* height of footer */
    min-height: 100vh;
  }

  main {
    width: 100%;
    margin: 0 auto;
    padding-top: 71px; /* height of header */
  }

  @media only screen and (min-width: 600px) {
    .parentContainer {
      padding-bottom: 77px; /* height of footer */
    }
  }
`;
