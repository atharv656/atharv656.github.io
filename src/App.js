import React from "react";
import FrontPage from "./FrontPage";
import Navbar from "./Navbar";
import AboutMePage from "./AboutMePage";
import PortfolioPage from "./PortfolioPage";
import Contact from "./Contact";

 /**
   * PurgeCSS:
   * text-red-500
   * text-green-500
   * text-yellow-500
   * text-gray-500
   * text-purple-500
   * text-indigo-500
   * text-blue-500
   * text-pink-500
   * bg-teal-50
   * bg-teal-200

   */

class App extends React.Component {
  constructor(props) {
    super(props);

    //Link References
    this.homeRef = React.createRef();
    this.aboutRef = React.createRef();
    this.portfolioRef = React.createRef();
    this.contactRef = React.createRef();

    this.state = {
      random : false,
    };

  }

  scrollToHome = () => this.homeRef.current.scrollIntoView({behavior : 'smooth'});
  scrollToAbout = () => this.aboutRef.current.scrollIntoView({behavior : 'smooth'});
  scrollToPortfolio = () => this.portfolioRef.current.scrollIntoView({behavior : 'smooth'});
  scrollToContact = () => this.contactRef.current.scrollIntoView({behavior : 'smooth', block : 'nearest'});


  listenScrollEvent = () => {
    this.setState({random:true});
  }
  componentDidMount() {
    document.title = "Atharv Agashe"; 
    window.addEventListener('scroll', this.listenScrollEvent);
 }

  render(){

    return (

        <div className="bg-gradient-to-b from-teal-50 to-teal-200 bg-fixed">
          <div ref={this.homeRef} className="snap-start"></div>
          <Navbar handleHome={this.scrollToHome} handleAbout={this.scrollToAbout} handlePortfolio={this.scrollToPortfolio} handleContact={this.scrollToContact}/>

          <div className="">
            <div className="grid grid-rows-10 h-[100vh]">
              <div className="row-span-2"></div>
              <div className="row-span-4">
                <FrontPage />
              </div>
              <div className="row-span-2"></div>
              <div ref={this.aboutRef} className="h-[10vh] row-span-2 tracking-widest"></div>
            </div>
          </div>
          

          <div className="snap-start"></div>
          <AboutMePage />
        

            <div ref={this.portfolioRef}></div>
            <div className="snap-start h-[12vh]"></div>
            <PortfolioPage />


          <Contact reference={this.contactRef} />

      
        </div>

    
    );
  }
}

export default App;
