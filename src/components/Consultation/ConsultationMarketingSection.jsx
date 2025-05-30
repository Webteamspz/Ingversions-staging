import React from "react";

const ConsultationMarketingSection = () => {
  // Only redirect to Calendly on form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to your Calendly scheduling page
    window.location.href = "https://calendly.com/ingversionsdigital/30min?month=2025-04";
  };

  return (
    <section id="marketing-section" className="marketing-section">
      <div className="marketing-container">
        <div className="marketing-left">
          <h2>Transform Your Business With Strategic Marketing</h2>
          <p>
            Unlock your business potential with our expert marketing solutions. We create tailored
            strategies that drive growth and deliver measurable results.
          </p>
          <ul>
            <li>
              <strong>Data-Driven Approach</strong>
              <p>Make informed decisions with comprehensive analytics and insights.</p>
            </li>
            <li>
              <strong>Targeted Campaigns</strong>
              <p>Reach your ideal audience with precision-targeted marketing campaigns.</p>
            </li>
          </ul>
        </div>
        <div className="marketing-right">
          <div className="consultation-box">
            <h3>Free Consultation</h3>
            <div className="custom-divider"></div>
            <form className="consultation-form" onSubmit={handleSubmit}>
              <label htmlFor="fullName" className="block text-sm mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="custom-input"
                placeholder="John Doe"
                required
              />

              <label htmlFor="email" className="block text-sm mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="custom-input"
                placeholder="john@example.com"
                required
              />

              <label htmlFor="message" className="block text-sm mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="custom-input"
                rows={4}
                placeholder="Tell us about your project"
                required
              />

              <button type="submit">Schedule Free Call</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationMarketingSection;
