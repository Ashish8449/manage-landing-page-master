import "./App.css";
import "./Css/style.css";

import Content_img from "./Component/Content_img";
import imgtop from "./images/illustration-intro.svg";

import CardBox from "./Component/CardBox";
import QuestionSection from "./Component/QuestionSection";
import Simplify from "./Component/Simplify";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";

const contenttop = {
  heading: "Bring everyone together to build better products.",
  text: "Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.",
  img: imgtop,
};

function App() {
  return (
    <>
      <div className="container">
    <Navbar/>
        <Content_img content={contenttop} />

        <QuestionSection />
        <CardBox />
      </div>
      <Simplify />

      <Footer />
    </>
  );
}

export default App;
