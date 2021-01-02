import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import TabGrid from "components/cards/TabCardGrid.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";

import skillOneIconImageSrc from "images/skill/skill-1.svg";
import skillTwoIconImageSrc from "images/skill/skill-2.svg";
import skillThreeIconImageSrc from "images/skill/skill-3.svg";
import skillFourIconImageSrc from "images/skill/skill-4.svg";
import skillFiveIconImageSrc from "images/skill/skill-5.svg";

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={
          <>
            I am Nova Ari{" "}
            <HighlightedText>Illustration Artist.</HighlightedText>
          </>
        }
        description="Humans with many abilities whose skills increase every day. Where life is like an RPG game
very interested in Illustration and 3D, Love Games and Game Creation. 
Open up opportunities for job offers and cooperation."
        imageSrc="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Hire Me"
        OutlineButtonText="Know More"
      />
      <Features
        heading={
          <>
            Experience <HighlightedText> Skill.</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc: skillOneIconImageSrc,
            title: "Graphic Design",
            description:
              "We strictly only deal with vendors that provide top notch security.",
          },
          {
            imageSrc: skillTwoIconImageSrc,
            title: "Illustrator",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
          },
          {
            imageSrc: skillThreeIconImageSrc,
            title: "3D Artist",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
          },
          {
            imageSrc: skillFourIconImageSrc,
            title: "Animator",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
          },
          {
            imageSrc: skillFiveIconImageSrc,
            title: "Video Editor",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
          },
        ]}
        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      <TabGrid
        heading={
          <>
            Checkout my <HighlightedText>Portofolio.</HighlightedText>
          </>
        }
      />

      <MainFeature2
        subheading={<Subheading>Trusted Freelance</Subheading>}
        heading={
          <>
            Why <HighlightedText>Choose Me ?</HighlightedText>
          </>
        }
        statistics={[
          {
            key: "Client",
            value: "40+",
          },
          {
            key: "Design",
            value: "100+",
          },
          {
            key: "Experience",
            value: "6+",
          },
        ]}
        primaryButtonText="Hire Me Now"
        primaryButtonUrl="https://wa.me/+6283114422861"
        imageInsideDiv={false}
        imageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzNzI2fQ&auto=format&fit=crop&w=768&q=80"
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      />

      <Footer />
    </AnimationRevealPage>
  );
};
