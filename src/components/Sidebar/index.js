import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick ={toggle}>
        <CloseIcon onClick={toggle} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About Me
          </SidebarLink>
          <SidebarLink to="experience" onClick={toggle}>
            Experience
          </SidebarLink>
          <SidebarLink to="portfolio" onClick={toggle}>
            Portfolio
          </SidebarLink>
          <SidebarLink to="hobbies" onClick={toggle}>
            Hobbies
          </SidebarLink>
          <SideBtnWrap>
          <SidebarRoute to="/signin" onClick={toggle}>
            Email Me
          </SidebarRoute>
        </SideBtnWrap>
        </SidebarMenu>
       
      </SidebarWrapper>
    </SidebarContainer>
  );
}
;

export default Sidebar;
