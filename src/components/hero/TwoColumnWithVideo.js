import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";

import Header from "../headers/light.js";

import ReactModalAdapter from "../../helpers/ReactModalAdapter.js";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/dot-pattern.svg";
import DesignIllustration from "../../images/design-illustration.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row md:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-6/12 lg:pr-12 flex-shrink-0 text-center lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex flex-col justify-center`;

const Heading = tw.h1`font-black text-3xl md:text-5xl leading-snug max-w-3xl`;
const Paragraph = tw.p`my-5 lg:my-8 text-sm lg:text-base font-medium text-gray-600 max-w-lg mx-auto lg:mx-0`;

const Actions = tw.div`flex flex-col items-center sm:flex-row justify-center lg:justify-start mt-8`;
const PrimaryButton = tw.button`font-bold px-8 lg:px-10 py-3 rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 focus:shadow-outline focus:outline-none transition duration-300`;
const OutlineButton = tw.button`font-bold px-8 lg:px-10 py-3 rounded  text-primary-500 hocus:text-primary-700 focus:shadow-outline focus:outline-none transition duration-300`;

const IllustrationContainer = tw.div`flex justify-center md:justify-end items-center relative max-w-3xl lg:max-w-none`;

// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3  -z-10`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none fill-current text-primary-500 opacity-25 absolute w-32 h-32 right-0 bottom-0 transform translate-x-10 translate-y-10 -z-10`}
`;

const StyledModal = styled(ReactModalAdapter)`
  &.mainHeroModal__overlay {
    ${tw`fixed inset-0 z-50`}
  }
  &.mainHeroModal__content {
    ${tw`xl:mx-auto m-4 sm:m-16 max-w-screen-xl absolute inset-0 flex justify-center items-center rounded-lg bg-gray-200 outline-none`}
  }
  .content {
    ${tw`w-full lg:p-16`}
  }
`;
const CloseModalButton = tw.button`absolute top-0 right-0 mt-8 mr-8 hocus:text-primary-500`;

export default ({
  heading = "Modern React Templates, Just For You",
  description = "Our templates are easy to setup, understand and customize. Fully modular components with a variety of pages and components.",
  primaryButtonText = "Get Started",
  primaryButtonUrl = "https://wa.me/+62%20831-1442-2861",
  OutlineButtonText = "Get Started",
  OutlineButtonUrl = "https://wa.me/+62%20831-1442-2861",
  imageSrc = DesignIllustration,
  imageCss = null,
  imageDecoratorBlob = false,
}) => {
  return (
    <>
      <Header />
      <Container id="home">
        <TwoColumn>
          <LeftColumn>
            <Heading>{heading}</Heading>
            <Paragraph>{description}</Paragraph>
            <Actions>
              <PrimaryButton as="a" href={primaryButtonUrl}>
                {primaryButtonText}
              </PrimaryButton>
              <OutlineButton as="a" href={OutlineButtonUrl}>
                {OutlineButtonText}
              </OutlineButton>
            </Actions>
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              <img css={imageCss} src={imageSrc} alt="Hero" />
              {imageDecoratorBlob && <DecoratorBlob2 />}
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
        <DecoratorBlob1 />
      </Container>
    </>
  );
};
