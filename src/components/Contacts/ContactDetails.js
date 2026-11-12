import React from "react";

class ContactDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      service: "Haircut & Styling",
      message: "",
      submitted: false,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
  };

  render() {
    return (
      <section className="section section-lg bg-default">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="heading-font">Get In Touch With Frame Salon</h2>
            <p className="text-muted" style={{ maxWidth: "680px", margin: "15px auto 0" }}>
              Have questions or ready to book your next hair transformation? Reach out via our primary or alternative contact channels, or send us a message below.
            </p>
          </div>

          {/* Contact Information Cards */}
          <div className="row row-30 justify-content-center mb-5">
            {/* Phone Card */}
            <div className="col-md-6 col-lg-3">
              <div
                className="card text-center p-4 h-100 shadow-sm"
                style={{
                  border: "1px solid #f0e9e1",
                  borderRadius: "8px",
                  background: "#faf8f5",
                }}
              >
                <div className="mb-3">
                  <span
                    className="fa fa-phone"
                    style={{ fontSize: "28px", color: "#C89667" }}
                  />
                </div>
                <h5 style={{ fontSize: "18px", fontWeight: "600" }}>Phone Numbers</h5>
                <hr style={{ width: "40px", borderColor: "#C89667", margin: "10px auto" }} />
                <p style={{ margin: "5px 0", fontSize: "14px" }}>
                  <strong>Primary:</strong>
                  <br />
                  <a href="tel:+12125550148" style={{ color: "#151515" }}>
                    +1 (212) 555-0148
                  </a>
                </p>
                <p style={{ margin: "5px 0", fontSize: "14px" }}>
                  <strong>Alternative / Booking:</strong>
                  <br />
                  <a href="tel:+12125550199" style={{ color: "#151515" }}>
                    +1 (212) 555-0199
                  </a>
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="col-md-6 col-lg-3">
              <div
                className="card text-center p-4 h-100 shadow-sm"
                style={{
                  border: "1px solid #f0e9e1",
                  borderRadius: "8px",
                  background: "#faf8f5",
                }}
              >
                <div className="mb-3">
                  <span
                    className="fa fa-envelope"
                    style={{ fontSize: "28px", color: "#C89667" }}
                  />
                </div>
                <h5 style={{ fontSize: "18px", fontWeight: "600" }}>Email Addresses</h5>
                <hr style={{ width: "40px", borderColor: "#C89667", margin: "10px auto" }} />
                <p style={{ margin: "5px 0", fontSize: "14px" }}>
                  <strong>Primary:</strong>
                  <br />
                  <a href="mailto:info@framesalon.com" style={{ color: "#151515" }}>
                    info@framesalon.com
                  </a>
                </p>
                <p style={{ margin: "5px 0", fontSize: "14px" }}>
                  <strong>Alternative / Support:</strong>
                  <br />
                  <a href="mailto:booking@framesalon.com" style={{ color: "#151515" }}>
                    booking@framesalon.com
                  </a>
                </p>
              </div>
            </div>

            {/* Locations Card */}
            <div className="col-md-6 col-lg-3">
              <div
                className="card text-center p-4 h-100 shadow-sm"
                style={{
                  border: "1px solid #f0e9e1",
                  borderRadius: "8px",
                  background: "#faf8f5",
                }}
              >
                <div className="mb-3">
                  <span
                    className="fa fa-map-marker"
                    style={{ fontSize: "28px", color: "#C89667" }}
                  />
                </div>
                <h5 style={{ fontSize: "18px", fontWeight: "600" }}>Studio Locations</h5>
                <hr style={{ width: "40px", borderColor: "#C89667", margin: "10px auto" }} />
                <p style={{ margin: "5px 0", fontSize: "14px" }}>
                  <strong>Main Studio:</strong>
                  <br />
                  1280 Lexington Avenue
                  <br />
                  New York, NY 10028
                </p>
                <p style={{ margin: "5px 0", fontSize: "14px" }}>
                  <strong>Alternative Studio:</strong>
                  <br />
                  452 Broadway, SoHo
                  <br />
                  New York, NY 10013
                </p>
              </div>
            </div>

            {/* Hours Card */}
            <div className="col-md-6 col-lg-3">
              <div
                className="card text-center p-4 h-100 shadow-sm"
                style={{
                  border: "1px solid #f0e9e1",
                  borderRadius: "8px",
                  background: "#faf8f5",
                }}
              >
                <div className="mb-3">
                  <span
                    className="fa fa-clock-o"
                    style={{ fontSize: "28px", color: "#C89667" }}
                  />
                </div>
                <h5 style={{ fontSize: "18px", fontWeight: "600" }}>Working Hours</h5>
                <hr style={{ width: "40px", borderColor: "#C89667", margin: "10px auto" }} />
                <p style={{ margin: "5px 0", fontSize: "14px" }}>
                  <strong>Monday - Friday:</strong>
                  <br />
                  9:00 AM - 8:00 PM
                </p>
                <p style={{ margin: "5px 0", fontSize: "14px" }}>
                  <strong>Saturday - Sunday:</strong>
                  <br />
                  10:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Contact / Appointment Form */}
          <div className="row row-50 justify-content-between align-items-center">
            <div className="col-lg-6">
              <h3>Send Us a Message</h3>
              <p className="mb-4">
                Fill in the details below to schedule an appointment or ask any question. Our team will get back to you promptly!
              </p>

              {this.state.submitted ? (
                <div className="alert alert-success p-4" role="alert">
                  <h5 className="alert-heading">Thank you!</h5>
                  <p className="mb-0">
                    Your inquiry has been received by Frame Salon. We will contact you at your provided details shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={this.handleSubmit} className="rd-form">
                  <div className="form-group mb-3">
                    <label htmlFor="contact-name" style={{ fontWeight: "500", fontSize: "14px" }}>
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Jane Doe"
                      required
                      value={this.state.name}
                      onChange={this.handleChange}
                      style={{ height: "48px", borderRadius: "4px" }}
                    />
                  </div>

                  <div className="row">
                    <div className="col-md-6 form-group mb-3">
                      <label htmlFor="contact-email" style={{ fontWeight: "500", fontSize: "14px" }}>
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="jane@example.com"
                        required
                        value={this.state.email}
                        onChange={this.handleChange}
                        style={{ height: "48px", borderRadius: "4px" }}
                      />
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label htmlFor="contact-phone" style={{ fontWeight: "500", fontSize: "14px" }}>
                        Phone Number *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        className="form-control"
                        placeholder="+1 (212) 000-0000"
                        required
                        value={this.state.phone}
                        onChange={this.handleChange}
                        style={{ height: "48px", borderRadius: "4px" }}
                      />
                    </div>
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor="contact-service" style={{ fontWeight: "500", fontSize: "14px" }}>
                      Desired Service
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      className="form-control"
                      value={this.state.service}
                      onChange={this.handleChange}
                      style={{ height: "48px", borderRadius: "4px" }}
                    >
                      <option value="Haircut & Styling">Haircut & Styling</option>
                      <option value="Hair Coloring & Highlights">Hair Coloring & Highlights</option>
                      <option value="Bridal & Event Hairstyling">Bridal & Event Hairstyling</option>
                      <option value="Hair Treatment & Care">Hair Treatment & Care</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  <div className="form-group mb-4">
                    <label htmlFor="contact-message" style={{ fontWeight: "500", fontSize: "14px" }}>
                      Message or Appointment Details
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows="4"
                      className="form-control"
                      placeholder="Tell us about your preferred date, time, or specific styling requests..."
                      value={this.state.message}
                      onChange={this.handleChange}
                      style={{ borderRadius: "4px" }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="button button-primary"
                    style={{ padding: "12px 36px" }}
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            <div className="col-lg-5">
              <div
                className="p-4 p-lg-5"
                style={{
                  background: "#151515",
                  color: "#ffffff",
                  borderRadius: "8px",
                }}
              >
                <h4 style={{ color: "#ffffff", marginBottom: "20px" }}>
                  Visit Frame Salon
                </h4>
                <p style={{ color: "rgba(255, 255, 255, 0.7)", marginBottom: "25px" }}>
                  We look forward to welcoming you at either of our modern studios. Walk-ins are welcome based on availability, but booking in advance is strongly recommended.
                </p>

                <h6 style={{ color: "#C89667", textTransform: "uppercase", fontSize: "13px", letterSpacing: "1px" }}>
                  Primary Location (Upper East Side)
                </h6>
                <p style={{ color: "rgba(255, 255, 255, 0.85)", marginBottom: "15px", fontSize: "14px" }}>
                  1280 Lexington Avenue, Suite 4A<br />
                  New York, NY 10028<br />
                  Tel: +1 (212) 555-0148
                </p>

                <h6 style={{ color: "#C89667", textTransform: "uppercase", fontSize: "13px", letterSpacing: "1px" }}>
                  Alternative Location (SoHo Studio)
                </h6>
                <p style={{ color: "rgba(255, 255, 255, 0.85)", marginBottom: "25px", fontSize: "14px" }}>
                  452 Broadway, 2nd Floor<br />
                  New York, NY 10013<br />
                  Tel: +1 (212) 555-0199
                </p>

                <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.15)", paddingTop: "20px" }}>
                  <p style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "13px", margin: 0 }}>
                    Emergency styling requests or same-day inquiries: please call our alternative hotline directly at <strong>+1 (212) 555-0199</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactDetails;

