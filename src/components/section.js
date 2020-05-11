import React from "react";
import MediaQuery from 'react-responsive'
import { SocialIcon } from 'react-social-icons';

export default function Section({ title, subtitle, dark, id }) {
  return (
    <React.Fragment>
    <MediaQuery minWidth={768}>
    <div className={"sectionbig" + (dark ? " sectionbig-dark" : "")}>
      <div className="sectionbig-content" id={id}>
        <div className="iconmarg2">
        <div className="iconmarg"> <SocialIcon url="https://www.linkedin.com/in/lamiauddin/" /></div>
        <div className="iconmarg"> <SocialIcon  url="https://github.com/lamiauddin" /></div>
        <div className="iconmarg"> <SocialIcon url="lamiahameed@yahoo.com"  /></div>
        </div>

      </div>
    </div>
    </MediaQuery>
    <MediaQuery maxWidth={767}>
    <div className={"sectionbig" + (dark ? " sectionbig-dark" : "")}>
      <div className="sectionsmall-content" id={id}>
      <SocialIcon  url="https://www.linkedin.com/in/lamiauddin/" />
      <SocialIcon url="https://github.com/lamiauddin" />
      <SocialIcon url="lamiahameed@yahoo.com" />
      </div>
    </div>
    </MediaQuery>
    </React.Fragment>
  );
}
