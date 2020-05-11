import React from "react";
import MediaQuery from "react-responsive";
import Timeline from "./timeline";

export default function Projects({ title, subtitle, dark, id }) {
  return (
    <React.Fragment>
      <MediaQuery minWidth={768}>
        <div className={"sectionbig" + (dark ? " sectionbig-dark" : "")}>
          <div className="sectionbig-content" id={id}>
            <Timeline></Timeline> 
 
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={767}>
        <div className={"sectionsmall" + (dark ? " sectionsmall-dark" : "")}>
          <div className="sectionsmall-content" id={id}>
            <Timeline></Timeline>
          </div>
        </div>
      </MediaQuery>
    </React.Fragment>
  );
}
