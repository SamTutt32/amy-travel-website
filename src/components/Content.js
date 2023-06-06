import React from "react"
import styled, { css } from "styled-components"
import { minBreakpointQuery, sectionMargins, standardColours } from "../styles"
import { Container, HtmlContent } from "./ui"

const StyledContent = styled.section`
  ${sectionMargins()};
  text-align: center;
`

const StyledInner = styled.div``

const Content = ({ content }) => (
  <StyledContent>
    <Container>
      <StyledInner>
        <HtmlContent richText={content} />
      </StyledInner>
    </Container>
  </StyledContent>
)

export default Content
