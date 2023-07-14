import React, { Component } from "react";
import MenuPage from "./components/MenuPage";
import Skins from "./components/Skins";
import Location from "./components/Location";
import {  Route, BrowserRouter, Switch } from "react-router-dom";
import VoiceLines from "./components/VoiceLines";
class App extends Component {
    render() { 
        return (<React.Fragment>
                
                <Switch>
                    <Route exact path="/" component={MenuPage}>
                    </Route>
                    <Route exact path="/Skins"component={Skins}>
                    </Route>
                    <Route exact path="/VoiceLines"component={VoiceLines}>
                    </Route>
                    <Route exact path="/Location" component={Location}>
                    </Route>
                </Switch>
                
                </React.Fragment>
                
        
        );
    }
}
export default App;
