import React from "react";
import "./Start.css";
import Button from "@mui/material/Button";

export const Start = () => {
  return (
    <div className="container">
      <div className="Description-user">
        <h1 className="des-name">
          Hola Soy <span style={{ color: "blue" }}>Edu</span>
        </h1>
        <p>Frontend Developer</p>
        <Button variant="contained">Ver CV</Button>
        <div className="icons-three">
          <a href="https://www.linkedin.com/in/edu-armas-1a4b16260/" target="_BLANK">
            <img
              src="https://res.cloudinary.com/dviah6ohx/image/upload/v1685228455/Portfolio/linkedin_mn7unw.png"
              alt="Icons-linkedin"
              style={{ height: "30px" }}
            />
          </a>
          <a href="https://github.com/BigNitgh" target="_BLANK">
            <img
              src="https://res.cloudinary.com/dviah6ohx/image/upload/v1685304543/Portfolio/github_xzkx0m.png"
              alt="Icons-GitHub"
              style={{ height: "30px" }}
            />
          </a>
          <a href="https://mail.google.com/mail/u/1/?pli=1#inbox/onemid76@gmail.com" target="_BLANK">
            <img
              src="https://res.cloudinary.com/dviah6ohx/image/upload/v1685304475/Portfolio/gmail_plhsm0.png"
              alt="Icons-Gmail"
              style={{ height: "30px" }}
            />
          </a>
        </div>
      </div>
      <div className="image-user">
        <img src="https://res.cloudinary.com/dviah6ohx/image/upload/v1682396466/Portfolio/FotoMia_za71hj.jpg" alt="picture of edu" />
      </div>
    </div>
  );
};
