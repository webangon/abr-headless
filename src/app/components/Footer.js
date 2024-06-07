"use client";
import { useEffect } from "react";
import Script from "next/script";
import React from "react";
import Link from "next/link";
import "../css/footer.css";

export default function Footer() {
  useEffect(() => {
    var script = document.createElement("script");
    script.src = "/js/script.js";
    document.head.appendChild(script);
  }, []);
  return (
    <>
      <footer className="footer">
        <div className="ftrTop2">
          <Link className="ftrLogo" href="/" aria-label="Logo">
            <img src="/images/footer-logo.png" alt="Logo" />
          </Link>
          <div className="ftrTopMid">
            <div className="ftrTopIn">
              <p>
                3030 North Rocky Point Drive W. Suite
                <br /> 150 Tampa, FL 33607 USA
              </p>
              <div className="united-statesIcon">
                <Link href="tel:5617887073">(561) 788-7073</Link>
              </div>
            </div>
            <div className="ftrTopIn">
              <p>
                130 King St W, Suite 1900 Toronto,
                <br /> ON M5X 2A2 Canada
              </p>
              <div className="canadaIcon">
                <Link href="tel:6476943379">(647) 694-3379</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="ftrBtm">
          <ul className="ftrSocial">
            <li>
              <Link
                href="https://www.facebook.com/amazingbusinessresults"
                target="_blank"
              >
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.youtube.com/channel/UCCWrfyEe4sIYXpInhR0Y6_A"
                target="_blank"
              >
                <i className="fa fa-youtube-play" aria-hidden="true"></i>
              </Link>
            </li>
            <li>
              <Link
                href="https://ca.linkedin.com/company/amazing-business-results"
                target="_blank"
              >
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </Link>
            </li>
          </ul>
          <p>
            © Amazing Business Results 2013 |
            <Link href="/page/terms-of-use"> Terms of Use </Link>|
            <Link href="/page/privacy-policy"> Privacy Policy </Link> |
            <Link href="/blog"> Blog </Link>
          </p>
        </div>
        <Script src="/js/splide.min.js"></Script>
        <Script src="/js/glightbox.js"></Script>
        <link href="/css/glightbox.css" rel="stylesheet"></link>
        <link href="/css/splide.min.css" rel="stylesheet"></link>
      </footer>
    </>
  );
}
