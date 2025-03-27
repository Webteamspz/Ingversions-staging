import React from "react";

// Example array of image sources (you can use up to 80+)
const logos = [
  "/img/brand/brand_img01.png",
  "/img/brand/brand_img02.png",
  "/img/brand/brand_img03.png",
  "/img/brand/brand_img04.png",
  "/img/brand/brand_img05.png",
  "/img/brand/brand_img06.png",
  "/img/brand/client_logos/bluebagles/animus.png",
  "/img/brand/client_logos/bluebagles/bavaria.png",
  "/img/brand/client_logos/bluebagles/danhenry.png",
  "/img/brand/client_logos/bluebagles/discountsafetygear.jpg",
  "/img/brand/client_logos/bluebagles/englishtea.png",
  "/img/brand/client_logos/bluebagles/Lightup.png",
  "/img/brand/client_logos/bluebagles/no nasties.png",
  "/img/brand/client_logos/bluebagles/nordicpiece.png",
  "/img/brand/client_logos/bluebagles/northline.png",
  "/img/brand/client_logos/bluebagles/plasticplace.png",
  "/img/brand/client_logos/bluebagles/Teamskeet.jpg",
  "/img/brand/client_logos/bluebagles/us flags.png",
  "/img/brand/client_logos/Conversoinstime/Arctic Pod.png",
  "/img/brand/client_logos/Conversoinstime/ashandeire.png",
  "/img/brand/client_logos/Conversoinstime/basicsonme.png",
  "/img/brand/client_logos/Conversoinstime/dieharddice.png",
  "/img/brand/client_logos/Conversoinstime/diveright.jpg",
  "/img/brand/client_logos/Conversoinstime/fabfitfun.png",
  "/img/brand/client_logos/Conversoinstime/forloh.png",
  "/img/brand/client_logos/Conversoinstime/goldilocks.png",
  "/img/brand/client_logos/Conversoinstime/joyorganics.png",
  "/img/brand/client_logos/Conversoinstime/lopve and crafted.png",
  "/img/brand/client_logos/Conversoinstime/matte.jpg",
  "/img/brand/client_logos/Conversoinstime/myneonstore.jpg",
  "/img/brand/client_logos/Conversoinstime/patriot.png",
  "/img/brand/client_logos/Conversoinstime/Ruffgreens.png",
  "/img/brand/client_logos/Conversoinstime/scholistico.png",
  "/img/brand/client_logos/Conversoinstime/thecloudies.png",
  "/img/brand/client_logos/Conversoinstime/trimmerbuddy.jpg",
  "/img/brand/client_logos/Conversoinstime/vitalsleep.png",
  "/img/brand/client_logos/CXperts/graco.png",
  "/img/brand/client_logos/CXperts/lytx.png",
  "/img/brand/client_logos/CXperts/marmot.png",
  "/img/brand/client_logos/CXperts/trustwill.png",
  "/img/brand/client_logos/CXperts/tweezedrman.png",
  "/img/brand/client_logos/CXperts/yankeecandle.png",
  "/img/brand/client_logos/flex labs/ape born.jpg",
  "/img/brand/client_logos/flex labs/Badass.png",
  "/img/brand/client_logos/flex labs/dive right.webp",
  "/img/brand/client_logos/flex labs/Ellae Lisque.png",
  "/img/brand/client_logos/flex labs/groom here.jpg",
  "/img/brand/client_logos/flex labs/ITO.png",
  "/img/brand/client_logos/flex labs/make wonder.png",
  "/img/brand/client_logos/flex labs/nix.png",
  "/img/brand/client_logos/flex labs/paramount.png",
  "/img/brand/client_logos/flex labs/Raadshop.png",
  "/img/brand/client_logos/flex labs/relinc.jpg",
  "/img/brand/client_logos/flex labs/Ridge river.jpg",
  "/img/brand/client_logos/flex labs/ruff greens.jpg",
  "/img/brand/client_logos/flex labs/silvercut.jpg",
  "/img/brand/client_logos/flex labs/The hatpros.jpg",
  "/img/brand/brand_img02.png",
  "/img/brand/brand_img03.png",
  "/img/brand/brand_img04.png",
  "/img/brand/brand_img05.png",
  "/img/brand/brand_img06.png",
  "/img/brand/brand_img04.png",
  "/img/brand/brand_img05.png",
  "/img/brand/brand_img01.png",
  "/img/brand/brand_img02.png",
  "/img/brand/brand_img03.png",
  "/img/brand/brand_img04.png",
  "/img/brand/brand_img05.png",
  "/img/brand/brand_img06.png",
  "/img/brand/brand_img04.png",
  "/img/brand/brand_img05.png",
  "/img/brand/brand_img01.png",
  "/img/brand/brand_img02.png",
  "/img/brand/brand_img03.png",
  "/img/brand/brand_img04.png",
  "/img/brand/brand_img05.png",
  "/img/brand/brand_img06.png",
  "/img/brand/brand_img04.png",
  "/img/brand/brand_img05.png",
  "/img/brand/brand_img01.png",
  "/img/brand/brand_img02.png",
  "/img/brand/brand_img03.png",
  "/img/brand/brand_img04.png",
  "/img/brand/brand_img05.png",
  "/img/brand/brand_img06.png",
  "/img/brand/brand_img04.png",
  "/img/brand/brand_img05.png",
  "/img/brand/brand_img01.png",
  "/img/brand/brand_img02.png",
  "/img/brand/brand_img03.png",
  "/img/brand/brand_img04.png",
  "/img/brand/brand_img05.png",
  "/img/brand/brand_img06.png",
  "/img/brand/brand_img04.png",
  "/img/brand/brand_img05.png",
];

const CompanyLogosSection = () => {
  return (
    <section className="company-logos-section">
      <div className="container">
        <p className="company-logos-text">
          We help designers and product teams from top companies:
        </p>

        {/* Marquee container */}
        <div className="marquee">
          {/* 
            We place the same list of images twice inside .marquee__group.
            This allows for a seamless, continuous loop when scrolling.
          */}
          <div className="marquee__group">
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

export default CompanyLogosSection;
