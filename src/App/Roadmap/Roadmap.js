import "./Roadmap.css";
import Button from "./button";
import FlowChart from "./flowchart";

function Roadmap() {
  return (
    <div>
    <section>

      <div className="heading">
      <div>
      <h1>Lorem ipsum understanding<br /> Lorem Ipsum.</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod<br /> tempor incididunt ut labore et dolore magna aliqua.</p>

      <Button />
      </div>
      </div>

      <div className="air air1"></div>
      <div className="air air2"></div>
      <div className="air air3"></div>
      <div className="air air4"></div>

      {/* rectangles */}

      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </section>

    <FlowChart />
    </div>
  );
}

export default Roadmap;
