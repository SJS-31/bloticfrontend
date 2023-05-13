import React from "react";
// import HLine from "./h-line";

function Card(props){
    return(
        // <div className="cardline">
        // <HLine />
        <div className={`container2 ${props.className}`}>
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <div className="icon">
                      <h1>Web3 Basics</h1>
                    </div>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <h3>
                        _adamdipinto
                    </h3>
                    <p>This is where I network and build my professional protfolio.</p>
                </div>
            </div>
        </div>
        </div>
        // </div>
    );
}

export default Card;