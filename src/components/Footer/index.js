import React from "react";
import { FaLinkedin } from "react-icons/fa";
import {animateScroll as scroll} from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from "./FooterElements";



const Footer = () => {

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Info</FooterLinkTitle>
              <FooterLink to="/">(903) 521-0646</FooterLink>
              <FooterLink to="/">cthaar16@gmail.com</FooterLink>
              <FooterLink to="/">Denver, Colorado</FooterLink>
            </FooterLinkItems>
            
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>Chris Haar</SocialLogo>
            <WebsiteRights>
              Chris Haar © {new Date().getFullYear()}
                All Rights Reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="//www.linkedin.com/in/chris-haar/">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
