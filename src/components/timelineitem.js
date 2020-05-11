import React from "react";
import MediaQuery from 'react-responsive'
import imgp from  "../java.jpg"

const TimelineItem = ({ data, image }) => (
    <React.Fragment>
        <MediaQuery minWidth={768}>
        <div className="timeline-item">
        <div className="timeline-item-content">
            <time>{data.date}</time>
            <p>{data.text}</p>
            {data.link && (
                <a
                    href={data.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {data.link.text}
                </a>
            )}
            <img src={data.image} className="circle" />
        </div>
    </div>
        </MediaQuery>
        <MediaQuery maxWidth={767}>
        <div className="timeline-item">
        <div className="timeline-item-contentS">
            <time>{data.date}</time>
            <p>{data.text}</p>
            {data.link && (
                <a
                    href={data.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {data.link.text}
                </a>
            )}
            <img src= {data.image} className="circle" />
        </div>
    </div>
        </MediaQuery>
    </React.Fragment>
);

export default TimelineItem;
