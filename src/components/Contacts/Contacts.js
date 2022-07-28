import React from "react";
import "./Contacts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faLinkedin,
    faTwitter,
    faInstagram,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";

function Contacts() {
  return (
    <div className="contacts">
      <h3>Contacts</h3>
      <p className="p">
        Email me at <a href="gracenyangayi@gmail.com">gracenyangayi@gmail</a> or
        find me on my socials!
      </p>
      <a href="https://github.com/Otuyanyangayi" className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCR1HC1PfSTtE04yzqHBT9Qw"
        className="youtube social"
      >
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a
        href="https://www.linkedin.com/in/grace-otuya-393bb31b6/"
        className="linkedin social"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://twitter.com/Evening_primose" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/_o.tuya_/"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>

      <hr style={{ width: "90%", marginTop: 20 }} />
      <span className="name">
        Made by{" "}
        <a
          href="https://otuyanyangayi.github.io/my-portfolio/"
          target="__blank"
        >
          Otuya Nyangayi
        </a>
      </span>
    </div>
  );
  
}

export default Contacts;
