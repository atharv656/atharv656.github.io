import React from "react";
import AboutMeComponent from "./AboutMeComponent";
import Darty from "./assets/DartyLogo.png";
import web3Pic from "./assets/dbLogo.png";
import DevPic from "./assets/devLogo2.png";
import designPic from "./assets/designLogo.png";

class AboutMePage extends React.Component {
    constructor(props) {
        super(props);
        this.studentRef = React.createRef();
        this.web3Ref = React.createRef();
        this.designRef = React.createRef();
        this.devRef = React.createRef();
        
        this.state = {
            studentSelect : false,
            web3Select : false,
            designSelect : false,
            devSelect : false
        };
        this.listenScrollEvent();
    }

    deSelect(){
        this.setState({
            studentSelect : false,
            web3Select : false,
            designSelect : false,
            devSelect : false
            
        });
    }

    listenScrollEvent = e => {
        if(!this.studentRef.current || !this.web3Ref.current || !this.designRef.current || !this.devRef.current) return;
        const student = this.studentRef.current.getBoundingClientRect();
        const web3 = this.web3Ref.current.getBoundingClientRect();
        const design = this.designRef.current.getBoundingClientRect();
        const dev = this.devRef.current.getBoundingClientRect();

        const midScreen = (window.screen.height-window.screen.height/10)/2;
        // ONLY SELECTS OVER midLINE
        this.deSelect();
        if (student.y < midScreen && student.y+student.height > midScreen){
            this.setState({studentSelect : true});
        }
        else if (web3.y < midScreen && web3.y+web3.height > midScreen){
            this.setState({web3Select : true});
        }
        else if (design.y < midScreen && design.y+design.height > midScreen){
            this.setState({designSelect : true});
        }
        else if (dev.y < midScreen && dev.y+dev.height > midScreen){
            this.setState({devSelect : true});
        }

        // SELECTS ALL ABOVE MIDLINE
        // this.deSelect();
        // if (student.y < midScreen && student.y+dev.height > midScreen){
        //     this.setState({studentSelect : true});
        // }
        // if (story.y < midScreen && story.y+dev.height > midScreen){
        //     this.setState({studentSelect : true, storySelect : true});
        // }
        // if (design.y < midScreen && design.y+dev.height > midScreen){
        //     this.setState({studentSelect : true, storySelect : true, designSelect : true});
        // }
        // if (dev.y < midScreen && dev.y+dev.height > midScreen){
        //     this.setState({studentSelect : true, storySelect : true, designSelect : true, devSelect : true});
        // }

      }
    
      componentDidMount() {
        this.interval = setInterval(() => this.listenScrollEvent(), 100);
      }

      componentWillUnmount() {
        clearInterval(this.interval);
      }

    render() {
        const student = "Attending Dartmouth College, Class of 2025. Double majoring in Computer Science and Computational Linguistics.";
        const web3 = "After being introduced to crypto in 2017, I've been fascinated with decentralization and Web3.0 as a whole. Since then I've built bots that scrape smart contracts, written my own smart contracts, and co-founded the Dartmouth Blockchain club.";
        const developer = "I love building websites (ReactJS + TailwindCSS) and hacking together projects (mainly in Java and Python). Check out the featured Arbitrage Bot and other projects on my Github!";
        const designer = "My newest hobby—I love creating with elegant, purposeful design. Take a look at some of my work here.";

        return(
            <div className="sm:pb-20">
                <h1 className="sm:text-5xl text-3xl text-center sm:pb-20 pb-4">About Me</h1>
                <AboutMeComponent title="Student" description={student} src={Darty} reference={this.studentRef} on={this.state.studentSelect} />
                <AboutMeComponent title="Blockchain" description={web3} link="https://dartmouthblockchain.com/" src={web3Pic} right={true} reference={this.web3Ref} on={this.state.web3Select} />
                <AboutMeComponent title="Developer" description={developer} link="https://github.com/atharv656/" src={DevPic} right={false} reference={this.devRef} on={this.state.devSelect} />
                <AboutMeComponent title="Designer" description={designer} link="https://drive.google.com/drive/folders/107kpBDWbcjxrKgA_w1kTApoDT7B0iAJm?usp=sharing" src={designPic} right={true} reference={this.designRef} on={this.state.designSelect} />
            </div>
        );
    }
}

export default AboutMePage;