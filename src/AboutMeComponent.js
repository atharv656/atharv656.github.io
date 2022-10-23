import "@testing-library/user-event/dist/utils";
import React from "react";


class AboutMeComponent extends React.Component {

    render(){
        if(this.props.right){
            if (this.props.on) {
                return(
                    <div className="group pb-16 snap-center" ref={this.props.reference}>
                        <a href={this.props.link} target="_blank" rel="noreferrer"><img src={this.props.src} alt="" className="inline-block align-middle w-[50%] px-[18%] opacity-100"></img></a>
                        <div className="inline-block align-middle w-[50%] px-[5%]">
                            <a href={this.props.link} target="_blank" rel="noreferrer"><h1 className="sm:text-3xl text-xl text-center opacity-100 sm:pb-5 pb-2">{this.props.title}</h1></a>
                            <p className="sm:text-xl text-sm opacity-100">{this.props.description}</p>
                        </div>
                    </div>
                );
            }
            else {
                return(
                    <div className="group pb-16 snap-center" ref={this.props.reference}>
                        <img src={this.props.src} alt="" className="inline-block align-middle w-[50%] px-[18%] xl:opacity-25"></img>
                        <div className="inline-block align-middle w-[50%] px-[5%]">
                            <h1 className="sm:text-3xl text-xl text-center xl:opacity-25 sm:pb-5 pb-2">{this.props.title}</h1>
                            <p className="sm:text-xl text-sm xl:opacity-10">{this.props.description}</p>
                        </div>
                    </div>
                );
            }
        }

        if (this.props.on){
            return(
                <div className="group pb-16 snap-center" ref={this.props.reference}>
                    <div className="inline-block align-middle w-[50%] px-[5%]">
                        <a href={this.props.link} target="_blank" rel="noreferrer"><h1 className="sm:text-3xl text-xl text-center opacity-100 sm:pb-5 pb-2">{this.props.title}</h1></a>
                        <p className="sm:text-xl text-sm opacity-100">{this.props.description}</p>
                    </div>
                    <a href={this.props.link} target="_blank" rel="noreferrer"><img src={this.props.src} alt="" className="inline-block align-middle w-[50%] px-[18%] opacity-100"></img></a>
                </div>
            );
        }
        return(
            <div className="group pb-16 snap-center" ref={this.props.reference}>
                <div className="inline-block align-middle w-[50%] px-[5%]">
                    <h1 className="sm:text-3xl text-xl text-center xl:opacity-25 sm:pb-5 pb-2">{this.props.title}</h1>
                    <p className="sm:text-xl text-sm xl:opacity-10">{this.props.description}</p>
                </div>
                <img src={this.props.src} alt="" className="inline-block align-middle w-[50%] px-[18%] xl:opacity-25"></img>
            </div>
        );
    }
}

export default AboutMeComponent;