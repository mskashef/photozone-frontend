import React, {useState, Fragment, useEffect} from 'react';
import './App.css';
import classes from './App.module.css';
import Thumbnail from "./components/Thumbnail/Thumbnail";
import PageDetails from "./components/PageDetails/PageDetails";
import TabSelection from "./components/TabSelection/TabSelection";
import {TextField} from '@material-ui/core';
import TitleBar from "./components/TitleBar/TitleBar";
import Post from "./containers/Post/Post";
import TitledPic from "./components/TitledPic/TitledPic";
import {BrowserRouter, Route} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Posts from "./containers/Posts/Posts";
import axios from "axios";
import PageBody from "./containers/PageBody/PageBody";
import Page from "./containers/Page/Page";
import HomePage from "./pages/HomePage/HomePage";
import {withRouter} from "react-router-dom";
import Tag from "./components/Tag/Tag";
import Tags from "./containers/Tags/Tags";


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
            <Route path={'/search'} exact render={() => {
                return (
                    <div>
                        <Tags items={["tag1","tag2","tag3","tag4","tag5","tag6"]}/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>
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
