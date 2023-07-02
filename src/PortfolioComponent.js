import React from "react";

class PortfolioComponent extends React.Component {

    render() {
        if (this.props.right){
            if (this.props.on){
                return(
                    <div className="group pb-10 snap-center pb-10" ref={this.props.reference}>
                        <a href={this.props.link} target="_blank" rel="noreferrer"><img src={this.props.src} alt="" className="inline-block align-middle w-[30%] pl-[5%] opacity-100"></img></a>
                        <div className="inline-block align-middle w-[70%] px-[10%]">
                            <a href={this.props.link} target="_blank" rel="noreferrer" ><h1 className="sm:text-3xl text-xl sm:pb-5 pb-2 opacity-100">{this.props.title}</h1></a>
                            <p className="sm:text-xl text-sm opacity-100">{this.props.description}</p>
                        </div>
                    </div>
                );
            }
            return(
                <div className="group pb-10 snap-center pb-10" ref={this.props.reference}>
                    <img src={this.props.src} alt="" className="inline-block align-middle w-[30%] pl-[5%] xl:opacity-25"></img>
                    <div className="inline-block align-middle w-[70%] px-[10%]">
                        <h1 className="sm:text-3xl text-xl xl:opacity-25 sm:pb-5 pb-2">{this.props.title}</h1>
                        <p className="sm:text-xl text-sm xl:opacity-10">{this.props.description}</p>
                    </div>
                </div>
            );
        }
        
        if(this.props.on) {
            return(
                <div className="group pb-10 snap-center" ref={this.props.reference}>
                    <div className="inline-block align-middle w-[70%] px-[10%]">
                        <a href={this.props.link} target="_blank" rel="noreferrer"><h1 className="sm:text-3xl text-xl sm:pb-5 pb-2 opacity-100">{this.props.title}</h1></a>
                        <p className="sm:text-xl text-sm opacity-100">{this.props.description}</p>
                    </div>
                    <a href={this.props.link} target="_blank" rel="noreferrer"><img src={this.props.src} alt="" className="inline-block align-middle w-[30%] pr-[5%] opacity-100"></img></a>
                </div>
            );
        }
        return(
            <div className="group pb-10 snap-center" ref={this.props.reference}>
                <div className="inline-block align-middle w-[70%] px-[10%]">
                    <h1 className="sm:text-3xl text-xl xl:opacity-25 sm:pb-5 pb-2">{this.props.title}</h1>
                    <p className="sm:text-xl text-sm xl:opacity-10">{this.props.description}</p>
                </div>
                <img src={this.props.src} alt="" className="inline-block align-middle w-[30%] pr-[5%] xl:opacity-25"></img>
            </div>
        );
    }
} 

export default PortfolioComponent;