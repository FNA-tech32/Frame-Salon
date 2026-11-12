import React from "react";

import i from "../assets/images/logo-inverse-162x54.png";

class Footer extends React.Component {
  render() {
    return (
      <footer className="section footer-minimal context-dark">
        <div className="container wow-outer">
          <div className="wow fadeIn">
            <div className="row row-60">
              <div className="col-12">
                <a href="index.html">
                  <img
                    src={i}
                    alt="Frame Salon"
                    width={162}
                    height={54}
                    srcSet="images/logo-inverse-324x108.png 2x"
                  />
                </a>
              </div>
              <div className="col-12">
                <ul className="footer-minimal-nav">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="news.html">Blog</a>
                  </li>
                  <li>
                    <a href="contacts.html">Contacts</a>
                  </li>
                  <li>
                    <a href="pricing.html">Pricing</a>
                  </li>
                  <li>
                    <a href="about-us.html">About</a>
                  </li>
                </ul>
              </div>

              {/* Contact Details & Alternative Details */}
              <div className="col-12">
                <div
                  className="footer-contact-info py-4 my-2"
                  style={{
                    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <div className="row justify-content-center text-center">
                    <div className="col-md-4 col-sm-6 my-2">
                      <div className="contact-item">
                        <span
                          className="icon icon-sm fa fa-phone mb-2"
                          style={{
                            color: "#C89667",
                            fontSize: "20px",
                            display: "block",
                          }}
                        />
                        <h6
                          className="text-white"
                          style={{
                            fontSize: "14px",
                            textTransform: "uppercase",
                            letterSpacing: "1px",
                          }}
                        >
                          Phone Details
                        </h6>
                        <p
                          style={{
                            margin: 0,
                            fontSize: "14px",
                            color: "rgba(255, 255, 255, 0.8)",
                          }}
                        >
                          Primary:{" "}
                          <a
                            href="tel:+12125550148"
                            style={{ color: "rgba(255, 255, 255, 0.8)" }}
                          >
                            +1 (212) 555-0148
                          </a>
                        </p>
                        <p
                          style={{
                            margin: 0,
                            fontSize: "14px",
                            color: "rgba(255, 255, 255, 0.8)",
                          }}
                        >
                          Alternative:{" "}
                          <a
                            href="tel:+12125550199"
                            style={{ color: "rgba(255, 255, 255, 0.8)" }}
                          >
                            +1 (212) 555-0199
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 my-2">
                      <div className="contact-item">
                        <span
                          className="icon icon-sm fa fa-envelope mb-2"
                          style={{
                            color: "#C89667",
                            fontSize: "20px",
                            display: "block",
                          }}
                        />
                        <h6
                          className="text-white"
                          style={{
                            fontSize: "14px",
                            textTransform: "uppercase",
                            letterSpacing: "1px",
                          }}
                        >
                          Email Details
                        </h6>
                        <p
                          style={{
                            margin: 0,
                            fontSize: "14px",
                            color: "rgba(255, 255, 255, 0.8)",
                          }}
                        >
                          Primary:{" "}
                          <a
                            href="mailto:info@framesalon.com"
                            style={{ color: "rgba(255, 255, 255, 0.8)" }}
                          >
                            info@framesalon.com
                          </a>
                        </p>
                        <p
                          style={{
                            margin: 0,
                            fontSize: "14px",
                            color: "rgba(255, 255, 255, 0.8)",
                          }}
                        >
                          Alternative:{" "}
                          <a
                            href="mailto:booking@framesalon.com"
                            style={{ color: "rgba(255, 255, 255, 0.8)" }}
                          >
                            booking@framesalon.com
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-12 my-2">
                      <div className="contact-item">
                        <span
                          className="icon icon-sm fa fa-map-marker mb-2"
                          style={{
                            color: "#C89667",
                            fontSize: "20px",
                            display: "block",
                          }}
                        />
                        <h6
                          className="text-white"
                          style={{
                            fontSize: "14px",
                            textTransform: "uppercase",
                            letterSpacing: "1px",
                          }}
                        >
                          Studio Locations
                        </h6>
                        <p
                          style={{
                            margin: 0,
                            fontSize: "14px",
                            color: "rgba(255, 255, 255, 0.8)",
                          }}
                        >
                          Main: 1280 Lexington Ave, NY 10028
                        </p>
                        <p
                          style={{
                            margin: 0,
                            fontSize: "14px",
                            color: "rgba(255, 255, 255, 0.8)",
                          }}
                        >
                          Alternative: 452 Broadway, SoHo, NY 10013
                        </p>
                        <p
                          style={{
                            margin: 0,
                            fontSize: "12px",
                            color: "rgba(255, 255, 255, 0.5)",
                          }}
                        >
                          Mon-Fri: 9am-8pm | Sat-Sun: 10am-6pm
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <ul className="social-list">
                  <li>
                    <a
                      className="icon icon-sm icon-circle icon-circle-md icon-bg-white fa-facebook"
                      href="#"
                    />
                  </li>
                  <li>
                    <a
                      className="icon icon-sm icon-circle icon-circle-md icon-bg-white fa-instagram"
                      href="#"
                    />
                  </li>
                  <li>
                    <a
                      className="icon icon-sm icon-circle icon-circle-md icon-bg-white fa-twitter"
                      href="#"
                    />
                  </li>
                  <li>
                    <a
                      className="icon icon-sm icon-circle icon-circle-md icon-bg-white fa-youtube-play"
                      href="#"
                    />
                  </li>
                  <li>
                    <a
                      className="icon icon-sm icon-circle icon-circle-md icon-bg-white fa-pinterest-p"
                      href="#"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <p className="rights">
              <span>© </span>
              <span className="copyright-year" />
              <span> </span>
              <span>All Rights Reserved.</span>
              <span> </span>
              <span>Frame Salon</span>
              <span>. </span>
              <a href="privacy-policy.html">Privacy Policy</a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
