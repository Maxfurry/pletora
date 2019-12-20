import css from "styled-jsx/css";

export default css`
  header {
    background-image: url("/static/images/landingImage.png");
    height: 100vh;
    color: #fff;
    padding: 30px 20px;
    position: relative;
  }

  .logo {
    display: relative;
    height: 28px;
    cursor: pointer;
  }

  .logo img {
    height: 50px;
    cursor: pointer;
  }

  nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    font-size: 14px;
  }

  nav span.hambuger,
  nav span.hambuger:before,
  nav span.hambuger:after {
    height: 1px;
    color: #000;
    width: 40px;
    background-color: #fff;
    cursor: pointer;
    transition: 700ms ease-in-out 0s;
  }

  nav span.hambuger:before,
  nav span.hambuger:after {
    content: "";
    display: block;
    margin-top: 8px;
  }

  nav span.hambuger.close {
    height: 2px;
    transform: rotate(45deg);
    width: 30px;
  }
  nav span.hambuger.close:before {
    content: "";
    display: block;
    height: 2px;
    width: 30px;
    margin-top: 0;
    margin-left: 0;
    transform: rotate(90deg);
  }

  nav span.hambuger.close:after {
    display: none;
  }

  nav .nav-items {
    display: none;
  }

  nav .nav-items.show {
    display: block;
  }

  nav .nav-items {
    position: absolute;
    background-color: #fff;
    width: 140px;
    right: 25px;
    top: 50px;
    color: #000;
    border-radius: 5px;
    transform: scale(1, 1);
    clip-path: circle(150% at 100% 0%);
    transition: all 700ms ease-in-out 0s;
    padding: 10px;
    z-index: 999;
  }

  nav ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    width: fit-content;
    margin: 0 auto;
    text-align: left;
  }

  nav ul li {
    font-weight: bold;
  }

  nav ul li.active {
    margin-left: -10px;
    padding-left: 10px;
    border-radius: 3px;
    /* background-color: #ff672f; */
    background-color: var(--main-color);
  }

  nav ul li a {
    text-decoration: none;
    color: inherit;
  }

  section.hero-text {
    position: absolute;
    bottom: 15%;
    width: 100%;
    left: 5%;
  }

  section.hero-text h1 {
    font-size: 32px;
    line-height: 35px;
    padding-bottom: 20px;
  }

  section.hero-text p {
    width: 80%;
    margin-bottom: 20px;
    font-size: 15px;
  }

  @media only screen and (min-width: 461px) {
    section.hero-text {
      width: 70%;
    }
  }

  @media only screen and (min-width: 768px) {
    header {
      height: 70vh;
      padding: 30px 50px;
    }

    nav span.hambuger,
    nav span.hambuger.close {
      display: none;
    }

    nav .nav-items,
    nav .nav-items.show {
      position: static;
      color: #fff;
      width: fit-content;
      padding: 0;
      display: inline-flex;
      background-color: transparent;
    }

    nav ul {
      list-style: none;
      flex-direction: row;
      display: flex;
      width: 100%;
    }

    nav ul li {
      margin-right: 43px;
      text-transform: uppercase;
      cursor: pointer;
      font-weight: normal;
    }

    nav ul li:last-child {
      margin-right: 0;
    }

    nav ul li.active {
      margin-left: 0;
      padding-left: 0;
      background-color: transparent;
      /* border-bottom: 2px solid #ff672f; */
      border-bottom: 2px solid var(--main-color);
      border-radius: 2px;
    }

    nav ul li:hover {
      /* border-bottom: 2px solid #ff672f; */
      background-color: var(--main-color);
      border-radius: 2px;
    }

    section.hero-text h1 {
      font-size: 58px;
      line-height: 60px;
      padding-bottom: 30px;
    }

    section.hero-text p {
      font-size: inherit;
    }

    section.hero-text {
      bottom: 70px;
    }
  }

  @media only screen and (min-width: 989px) {
    section.hero-text {
      bottom: 120px;
      width: 60%;
    }
  }
`;
