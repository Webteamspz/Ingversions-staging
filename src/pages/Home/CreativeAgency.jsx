import React from "react";
import AboutArea from "../../components/About/AboutArea";
import BannerOne from "../../components/Banner/BannerOne";
// import BlogArea from "../../components/Blog/BlogArea";
import ConsultationArea from "../../components/Consultation/ConsultationArea";
// import NewsLetterArea from "../../components/NewsLetter/NewsLetterArea";
import ProjectArea from "../../components/Project/ProjectArea";
// import ServicesArea from "../../components/ServicesArea/ServicesArea";
import TeamArea from "../../components/Team/TeamArea";
import TestimonialArea from "../../components/Testimonial/TestimonialArea";
import Layout from "../../layouts/Layout";
import FaqSection from "../../components/QAFs/FaqSection"; // Import FAQ Section
import ServicesSection from "../../components/Services/ServicesSection";
import CroServicesSection from "../../components/CRO/CroServicesSection";
import CompanyLogosSection from "../../components/Technology/CompanyLogosSection";

const CreativeAgency = () => {
  return (
    <Layout header={1} footer={1}>
      <BannerOne />
      {/* <ServicesArea /> */}
      <CroServicesSection />
      <ServicesSection />
      <AboutArea />
      <CompanyLogosSection />
      <TeamArea />
      <ProjectArea />
      <TestimonialArea />
      <ConsultationArea />
      <FaqSection /> {/* Added FAQ Section */}
      {/* <BlogArea /> */}
      {/* <NewsLetterArea /> */}
    </Layout>
  );
};

export default CreativeAgency;
