import React, {useState, Fragment, useEffect} from 'react';
import './App.css';
import classes from './App.module.css';
import {BrowserRouter, Route} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import {withRouter} from "react-router-dom";
import Tags from "./containers/Tags/Tags";
import PostPage from "./pages/PostPage/PostPage";


function App(props) {

    const [activeTab, setActiveTab] = useState("HomeSvgIcon");

    const handlePageChange = (tab) => {
        let url = "";
        switch (tab) {
            case "HomeSvgIcon":
                url = "/";
                break;
            case "SearchSvgIcon":
                url = "/search";
                break;
            case "NewPostSvgIcon":
                url = "/newPost";
                break;
            case "ChatsSvgIcon":
                url = "/chats";
                break;
            case "ProfileSvgIcon":
                url = "/profile";
                break;
        }
        setActiveTab(tab);
        props.history.replace(url);
    };

    return (
        <div className={classes.App}>

            <Route path={'/'} exact render={() => {
                return (
                    <HomePage/>
                )
            }}/>
            <Route path={'/posts/:id'} exact render={() => {
                return (
                    <PostPage />
                )
            }}/>
            {/*['/', '/search', '/chats', '/profile', '/newPost', '/savedPosts']*/}
            <Route path={['/', '/search', '/chats', '/profile', '/newPost', '/savedPosts']} render={() => {
                return (
                    <NavBar activeTab={activeTab} onChangeTab={handlePageChange}/>
                )
            }}/>

        </div>
    );
}

export default withRouter(App);
