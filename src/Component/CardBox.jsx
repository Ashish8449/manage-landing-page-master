import React from "react";
import Card from "./Card";
import AnishaLi from "../images/avatar-anisha.png";
import AliBravo from "../images/avatar-ali.png";
import RichardWatts from "../images/avatar-richard.png";
import ShanaiGough from "../images/avatar-shanai.png";
import Button from "./Button";
import H2 from "./H2";

const content = [
  {
    name: "Anisha Li",
    text: "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
    img: AnishaLi,
  },
  {
    name: "Ali Bravo",
    text: "  “We have been able to cancel so many other subscriptions since using  Manage. There is no more cross-channel confusion and everyone is much more focused.”",
    img: AliBravo,
  },

  {
    name: "Richard Watts",
    text: "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”",
    img: RichardWatts,
  },
  {
    name: "Shanai Gough",
    text: "“Their software allows us to track, manage and collaborate on our projects  from anywhere. It keeps the whole team in-sync without being intrusive.”",
    img: ShanaiGough,
  },
];

export default function CardBox() {
  return (
    <div className="wrapper ">
      <H2 title="What they’ve said" variant="text-center" />
      <h2 className="text-center mb5 "></h2>
      <div className="justify-space-between CardBox mb5 ">
        {content.map((item, indx) => (
          <Card key={indx} content={item} />
        ))}
      </div>
      <div className="text-center">
        <Button text="Get Started" />
      </div>
    </div>
  );
}
