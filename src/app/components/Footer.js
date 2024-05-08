import React from "react";
import Link from "next/link";
import "../css/footer.css";

export default async function Footer() {
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
                3030 North Rocky Point Drive W. Suite 150 Tampa, FL 33607 USA
              </p>
              <div className="united-statesIcon">
                <Link href="tel:5617887073">(561) 788-7073</Link>
              </div>
            </div>
            <div className="ftrTopIn">
              <p>130 King St W, Suite 1900 Toronto, ON M5X 2A2 Canada</p>
              <div className="canadaIcon">
                <Link href="tel:6476943379">(647) 694-3379</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="ftrBtm">
          <ul className="ftrSocial">
            <li>
              <a aria-label="facebook" href="#">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a aria-label="twitter" href="#>">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a aria-label="instagram" href="#">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a aria-label="youtube" href="#">
                <i className="fa fa-youtube-play" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a aria-label="linkedin" href="#">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
          <p>
            © Amazing Business Results 2013 |
            <Link href="/terms-of-use">Terms of Use</Link>|
            <Link href="/privacy-policy">Privacy Policy</Link> |
            <Link href="/blog">Blog</Link>
          </p>
        </div>
      </footer>
    </>
  );
}
