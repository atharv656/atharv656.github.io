import React from "react";
import FrontPage from "./FrontPage";

class App extends React.Component {
    componentDidMount() {
        document.title = "Atharv Agashe";
    }

    render() {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <FrontPage />
            </div>
        );
    }
}

export default App;
