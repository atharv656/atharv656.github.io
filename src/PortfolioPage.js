import React from "react";
import arbBotPic from "./assets/ArbBotPic.png"
import PortfolioComponent from "./PortfolioComponent";
import lockPic from "./assets/lock2.png";
import legacyPic from "./assets/legacyLogo2.png";

class PortfolioPage extends React.Component {
    constructor(props) {
        super(props);
        this.p1Ref = React.createRef();
        this.p2Ref = React.createRef();
        this.p3Ref = React.createRef();
       
        this.state = {
            p1Select : false,
            p2Select : false,
            p3Select : false,
        };
    }

    deSelect(){
        this.setState({
            p1Select : false,
            p2Select : false,
            p3Select : false,
        });
    }

    listenScrollEvent = e => {
        if(!this.p1Ref.current || !this.p2Ref.current || !this.p3Ref.current) return;

        const p1 = this.p1Ref.current.getBoundingClientRect();
        const p2 = this.p2Ref.current.getBoundingClientRect();
        const p3 = this.p3Ref.current.getBoundingClientRect();

        const midScreen = (window.screen.height-window.screen.height/10)/2;


        // ONLY SELECTS OVER midLINE
        this.deSelect();
        if (p1.y < midScreen && p1.y+p1.height > midScreen){
            this.setState({p1Select : true});
        }
        else if (p2.y < midScreen && p2.y+p2.height > midScreen){
            this.setState({p2Select : true});
        }
        else if (p3.y < midScreen && p3.y+p3.height > midScreen){
            this.setState({p3Select : true});
        }

      }
    
      componentDidMount() {
        this.interval = setInterval(() => this.listenScrollEvent(), 100);
        
      }

      componentWillUnmount() {
        clearInterval(this.interval);
      }

    render(){
        const arbBot = "About a year ago, I started learning about Decentralized Finance (DeFi). Decentralized Exchanges (or DEXs for short) particularly caught my attention because they rely on arbitrageurs to operate. So, I created a bot to find these arbitrage opportunities. This bot scrapes the top 100 DEXs (by Volume) and logs exchange rates to a SQL database. Currently opportunities are spotted manually, but I'm working on automating this process and sending discord notifications when opportunities are found! This bot has resulted in a 327% ROI on a principal of $20,000 from January 2021 to August 2021!";
        const legWeb = "My web development journey started in Winter of 2021 when I tried making my first webpage from scratch. Since then, I've learned ReactJS and TailwindCSS and rebuilt that original website as well as many more websites.";
        const SmartLock = "A security system that uses facial recognition to differentiate between friendly faces and unknown people to identify potential threats and notify users of security threats rapidly. Given around 3-5 images of a person they can be whitelisted, allowing the door to open automatically for trusted individuals. It could also recognize repeat visitors and potential threats (unwanted repeat visitors). This project won the Most Innovative Award at MAHacks IV.";

        return(
            <div>
                <h1 className="sm:text-5xl text-3xl text-center md:pb-10 sm:pb-20 snap-star pb-4">Portfolio</h1>
                <PortfolioComponent title="Arbitrage Bot" description={arbBot} link="https://github.com/atharv656/DeFi_Data_Logger" src={arbBotPic} reference={this.p1Ref} on={this.state.p1Select} />
                <PortfolioComponent title="Legacy Website" description={legWeb} link="https://atharvagashe.github.io" src={legacyPic} right={true} reference={this.p2Ref} on={this.state.p2Select} />
                <PortfolioComponent title="SmartLock" description={SmartLock} link="https://github.com/atharv656/face_recognition_doorbell" src={lockPic} reference={this.p3Ref} on={this.state.p3Select} />
            </div>
        );
    }
}

export default PortfolioPage;