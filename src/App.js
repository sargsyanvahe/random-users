import React from 'react';
import { Switch,Route,Redirect} from "react-router-dom";

import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage";
import EditPage from "./pages/EditPage";

function App() {
    return (
        <div className="App">
            <Header/>
                <Switch>
                <Redirect exact from='/' to="/main"/>
                <Route exact path='/main' component={MainPage}/>
                <Route exact path='/edit' component={EditPage}/>
                </Switch>
        </div>
    );
}

export default App;
