import React from "react"
import styled from "styled-components"
import { brandColours } from "../styles"
import { Container } from "./ui"
import Logo from "./Logo"

const StyledHeader = styled.header`
  background-color: ${brandColours.primary};
`

const StyledInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`

const Header = () => (
  <StyledHeader>
    <Container>
      <StyledInner>
        <Logo />
      </StyledInner>
    </Container>
  </StyledHeader>
)

export default Header
