import React from "react"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import styled from "styled-components"
import {
  minBreakpointQuery,
  brandColours,
  breakpointSizes,
  fluidFontSize,
  fontSize,
  headingStyles,
  standardTransition,
  fontWeights,
  standardColours,
} from "../../styles"

export const StyledHtmlContent = styled.div`
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    margin-bottom: 12px;
    line-height: 1.5;
    font-weight: ${fontWeights.regular};

    ${minBreakpointQuery.small`
      margin-bottom: 14px;
    `};
  }

  h2 {
    ${headingStyles()};
  }

  h3 {
    ${fluidFontSize(
      "22px",
      "35px",
      breakpointSizes.tiny,
      breakpointSizes.xxxxlarge
    )};
  }

  h4 {
    ${fontSize(19)};

    ${minBreakpointQuery.small`
      ${fontSize(20)};
    `}
  }

  h5 {
    ${fontSize(18)};

    ${minBreakpointQuery.small`
      ${fontSize(19)};
    `}
  }

  h6 {
    ${fontSize(17)};

    ${minBreakpointQuery.small`
      ${fontSize(18)};
    `}
  }

  p {
    margin-bottom: 20px;
    line-height: 1.4;

    ${minBreakpointQuery.small`
      margin-bottom: 24px;
      ${fontSize(18)};
    `}

    &:last-child {
      margin-bottom: 0;
    }
  }

  a {
    position: relative;
    color: ${standardColours.black};
    border-bottom: 1px solid ${standardColours.black};
    transition: ${standardTransition("border-color")},
      ${standardTransition("color")};
    font-weight: ${fontWeights.bold};

    &:hover {
      color: ${brandColours.primary};
      border-bottom-color: ${brandColours.primary};
    }
  }

  ul,
  ol {
    margin-bottom: 20px;

    ${minBreakpointQuery.small`
      margin-bottom: 24px;
    `}

    &:last-child {
      margin-bottom: 0;
    }

    li {
      margin-bottom: 10px;
      ${fontSize(15)};
      line-height: 1.7;

      ${minBreakpointQuery.small`
        margin-bottom: 12px;
        ${fontSize(16)};
      `}

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  ul {
    li {
      position: relative;
      padding-left: 20px;

      &:before {
        content: "";
        position: absolute;
        top: 8px;
        left: 0;
        display: inline-block;
        height: 8px;
        width: 8px;
        background-color: ${brandColours.primary};
        border-radius: 50%;
      }
    }
  }

  ol {
    list-style-type: decimal;

    li {
      margin-left: 16px;
    }
  }
`

export const HtmlContent = ({ richText, ...props }) => (
  <StyledHtmlContent {...props}>{renderRichText(richText)}</StyledHtmlContent>
)
