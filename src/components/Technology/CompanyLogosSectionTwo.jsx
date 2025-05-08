import React from "react";

const logos = [
  "/Ingversions-staging/img/Technologies/AB Test/AB-tasty.webp",
  "/Ingversions-staging/img/Technologies/AB Test/Adobe-target.webp",
  "/Ingversions-staging/img/Technologies/AB Test/convert.webp",
  "/Ingversions-staging/img/Technologies/AB Test/figma.webp",
  "/Ingversions-staging/img/Technologies/AB Test/kameleoon.webp",
  "/Ingversions-staging/img/Technologies/AB Test/optimizely.webp",
  "/Ingversions-staging/img/Technologies/AB Test/photoshop.webp",
  "/Ingversions-staging/img/Technologies/AB Test/SiteSpect-1.webp",
  "/Ingversions-staging/img/Technologies/AB Test/sketch.webp",
  "/Ingversions-staging/img/Technologies/AB Test/Varify.webp",
  "/Ingversions-staging/img/Technologies/AB Test/VWO.webp",
  "/Ingversions-staging/img/Technologies/AB Test/xd.webp",
  "/Ingversions-staging/img/Technologies/CRO/adobe-analytics.webp",
  "/Ingversions-staging/img/Technologies/CRO/clarity.webp",
  "/Ingversions-staging/img/Technologies/CRO/google-analytics.webp",
  "/Ingversions-staging/img/Technologies/CRO/hotjar.webp",
  "/Ingversions-staging/img/Technologies/Quality Assurance/goal-verification.webp",
  "/Ingversions-staging/img/Technologies/Quality Assurance/goals-building.webp",
  "/Ingversions-staging/img/Technologies/Quality Assurance/preview-link-1.webp",
  "/Ingversions-staging/img/Technologies/Quality Assurance/QA-checklist-1.webp",
  "/Ingversions-staging/img/Technologies/Shopify/big-commerce-1.webp",
  "/Ingversions-staging/img/Technologies/Shopify/klaviyo-1.webp",
  "/Ingversions-staging/img/Technologies/Shopify/rebuy.webp",
  "/Ingversions-staging/img/Technologies/Shopify/recharge.webp",
  "/Ingversions-staging/img/Technologies/Shopify/shogun.webp",
  "/Ingversions-staging/img/Technologies/Shopify/shopify-plus-1.webp",
  "/Ingversions-staging/img/Technologies/Shopify/shopify.webp",
  "/Ingversions-staging/img/Technologies/Wordpress/convertkit.webp",
  "/Ingversions-staging/img/Technologies/Wordpress/elementor.webp",
  "/Ingversions-staging/img/Technologies/Wordpress/hubspot.webp",
  "/Ingversions-staging/img/Technologies/Wordpress/local.webp",
  "/Ingversions-staging/img/Technologies/Wordpress/php.webp",
  "/Ingversions-staging/img/Technologies/Wordpress/salesforce.webp",
  "/Ingversions-staging/img/Technologies/Wordpress/squarespace.webp",
  "/Ingversions-staging/img/Technologies/Wordpress/unbounce.webp",
  "/Ingversions-staging/img/Technologies/Wordpress/webflow.webp",
  "/Ingversions-staging/img/Technologies/Wordpress/wix.webp",
  "/Ingversions-staging/img/Technologies/Wordpress/wordpress-1.webp",
  "/Ingversions-staging/img/Technologies/Wordpress/wpengine.webp",
  "/Ingversions-staging/img/Technologies/Wordpress/xdebug.webp"
];

const CompanyLogosSectionTwo = () => {
  return (
    <section className="company-logos-section-two">
      <div className="container">
        {/* <p className="company-logos-text">
          We help designers and product teams from top companies:
        </p> */}

        {/* Marquee container */}
        <div className="marquee">
          {/* 
            We place the same list of images twice inside .marquee__group.
            This allows for a seamless, continuous loop when scrolling.
          */}
          <div className="marquee__group-two">
            {logos.map((src, idx) => (
              <img key={`logo1-${idx}`} src={src} alt={`brand-logo-${idx}`} />
            ))}
            {logos.map((src, idx) => (
              <img key={`logo2-${idx}`} src={src} alt={`brand-logo-duplicate-${idx}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogosSectionTwo;
