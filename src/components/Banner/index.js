import React from "react";
import Video from "../../videos/orbs.mp4";
import {NavBtn, NavBtnLink} from "../Navbar/NavbarElements";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroH2,
  HeroP,
  HeroBtnWrapper,
  
} from "./BannerElements";

const Banner = () => {
  //const [hover, setHover] = useState(false);

  // const onHover = () => {
  //   setHover(!hover);
  // };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>Chris Haar</HeroH1>
        <HeroH2>Software Engineer</HeroH2>
        <HeroP>
          Check out my portfolio or contact me
        </HeroP>
        <HeroBtnWrapper>
        <NavBtn>
           <NavBtnLink to="/signin">Email Me</NavBtnLink>
        </NavBtn>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Banner;
