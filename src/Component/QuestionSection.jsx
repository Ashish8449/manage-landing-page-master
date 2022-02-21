import React from "react";
import CardwithNumber from "./CardwithNumber";
import H2 from "./H2";
import Paragraph from "./Paragraph";

const content = [
  {
    id: "01",
    title: "Track company-wide progress",
    answer:
      "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
  },
  {
    id: "02",
    title: "Advanced built-in reports",
    answer:
      "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
  },
  {
    id: "03",
    title: "Everything you need in one place",
    answer:
      "Stop jumping from one service to another to communicate, store files,  track tasks and share documents. Manage offers an all-in-one team productivity solution.",
  },
];

export default function QuestionSection(props) {
  return (
    <div className="wrapper ">
      <div className="row questionrow  ">
        <div className="col6">
          <H2 title="What’s different about Manage?" />

          <Paragraph
            text=" Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams."
          />
        </div>

        <div className="col6">
          {content.map((item, indx) => (
            <CardwithNumber key={indx} content={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
