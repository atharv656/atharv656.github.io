import React from "react";
import pfp from "./assets/blurSuit.png"

class FrontPage extends React.Component {

    render(){
        return(
            <div className="h-full">
                <img src={pfp} alt="" className="md:invisible md:absolute w-[30%] rounded-3xl mb-5 lg:ml-56 md:inline-block mx-auto"></img>
                <div className="md:inline-block text-center w-[50%] mx-auto">
                    <h1 className="lg:text-7xl sm:text-5xl text-3xl">Hi, I'm Atharv</h1>
                    <p className="lg:text-2xl sm:text-xl text-[#000000AB]">a developer, designer, and storyteller</p>
                </div>
                <img src={pfp} alt="" className="invisible absolute md:relative md:visible md:w-[20%] md:rounded-[49px] w-[30%] rounded-3xl mb-5 lg:ml-56 sm:ml-32 sm:inline-block mx-auto"></img>
            </div>
        );
    }

}

export default FrontPage;