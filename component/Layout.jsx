import { cloneElement } from "react";

import Header from "../component/Header";
import Footer from "../component/Footer";
import globalStyle from "../styles/global.style";
import layoutStyle from "../styles/components/layout.style";

import "../styles/emptyStyle.css";

export default function({ children }) {
  return (
    <div className="parentContainer">
      <Header />
      <main>{cloneElement(children)}</main>
      <Footer />
      <style jsx>{globalStyle}</style>
      <style jsx>{layoutStyle}</style>
    </div>
  );
}
