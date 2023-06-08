import React from "react"
import styled from "styled-components"
import { sectionMargins } from "../styles"
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
