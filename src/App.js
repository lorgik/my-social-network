import {BrowserRouter, Route, withRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import LoginPage from "./components/Login/Login";
import './App.css';
import React, {Component} from "react";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";
import store from "./redux/redux-store";

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path="/profile/:userId?"
                           render={() => {
                               return (
                                   <React.Suspense fallback={<Preloader />}>
                                       <ProfileContainer />
                                   </React.Suspense>
                               )
                           }}
                    />
                    <Route path='/dialogs'
                           render={() => {
                               return (
                                   <React.Suspense fallback={<Preloader />}>
                                       <DialogsContainer />
                                   </React.Suspense>
                               )
                           }}/>
                    <Route path='/users'
                           render={() => <UsersContainer/>}/>
                    <Route path='/login'
                           render={() => <LoginPage/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const MainApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    )
}

export default MainApp;