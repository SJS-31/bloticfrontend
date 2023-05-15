import React from "react";
import myImg from "../../assets/Space.jpg";
import BountDesc from './BountyDesc/bountydesc'
function Card(props) {


// const handlecllick = (event)=>{
//   console.log("dsd")
// }

var status_col = undefined

if(props.status === "Active") {
  status_col = "linear-gradient(to right, #1ddc50, #5ce89b)"
}else if(props.status === "InActive"){
  status_col = "linear-gradient(to right, #dc1d1d, #e43018)"
}
console.log(status_col)



  return (
    <div className="item">
      <a href={props.ref} className="card">
        <div className="thumb">
          <img src={myImg} alt="blog" />
          {/* <h1>Bounty1</h1> */}
        </div>
        <div className="article">
          <h1>{props.heading}</h1>
          <h3>{props.deadline}</h3>
          
          <div className="skill"> 
          <button style={{background: status_col}} className={"status"}>{props.status}</button>
            <button className="skill1">{props.skill1}</button>
            <button className="skill2">{props.skill2}</button>
          </div>
          <span>{props.inr}</span>
          
          <div>
            
            <button   className="card-button" ><a href={props.href}>Read More</a></button>

          </div>
          
        </div>
      </a>
    </div>
  );
}

export default Card;
