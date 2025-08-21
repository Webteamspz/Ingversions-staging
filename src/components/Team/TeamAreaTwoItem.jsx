import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

const TeamAreaTwoItem = ({ item = {}, className }) => {
  const {
    url,
    src,
    title,
    designation,
    socials = [],
  } = item;

  const Img = (
    <img src={src} alt={title ? `${title} photo` : "Team member"} />
  );

  const Title = title || "—";

  return (
    <div className={cn("team-item", className)}>
      <div className="team-thumb">
        {url ? <Link to={url}>{Img}</Link> : Img}
      </div>

      <div className="team-content">
        <h2 className="title">
          {url ? <Link to={url}>{Title}</Link> : Title}
        </h2>

        {designation && <span>{designation}</span>}

        {Array.isArray(socials) && socials.length > 0 && (
          <div className="team-social">
            <ul className="list-wrap">
              {socials.map((social, idx) => {
                if (!social?.link) return null;
                return (
                  <li key={`${social.link}-${idx}`}>
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label || `${title || "Member"} social`}
                    >
                      <i className={social.icon || "fab fa-link"} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamAreaTwoItem;
