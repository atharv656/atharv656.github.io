import React from "react";
import resume from "./assets/Resume.pdf";

class Contact extends React.Component {

    render(){
        return (
            <div className="pb-4 sm:pb-4 border-t border-black w-[95%] m-auto " ref={this.props.reference}>
                <h1 className="text-3xl">Contact</h1>
                <a href="mailto: atharv.v.agashe.25@dartmouth.edu" className="pl-1 pr-9 text-lg">Email</a>
                <a href="https://www.linkedin.com/in/atharv-agashe" target="_blank" rel="noreferrer" className="pr-9 text-lg">LinkedIn</a>
                <a href="https://github.com/atharv656" target="_blank" rel="noreferrer" className="pr-9 text-lg">GitHub</a>
                <a href={resume} target="_blank" rel="noreferrer" className="pr-9 text-lg">Resume</a>
            </div>
        );
    }
}

export default Contact;