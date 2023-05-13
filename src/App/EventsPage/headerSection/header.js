import React, { Component } from "react";
import TopbarSection from "../../HomePage/TopBarSection/topbarSection";
import ImageSliderComponent from "./imageSliderComponent";

class HeaderSection extends Component{
    render(){
        return(
            <div className="bg-black">
                <TopbarSection />
                <ImageSliderComponent />
            </div>
        )
    }
}

export default HeaderSection