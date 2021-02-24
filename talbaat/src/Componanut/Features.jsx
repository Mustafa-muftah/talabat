import React, { Component } from "react";
import Card from "./Card";
import DownloadButton from "./DownloadButton";
import HeaderText from "./HeaderText";
import Paragraph from "./Paragraph";

class Features extends Component {
  state = {};
  render() {
    const text = "Your everyday, right away";
    const ParaText =
      "Order food and grocery delivery online from hundreds of restaurants and shops nearby";
    const appsrc = [
      {
        id: 1,
        appSrc: "https://www.talabat.com/images/Talabat/logo_appstore.svg",
        width: "15%",
      },
      {
        id: 2,
        appSrc: "https://www.talabat.com/images/Talabat/logo_playstore.svg",
        width: "15%",
      },
      {
        id: 3,
        appSrc: " https://www.talabat.com/images/talabat/logo_huaweistore1.svg",
        width: "15%",
      },
    ];
    const cards = [
      {
        id: "C-1",
        src: "https://www.talabat.com/images/Talabat/vertical-restaurants.png",
        header: "Restaurant",
        paragraph:
          "Find deals , free delivery , and more from our restaurant partner",
        anchor: "Explore",
        color: "red",
      },
      {
        id: "C-2",
        src: "https://www.talabat.com/images/Talabat/vertical-grocery.png",
        header: "Grocery",
        paragraph:
          "Dont stand in the line - order online! choose from top stores delivering groceries to you",
        anchor: "Explore",
        color: "yellow",
      },
      {
        id: "C-3",
        src: "https://www.talabat.com/images/Talabat/vertical-pharmacy.png",
        header: "Pharmacy",
        paragraph:
          "Got the sniffles ? We've got you. Get medicine delivered to you quickly and easily",
        anchor: "Explore",
        color: "blue",
      },
    ];

    return (
      <div className="Features center-block text-center m-5">
        <div className="text-app-buttos">
          <HeaderText text={text} />
          <Paragraph text={ParaText} />
          {appsrc.map((app) => (
            <DownloadButton key={app.id} id={app.id} src={app.appSrc} />
          ))}
        </div>

        <div className="row  m-5">
          {cards.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              src={card.src}
              text={card.header}
              pargraph={card.paragraph}
              anchor={card.anchor}
              color={card.color}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Features;
