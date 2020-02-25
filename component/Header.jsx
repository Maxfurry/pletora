import { useState, useRef, useLayoutEffect } from "react";
import Link from "next/link";
import headerStyle from "../styles/components/hearder.style";

export default function Header() {
  const [shouldShowMenu, setShowMenuState] = useState(false);
  const [hideOnScroll, setHideOnScroll] = useState(true);

  const isBrowser = typeof window !== `undefined`;

  function getScrollPosition({ element, useWindow }) {
    if (!isBrowser) return { x: 0, y: 0 };

    const target = element ? element.current : document.body;
    const position = target.getBoundingClientRect();

    return useWindow
      ? { x: window.scrollX, y: window.scrollY }
      : { x: position.left, y: position.top };
  }

  function useScrollPosition(effect, deps, element, useWindow, wait) {
    const position = useRef(getScrollPosition({ useWindow }));

    let throttleTimeout = null;

    const callBack = () => {
      const currPos = getScrollPosition({ element, useWindow });
      effect({ prevPos: position.current, currPos });
      position.current = currPos;
      throttleTimeout = null;
    };

    useLayoutEffect(() => {
      const handleScroll = () => {
        if (wait) {
          if (throttleTimeout === null) {
            throttleTimeout = setTimeout(callBack, wait);
          }
        } else {
          callBack();
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }, deps);
  }

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > -100;

      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll]
  );

  return (
    <>
      <header id="home">
        <nav>
          <div className="logo">
            <Link href="/">
              <img src="/static/images/logo.svg" alt="LOGO" />
            </Link>
          </div>
          {!hideOnScroll && (
            <div className="go-to-top">
              <Link href="#home">
                <div className="go-to-top-button">
                  <img src="/static/images/upArrow.png" alt="GO TO TOP" />
                </div>
              </Link>
            </div>
          )}
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
            We work with organizational leaders and industry partners in health
            care, education and workplace settings to create the ideal future.
          </p>
        </section>
      </header>
      <style jsx>{headerStyle}</style>
    </>
  );
}
