import React, { useState } from "react";

const ConsultationMarketingSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: ""
  });

  // Update state on input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/save-to-excel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Successfully saved data - redirect to your chosen URL
        window.location.href = "https://calendly.com/ingversionsdigital/30min?month=2025-04"; // Replace '#' with your actual URL
      } else {
        console.error("Error saving data:", response.statusText);
      }
    } catch (error) {
      console.error("Error in handleSubmit:", error);
    }
  };

  return (
    <section id="marketing-section" className="marketing-section">
      {/* Main Container */}
      <div className="marketing-container">
        {/* Left Side */}
        <div className="marketing-left">
          <h2>Transform Your Business With Strategic Marketing</h2>
          <p>
            Unlock your business potential with our expert marketing solutions.
            We create tailored strategies that drive growth and deliver measurable results.
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
        
        {/* Right Side */}
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
                value={formData.fullName}
                onChange={handleInputChange}
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
                value={formData.email}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="message" className="block text-sm mb-2">
                Message
              </label>
              <textarea 
                id="message"
                name="message" 
                placeholder="Tell us about your project" 
                className="custom-input" 
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>

              <button type="submit">Schedule Free Call</button>
            </form>
          </div>
        </div>
      </div>

      {/* Trusted Section */}
      {/* <div className="trusted-section">
        <p>Trusted By</p>
        <div className="trusted-logos">
          <img src="https://via.placeholder.com/50x50?text=G" alt="Google" />
          <img src="https://via.placeholder.com/50x50?text=B1" alt="Brand 1" />
          <img src="https://via.placeholder.com/50x50?text=B2" alt="Brand 2" />
          <img src="https://via.placeholder.com/50x50?text=B3" alt="Brand 3" />
        </div>
      </div> */}
    </section>
  );
};

export default ConsultationMarketingSection;
