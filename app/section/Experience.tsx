"use client";

import { SectionHeading } from "@/components";
import { experiencesData } from "@/lib/data";
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <section id="experience">
      <SectionHeading>My Experience</SectionHeading>

      <VerticalTimeline lineColor="">
        {experiencesData.map((experience, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem"
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af"
              }}
              date={experience.date}
              icon={experience.icon}
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
                boxShadow: "none"
              }}
            >
              <h4 className="font-semibold capitalize">{experience.title}</h4>
              <p className="font-normal !mt-0">{experience.location}</p>
              <p className="!font-normal !mt-1 text-gray-700">{experience.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
