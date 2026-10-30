import React, { useState } from "react";
import "./Contact.css";

// =============================================================================
// FORM BACKEND CONFIGURATION
// Web3Forms is 100% free with no server required.
// Reads from Vercel environment variable VITE_WEB3FORMS_ACCESS_KEY or fallback
// Get your free access key at https://web3forms.com
// =============================================================================
const FORM_ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
  "84c75a0f-c397-4674-bfd6-c09780b76030";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState("idle"); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState("");
  const [successNote, setSuccessNote] = useState("");

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const emailAddress = "javadeveloperravijaiswal@gmail.com";
  const phoneNumber = "+91 70425 21638";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+917042521638");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2400);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus("submitting");
    setErrorMessage("");

    try {
      const formData = new FormData();
      formData.append("access_key", ACCESS_KEY);
      formData.append("name", formState.name);
      formData.append("email", formState.email);
      formData.append("message", formState.message);
      formData.append("from_name", "Portfolio Contact Form");
      formData.append(
        "subject",
        `New Inquiry from ${formState.name} (Portfolio)`,
      );

      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const result = await response.json();

      if (response.ok && result.success) {
        if (result.message && result.message.includes("insert your actual")) {
          setSuccessNote(
            "Endpoint connection verified! To deliver inquiries straight to your inbox, add your free key from web3forms.com into Vercel environment variables.",
          );
        } else {
          setSuccessNote(
            "Your message has been delivered — I'll reply within 24 hours.",
          );
        }
        setSubmissionStatus("success");
      } else {
        setErrorMessage(
          result.message ||
            "Failed to deliver message. Please reach out via direct email below.",
        );
        setSubmissionStatus("error");
      }
    } catch (err) {
      setErrorMessage(
        "Network error connecting to form backend. Please reach out via direct email below.",
      );
      setSubmissionStatus("error");
    }
  };

  const handleResetForm = () => {
    setFormState({ name: "", email: "", message: "" });
    setSubmissionStatus("idle");
    setErrorMessage("");
  };

  return (
    <section
      id="contact"
      className="contact-section"
      aria-label="Contact Information"
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header-block">
          <span className="section-kicker">04 // Contact & Inquiries</span>
          <h2 className="section-headline">Get in touch.</h2>
          <p className="section-lead">
            Whether you are discussing a Java/Spring Boot backend role,
            exploring microservices architecture, or requesting a technical
            interview, use the form below or reach out directly.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="contact-layout">
          {/* PRIMARY PATH: Hosted Form Backend */}
          <div className="contact-form-wrapper">
            <div className="form-header">
              <span className="form-tag">
                // PRIMARY CONTACT METHOD (INLINE FORM)
              </span>
              <h3 className="form-title">Send a Message</h3>
            </div>

            {submissionStatus === "success" ? (
              <div
                className="form-feedback success-feedback"
                role="status"
                aria-live="polite"
              >
                <div className="feedback-icon" aria-hidden="true">
                  ✓
                </div>
                <h4 className="feedback-title">Message sent</h4>
                <p className="feedback-body">
                  Thank you, <strong>{formState.name}</strong>. {successNote}
                </p>
                <button
                  type="button"
                  className="btn-send-another"
                  onClick={handleResetForm}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                action={FORM_ENDPOINT}
                method="POST"
                className="contact-form"
                onSubmit={handleSubmit}
              >
                {/* Honeypot field for anti-spam */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="honeypot-field"
                  style={{ display: "none" }}
                />

                {/* Visible error state with immediate fallback link */}
                {submissionStatus === "error" && (
                  <div className="form-feedback error-feedback" role="alert">
                    <span className="error-title">Submission issue:</span>
                    <p className="error-body">{errorMessage}</p>
                    <p className="error-fallback-link">
                      Direct fallback:{" "}
                      <a
                        href={`mailto:${emailAddress}?subject=Inquiry%20from%20Portfolio`}
                      >
                        {emailAddress}
                      </a>
                    </p>
                  </div>
                )}

                <div className="form-field">
                  <label htmlFor="name" className="field-label">
                    Name <span className="required-star">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="field-input"
                    disabled={submissionStatus === "submitting"}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="email" className="field-label">
                    Email <span className="required-star">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="field-input"
                    disabled={submissionStatus === "submitting"}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="message" className="field-label">
                    Message <span className="required-star">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your opportunity, team, or project..."
                    className="field-textarea"
                    disabled={submissionStatus === "submitting"}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submissionStatus === "submitting"}
                  className="btn-submit-message"
                >
                  {submissionStatus === "submitting"
                    ? "Sending Message..."
                    : "Send Message"}
                </button>
              </form>
            )}
          </div>

          {/* SECONDARY PATH: Direct Email & Channels with Visible Fallback */}
          <div className="contact-secondary-channels">
            {/* Direct Email Card with Proper Syntax & Visible Fallback */}
            <div className="channel-box">
              <span className="channel-tag">
                // SECONDARY CONTACT: DIRECT EMAIL
              </span>

              {/* Proper Syntax: Anchor inside text element */}
              <p className="direct-item-text">
                <span className="channel-label">Email:</span>{" "}
                <a href={`mailto:${emailAddress}`} className="channel-anchor">
                  {emailAddress}
                </a>
              </p>

              {/* Visible Fallback for users whose browser blocks mailto: */}
              <div className="fallback-copy-row">
                <span className="fallback-note">Or copy:</span>{" "}
                <span className="selectable-text">{emailAddress}</span>
                <button
                  type="button"
                  className={`btn-copy-tag ${copiedEmail ? "is-copied" : ""}`}
                  onClick={handleCopyEmail}
                  aria-label="Copy email address to clipboard"
                >
                  {copiedEmail ? "Copied ✓" : "Copy"}
                </button>
              </div>

              <p className="channel-subtext">
                Primary inbox checked multiple times daily.
              </p>
            </div>

            {/* Direct Phone Card with Proper Syntax & Visible Fallback */}
            <div className="channel-box">
              <span className="channel-tag">// DIRECT PHONE & WHATSAPP</span>

              <p className="direct-item-text">
                <span className="channel-label">Phone:</span>{" "}
                <a href="tel:+917042521638" className="channel-anchor">
                  {phoneNumber}
                </a>
              </p>

              <div className="fallback-copy-row">
                <span className="fallback-note">Or copy:</span>{" "}
                <span className="selectable-text">{phoneNumber}</span>
                <button
                  type="button"
                  className={`btn-copy-tag ${copiedPhone ? "is-copied" : ""}`}
                  onClick={handleCopyPhone}
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? "Copied ✓" : "Copy"}
                </button>
              </div>

              <p className="channel-subtext">
                Available during IST working hours (UTC+05:30).
              </p>
            </div>

            {/* Resume Download Option for Clients */}
            <div className="channel-box resume-box">
              <span className="channel-tag">// CLIENT RESUME</span>
              <h4 className="resume-box-title">Download Resume (PDF)</h4>
              <p className="resume-box-desc">
                Complete 2-page curriculum vitae detailing 2 years enterprise
                Java experience, microservices, and education.
              </p>
              <a
                href="/Ravi_Jaiswal_Resume.pdf"
                download="Ravi_Jaiswal_Resume.pdf"
                className="btn-download-resume-pill"
                title="Download Ravi Jaiswal's Resume"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download Resume
              </a>
            </div>

            {/* Public Code & Network Profiles */}
            <div className="channel-box">
              <span className="channel-tag">// VERIFIED PROFILES</span>
              <div className="links-stack">
                <p className="direct-item-text">
                  <span className="channel-label">LinkedIn:</span>{" "}
                  <a
                    href="https://www.linkedin.com/in/ravi-jaiswal004/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-anchor"
                  >
                    linkedin.com/in/ravi-jaiswal004 ↗
                  </a>
                </p>
                <p className="direct-item-text">
                  <span className="channel-label">GitHub:</span>{" "}
                  <a
                    href="https://github.com/Ravijaiswal047"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-anchor"
                  >
                    github.com/Ravijaiswal047 ↗
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
