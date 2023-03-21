import React from "react";
import Icon1 from "../../images/pathways.png";
import Icon2 from "../../images/netflix.png";
import Icon3 from "../../images/mym.png";
import Icon4 from "../../images/covid.png";
import Icon5 from "../../images/weather.png";
import Icon6 from "../../images/bowman.png";
import { Button } from "../Sidebar/ButtonElements";
import {
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesP,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="portfolio">
      <ServicesH1>Portfolio</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Pathways International Website</ServicesH2>
          <ServicesP>
            Built a professional website for Pathways International's Data Analytics Program using HTML, CSS, React.JS, and Formspree.
          </ServicesP>
          <Button>
          <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://pathwaysinternational.netlify.app/"
          className="button"
        >View App</a>
          </Button>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Netflix Clone</ServicesH2>
          <ServicesP>
            The Netflix Clone is exactly what it sounds like. It is a clone that
            mirrors Netflix's interface that lists all movie data that has been
            sourced from the movieDB API. No movies can actually be played but
            functions almost identically to the actual application. Technologies used: HTML, CSS, Javascript, React, leveraged axios to consume API data.
          </ServicesP>
          <Button>
          <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://netflix2-39bba.web.app/"
          className="button"
        >View App</a>
          </Button>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Mind Your Money</ServicesH2>
          <ServicesP>
          Mind Your Money is a money management tool designed to set goals and allocate funds to said goals. This project was built by taking in design elements from a UX/UI team and enginnering this project to their vision. Technologies leveraged: HTML, CSS, JavaScript, React, Mongo DB.
          </ServicesP>
          <Button>
          <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://mindyourmoney.netlify.app/"
          className="button"
        >View App</a>
          </Button>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon4} />
          <ServicesH2>Covid Tracker</ServicesH2>
          <ServicesP>
            The COVID Tracker lists cumulative new infections,
            recoveries, and fatality data sourced from Johns Hopkins University.
            This app features a self-reporting symptoms tool where users can see
            what others are feeling. Technologies used: HTML, CSS, Javascript, React, leveraged AirTable to create and
            consume RESTFUL API data
          </ServicesP>
          <Button>
          <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://theglobalcovidtracker.netlify.app/"
          className="button"
        >View App</a>
          </Button>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon5} />
          <ServicesH2>Global Weather App</ServicesH2>
          <ServicesP>
            Global Weather is a standard weather application where users can
            enter their city of choice to retrieve the latest weather
            information by consuming API data via axios request. Technologies used:HTML, CSS, Javascript, Request using Axios
          </ServicesP>
         
          <a target="_blank" rel="noopener noreferrer" href="https://ctaar16.github.io/Global-Weather/" className="button"
        >
          <button>View App</button> 
        </a>
        
       
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon6} />
          <ServicesH2>Bowman Electric</ServicesH2>
          <ServicesP>
            Built a professional website for an Electrican in Montana using HTML, CSS, React.JS, and Formspree. This project also features React-scroll.
          </ServicesP>
          <Button>
          <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://bowmanelectric.netlify.app"
          className="button"
        >View App</a>
          </Button>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
