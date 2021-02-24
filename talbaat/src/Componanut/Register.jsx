import React, { Component } from "react";
import DownloadButton from "./DownloadButton";
import HeaderText from "./HeaderText";
import Paragraph from "./Paragraph";
import RegisterCard from "./RegisterCard";
import "./Register.css";

class Register extends Component {
  state = {};
  render() {
    const firstheader = "Join us";
    const firstparagraph = "Be a part of the talabat story";
    const registerCard = [
      {
        id: "RC-1",
        src: "https://www.talabat.com/images/talabat/become-a-partner.png",
        header: "Become a partner",
        paragraph: "Reach more customers and achieve growth with us",
        buttonText: "Find out more",
      },
      {
        id: "RC-2",
        src: "https://www.talabat.com/images/talabat/career-with-us.png",
        header: "Build your career",
        paragraph: "Join the dynamic team that makes it all happen",
        buttonText: "Find jobs",
      },
    ];
    const secondHeader = "Discover the new talabat app";
    const secondParagraph = "Get what you need, when you need it";
    const appsrc = [
      {
        id: 1,
        appSrc: "https://www.talabat.com/images/Talabat/logo_appstore.svg",
        width: "30%",
      },
      {
        id: 2,
        appSrc: "https://www.talabat.com/images/Talabat/logo_playstore.svg",
        width: "30%",
      },
      {
        id: 3,
        appSrc: " https://www.talabat.com/images/talabat/logo_huaweistore1.svg",
        width: "30%",
      },
    ];
    return (
      <div className="register  m-5">
        <div className="register-header center-block text-center">
          <HeaderText text={firstheader} />
          <Paragraph text={firstparagraph} />
        </div>
        <div className="container center-block text-center ">
          <div className="row " style={{ marginLeft: "10%" }}>
            {registerCard.map((card) => (
              <RegisterCard
                key={card.id}
                id={card.id}
                src={card.src}
                text={card.header}
                pargraph={card.paragraph}
                buttonText={card.buttonText}
              />
            ))}
          </div>
        </div>

        <div className="row m-5">
          <div className="col-sm ">
            <HeaderText text={secondHeader} />
            <Paragraph text={secondParagraph} />

            <div className="app-buttons mt-5">
              {appsrc.map((app) => (
                <DownloadButton
                  key={app.id}
                  id={app.id}
                  src={app.appSrc}
                  width={app.width}
                />
              ))}
            </div>
          </div>
          <div className="col-sm">
            <div className="image">
              <img
                src="https://www.talabat.com/images/Talabat/app-view-en.png"
                alt=""
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
