import React from "react";

class Navbar extends React.Component {
    render() {

        return(
            <div className="grid grid-cols-12 sm:grid-cols-8 pb-2 pt-4 sticky top-0 h-fit z-50 bg-gradient-to-b from-white to-[#E9FDF8]">
                <button onClick={this.props.handleHome} className="col-span-3 text-base sm:col-span-2 md:text-xl lg:text-3xl align-text-bottom sm:leading-10 pl-10">Atharv Agashe</button>
                <div className="sm:col-span-2"></div>
                <button onClick={this.props.handleHome} className="text-center col-span-2 sm:col-span-1 sm:text-base text-xs pb-3 hover:underline">Home</button>
                <button onClick={this.props.handleAbout} className="text-center col-span-2 sm:col-span-1 sm:text-base text-xs sm:leading-10 pb-3 hover:underline">About Me</button>
                <button onClick={this.props.handlePortfolio} className="text-center col-span-2 sm:col-span-1 sm:text-base text-xs leading-10 pb-3 hover:underline">Portfolio</button>
                <button onClick={this.props.handleContact} className="text-center col-span-2 sm:col-span-1 sm:text-base text-xs leading-10 pb-3 hover:underline">Contact</button>        
            </div>
        );
        
    }
}

export default Navbar;