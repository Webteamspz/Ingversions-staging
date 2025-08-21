// BannerTwo.jsx
import React from "react";
import { Link } from "react-router-dom";

const BannerTwo = ({ columns, shapes }) => {
  return (
    <section className="banner-area-two">
      <div className="container">
        <div className="row align-items-center">
          {columns &&
            columns.map((column, index) => (
              <div
                key={index}
                className={
                  index === 0 ? "col-xl-6 col-lg-5" : "col-xl-6 col-lg-7"
                }
              >
                {column.content.type === "image" ? (
                  <div className="banner-img-two">
                    <img src={column.content.src} alt={column.content.alt} />
                  </div>
                ) : (
                  <div className="banner-content-two">
                    <span className="sub-title">{column.content.subTitle}</span>
                    <h2 className="title">{column.content.title}</h2>
                    <div className="banner-content-bottom">
                      <Link
                      // to={column.content.button.link}
                      // className="btn"
                      >
                        {/* {column.content.button.text} <span></span> */}
                      </Link>
                      <ul className="list-wrap">
                        {column.content.iconList.map((item, i) => (
                          <li key={i}>
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img src={item.icon} alt={`icon-${i}`} />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>

      <div className="banner-shape-wrap-two">
        {shapes &&
          shapes.map((shape, i) => {
            // Define classes based on index or any other logic you prefer.
            let shapeClass = "";
            if (i === 0) shapeClass = "rotateme";
            else if (i === 1 || i === 2) shapeClass = "ribbonRotate";
            return (
              <img key={i} src={shape.src} alt="" className={shapeClass} />
            );
          })}
      </div>
    </section>
  );
};

export default BannerTwo;
