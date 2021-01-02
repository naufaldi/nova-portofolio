import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${(props) => props.active && tw`bg-primary-500! text-gray-100!`}
`;

const TabContent = tw(
  motion.div
)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(
  motion.a
)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;

const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

export default ({
  heading = "Checkout the Menu",
  tabs = {
    Webtoons: [
      {
        imageSrc: "/webtoon/webtoon-1.jpg",
        title: "Webtoon Viewer",
        content: "This proect was part of the competition held by webtoon",
        url:
          "https://www.webtoons.com/id/challenge/viewer/vlog/viewer?title_no=248218&episode_no=1        ",
      },
      {
        imageSrc: "/webtoon/webtoon-2.jpg",
        title: "Eperience",
        content: "This project was competition held by kwikku        ",
        url: "https://webtoon.kwikku.com/comic/669        ",
      },
    ],
    Comic: [
      {
        imageSrc: "/comic/1-min.jpg",
        title: "Hamzanama Panel 1",
        content:
          "Hamzanama is trapped in the desert, and is looking for a village        ",
        url: "#",
      },
      {
        imageSrc: "/comic/2-min.jpg",
        title: "Hamzanama Panel 2",
        content:
          "Hamza met a traveler on a horse and offered to go with him to a nearby village.        ",
        url: "#",
      },
      {
        imageSrc: "/comic/3-min.jpg",
        title: "Hamzanama Panel 3",
        content:
          "There was a kidnapping and the victim was in the village, then Amir Hamza helped help the victim.",
        url: "#",
      },
      {
        imageSrc: "/comic/4-min.jpg",
        title: "Hamzanama Panel 4",
        content:
          "Amir and Hamza stalk the base of a kidnapper on a mountain.        ",
        url: "#",
      },
      {
        imageSrc: "/comic/5-min.jpg",
        title: "Hamzanama Panel 5",
        content: "Amir Hamza plans to invade the base and dispel the enemy",
        url: "#",
      },
    ],
    Character: [
      {
        imageSrc: "/character/g1-min.jpg",
        title: "Gladiator 1        ",
        content: "Gladiator character design with sharp sword        ",
        url: "#",
      },
      {
        imageSrc: "/character/g2-min.jpg",
        title: "Gladiator 2        ",
        content:
          "Gladiator character design with tassel and short spear weapon        ",
        url: "#",
      },
      {
        imageSrc: "/character/g3-min.jpg",
        title: "Gladiator 3        ",
        content:
          "Design a gladiator character with an ax and design a face like the north star        ",
        url: "#",
      },
      {
        imageSrc: "/character/g4-min.jpg",
        title: "Gladiator 4        ",
        content: "Gladiator character design with shield and spear        ",
        url: "#",
      },
    ],
    Template: [
      {
        imageSrc: "/template/previewtemplate14.png",
        title: "Coffe Shop ",
        content: "Instagram Marketing Template for Coffe Shop",
        url: "#",
      },
      {
        imageSrc: "/template/previewtemplate15.png",
        title: "Instagram Marketing",
        content: "Instagram Marketing Template for Travel Agency",
        url: "#",
      },
      {
        imageSrc: "/template/template12preview.png",
        title: "Instagram Marketing",
        content: "Instagram Marketing Template for Universal Usage",
        url: "#",
      },
      {
        imageSrc: "/template/template13preview.png",
        title: "Instagram Marketing",
        content: "Instagram Marketing Template for Online Shopping",
        url: "#",
      },
    ],
  },
}) => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);

  return (
    <Container id="portofolio">
      <ContentWithPaddingXl>
        <HeaderRow>
          <Header>{heading}</Header>
          <TabsControl>
            {Object.keys(tabs).map((tabName, index) => (
              <TabControl
                key={index}
                active={activeTab === tabName}
                onClick={() => setActiveTab(tabName)}
              >
                {tabName}
              </TabControl>
            ))}
          </TabsControl>
        </HeaderRow>

        {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale: 1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale: 0.8,
                display: "none",
              },
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tabs[tabKey].map((card, index) => (
              <CardContainer key={index}>
                <Card
                  className="group"
                  href={card.url}
                  target="_blank"
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <CardImageContainer imageSrc={card.imageSrc}>
                    <CardHoverOverlay
                      variants={{
                        hover: {
                          opacity: 1,
                          height: "auto",
                        },
                        rest: {
                          opacity: 0,
                          height: 0,
                        },
                      }}
                      transition={{ duration: 0.3 }}
                    ></CardHoverOverlay>
                  </CardImageContainer>
                  <CardText>
                    <CardTitle>{card.title}</CardTitle>
                    <CardContent>{card.content}</CardContent>
                  </CardText>
                </Card>
              </CardContainer>
            ))}
          </TabContent>
        ))}
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
