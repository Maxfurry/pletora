import css from "styled-jsx/css";

export default css`
  section.contact-section {
    display: flex;
    background-color: #2b2b2b;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10%;
  }

  section.contact-section h1 {
    color: #fff;
    text-transform: capitalize;
  }

  section.contact-section h1:after {
    content: "";
    display: block;
    height: 3px;
    /* background-color: #ff672f; */
    background-color: var(--main-color);
    margin-top: 10px;
    width: 51px;
  }

  section.contact-section div {
    margin: 0 auto;
    flex-basis: 100%;
    margin-bottom: 20px;
  }

  section.contact-section div.contact-info {
    margin: 0 auto 30px;
    flex-basis: 100%;
    color: #fff;
  }

  section.contact-section div:first-child {
    height: 100%;
    width: 100%;
  }

  section.contact-section div:first-child .local-map {
    margin-top: 30px;
    height: 320px;
  }

  section.contact-section div form {
    margin-top: 30px;
  }

  section.contact-section div form div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  section.contact-section div form div input {
    width: 100%;
    height: 55px;
    padding: 10px;
    background-color: #c8c8c8;
    border: none;
  }

  section.contact-section div form div input:first-child {
    margin-bottom: 20px;
  }

  section.contact-section div form div input::placeholder {
    text-transform: uppercase;
  }

  section.contact-section div form textarea {
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
    background-color: #c8c8c8;
  }

  section.contact-section div form div input::placeholder,
  section.contact-section div form textarea::placeholder {
    color: #000;
    font-size: 18px;
    line-height: 25px;
  }

  section.contact-section div form button {
    float: right;
  }

  @media only screen and (min-width: 768px) {
    section.contact-section div form div input {
      width: 48%;
    }

    section.contact-section div {
      flex-basis: 49%;
    }
  }
`;
