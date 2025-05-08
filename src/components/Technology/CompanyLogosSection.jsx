import React from "react";

const logos = [
  "/Ingversions-staging/img/brand/client_logos/bluebagles/animus.png",
  "/Ingversions-staging/img/brand/client_logos/bluebagles/bavaria.png",
  "/Ingversions-staging/img/brand/client_logos/bluebagles/danhenry.png",
  "/Ingversions-staging/img/brand/client_logos/bluebagles/discountsafetygear.jpg",
  "/Ingversions-staging/img/brand/client_logos/bluebagles/englishtea.png",
  "/Ingversions-staging/img/brand/client_logos/bluebagles/Lightup.png",
  "/Ingversions-staging/img/brand/client_logos/bluebagles/no nasties.png",
  "/Ingversions-staging/img/brand/client_logos/bluebagles/nordicpiece.png",
  "/Ingversions-staging/img/brand/client_logos/bluebagles/northline.png",
  "/Ingversions-staging/img/brand/client_logos/bluebagles/plasticplace.png",
  "/Ingversions-staging/img/brand/client_logos/bluebagles/Teamskeet.jpg",
  "/Ingversions-staging/img/brand/client_logos/bluebagles/us flags.png",
  "/Ingversions-staging/img/brand/client_logos/Conversoinstime/Arctic Pod.png",
  "/Ingversions-staging/img/brand/client_logos/Conversoinstime/ashandeire.png",
  "/Ingversions-staging/img/brand/client_logos/Conversoinstime/basicsonme.png",
  "/Ingversions-staging/img/brand/client_logos/Conversoinstime/dieharddice.png",
  "/Ingversions-staging/img/brand/client_logos/Conversoinstime/diveright.jpg",
  "/Ingversions-staging/img/brand/client_logos/Conversoinstime/fabfitfun.png",
  "/Ingversions-staging/img/brand/client_logos/Conversoinstime/forloh.png",
  "/Ingversions-staging/img/brand/client_logos/Conversoinstime/goldilocks.png",
  "/Ingversions-staging/img/brand/client_logos/Conversoinstime/joyorganics.png",
  "/Ingversions-staging/img/brand/client_logos/Conversoinstime/lopve and crafted.png",
  "/Ingversions-staging/img/brand/client_logos/Conversoinstime/matte.jpg",
  "/Ingversions-staging/img/brand/client_logos/Conversoinstime/myneonstore.jpg",
  "/Ingversions-staging/img/brand/client_logos/Conversoinstime/patriot.png",
  "/Ingversions-staging/img/brand/client_logos/Conversoinstime/Ruffgreens.png",
  "/Ingversions-staging/img/brand/client_logos/Conversoinstime/scholistico.png",
  "/Ingversions-staging/img/brand/client_logos/Conversoinstime/thecloudies.png",
  "/Ingversions-staging/img/brand/client_logos/Conversoinstime/trimmerbuddy.jpg",
  "/Ingversions-staging/img/brand/client_logos/Conversoinstime/vitalsleep.png",
  "/Ingversions-staging/img/brand/client_logos/CXperts/graco.png",
  "/Ingversions-staging/img/brand/client_logos/CXperts/lytx.png",
  "/Ingversions-staging/img/brand/client_logos/CXperts/marmot.png",
  "/Ingversions-staging/img/brand/client_logos/CXperts/trustwill.png",
  "/Ingversions-staging/img/brand/client_logos/CXperts/tweezedrman.png",
  "/Ingversions-staging/img/brand/client_logos/CXperts/yankeecandle.png",
  "/Ingversions-staging/img/brand/client_logos/flex labs/ape born.jpg",
  "/Ingversions-staging/img/brand/client_logos/flex labs/Badass.png",
  "/Ingversions-staging/img/brand/client_logos/flex labs/dive right.webp",
  "/Ingversions-staging/img/brand/client_logos/flex labs/Ellae Lisque.png",
  "/Ingversions-staging/img/brand/client_logos/flex labs/groom here.jpg",
  "/Ingversions-staging/img/brand/client_logos/flex labs/ITO.png",
  "/Ingversions-staging/img/brand/client_logos/flex labs/make wonder.png",
  "/Ingversions-staging/img/brand/client_logos/flex labs/nix.png",
  "/Ingversions-staging/img/brand/client_logos/flex labs/paramount.png",
  "/Ingversions-staging/img/brand/client_logos/flex labs/Raadshop.png",
  "/Ingversions-staging/img/brand/client_logos/flex labs/relinc.jpg",
  "/Ingversions-staging/img/brand/client_logos/flex labs/Ridge river.jpg",
  "/Ingversions-staging/img/brand/client_logos/flex labs/ruff greens.jpg",
  "/Ingversions-staging/img/brand/client_logos/flex labs/silvercut.jpg",
  "/Ingversions-staging/img/brand/client_logos/flex labs/The hatpros.png",
  "/Ingversions-staging/img/brand/client_logos/funnelenvy/bootcamp.png",
  "/Ingversions-staging/img/brand/client_logos/funnelenvy/box.png",
  "/Ingversions-staging/img/brand/client_logos/funnelenvy/dice.png",
  "/Ingversions-staging/img/brand/client_logos/funnelenvy/gong.png",
  "/Ingversions-staging/img/brand/client_logos/funnelenvy/Hawlette.png",
  "/Ingversions-staging/img/brand/client_logos/funnelenvy/miro.png",
  "/Ingversions-staging/img/brand/client_logos/funnelenvy/socialsolutions.jpg",
  "/Ingversions-staging/img/brand/client_logos/funnelenvy/tibco.png",
  "/Ingversions-staging/img/brand/client_logos/funnelenvy/vmware.png",
  "/Ingversions-staging/img/brand/client_logos/funnelenvy/Zoom.png",
  "/Ingversions-staging/img/brand/client_logos/PM digital/ADVtennis.png",
  "/Ingversions-staging/img/brand/client_logos/PM digital/Alpha touch.png",
  "/Ingversions-staging/img/brand/client_logos/PM digital/bijoubuild.png",
  "/Ingversions-staging/img/brand/client_logos/PM digital/Blanks by thirteen.png",
  "/Ingversions-staging/img/brand/client_logos/PM digital/Earthly holistic Herbs.png",
  "/Ingversions-staging/img/brand/client_logos/PM digital/easelocks.jpg",
  "/Ingversions-staging/img/brand/client_logos/PM digital/Headon.png",
  "/Ingversions-staging/img/brand/client_logos/PM digital/Newport.png",
  "/Ingversions-staging/img/brand/client_logos/PM digital/olivia.png",
  "/Ingversions-staging/img/brand/client_logos/PM digital/Organifi.png",
  "/Ingversions-staging/img/brand/client_logos/PM digital/pavoi.png",
  "/Ingversions-staging/img/brand/client_logos/PM digital/peak.jpg",
  "/Ingversions-staging/img/brand/client_logos/PM digital/revealnail.png",
  "/Ingversions-staging/img/brand/client_logos/PM digital/Ripely Radar.png",
  "/Ingversions-staging/img/brand/client_logos/PM digital/robust.png",
  "/Ingversions-staging/img/brand/client_logos/PM digital/Shieldwallet.jpg",
  "/Ingversions-staging/img/brand/client_logos/PM digital/spiritly.png",
  "/Ingversions-staging/img/brand/client_logos/PM digital/wearsilky.png",
  "/Ingversions-staging/img/brand/brand_img04.png",
];

const CompanyLogosSection = () => {
  return (
    <section className="company-logos-section">
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
