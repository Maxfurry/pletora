import { useState } from "react";
import Link from "next/link";
import headerStyle from "../styles/components/hearder.style";

export default function Header() {
  const [shouldShowMenu, setShowMenuState] = useState(false);

  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <Link href="/">
              <img src="/static/images/logo.svg" alt="LOGO" />
            </Link>
          </div>
          <span
            className={`hambuger ${shouldShowMenu && "close"}`}
            onClick={() => setShowMenuState(!shouldShowMenu)}
          />
          <div className={`nav-items ${shouldShowMenu && "show"}`}>
            <ul onClick={() => setShowMenuState(false)}>
              <li className="active">
                <Link href="#home">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="#about">
                  <a>About Us</a>
                </Link>
              </li>
              <li>
                <Link href="#services">
                  <a>Services</a>
                </Link>
              </li>
              <li>
                <Link href="#projects">
                  <a>Projects</a>
                </Link>
              </li>
              <li>
                <Link href="#contact">
                  <a>Contact Us</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <section className="hero-text">
          <h1>We are redefining construction and building</h1>
          <p>
            We work with Organizational leaders and industry partners in health
            Care, education and workplace settings to create the ideal future.
          </p>
          <button>View Projects</button>
        </section>
      </header>
      <style jsx>{headerStyle}</style>
    </>
  );
}
