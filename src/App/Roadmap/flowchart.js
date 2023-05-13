import React from "react";
// import VLine from "./line";
import Card from "./Card";

function FlowChart() {
  return (
    <div className="flowchart">
      <div className="card1">
        {/* <VLine /> */}
        <Card className="left-line" />
        <Card className="right-line" />
        <Card className="left-line" />
        <Card className="right-line" />
        <Card className="left-line" />
        <Card className="right-line" />
        <Card className="left-line" />
        <Card className="right-line" />
        <Card className="left-line" />
        <Card className="right-line" />
      </div>
    </div>
  );
}

export default FlowChart;
