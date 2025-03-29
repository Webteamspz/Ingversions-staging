import React from "react";
import { useParallax } from "react-scroll-parallax";

const WorkArea = ({ workImage, sectionTitle, workList, shapeImages }) => {
  const { subTitle = "", title = "" } = sectionTitle;

  const parallax = useParallax({
    translateY: [-24, 24],
    rootMargin: 0,
  });

  return (
    <section className="work-area pt-110 pb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="work-img text-center">
              <img src={workImage} alt="Work Process" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="work-content">
              <div className="section-title title-style-two white-title mb-30">
                <span className="sub-title">{subTitle}</span>
                <h2 className="title">{title}</h2>
              </div>

              <div className="work-list">
                <ul className="list-wrap">
                  {workList.map((item, index) => (
                    <li key={index}>
                      <div className="icon">
                        <img src={item.src} alt={item.title} />
                      </div>
                      <div className="content">
                        <h4 className="title">{item.title}</h4>
                        <p>{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="work-shape-wrap">
        {shapeImages.map((shape, index) => (
          <img
            key={index}
            src={shape}
            alt={`Shape ${index + 1}`}
            ref={index === 1 ? parallax.ref : undefined} // Parallax applied to the second shape only
          />
        ))}
      </div>
    </section>
  );
};

export default WorkArea;
