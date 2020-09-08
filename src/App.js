import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage";
import EditPage from "./pages/EditPage";
import { connect } from "react-redux";
import Modal from "./components/Modal/Modal";

function App({ user }) {
    return (
        <div className="App">
            {user && <Modal user={user}/>}
            <Header/>
            <Switch>
                <Redirect exact from='/' to="/main"/>
                <Route exact path='/main' component={MainPage}/>
                <Route exact path='/edit' component={EditPage}/>
            </Switch>
        </div>
    );
}

const mapStateToProps = state => ({ user: state.users.selectedUser })

export default connect(mapStateToProps)(App);
