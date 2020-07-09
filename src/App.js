import React, {useState, Fragment, useEffect} from 'react';
import './App.css';
import classes from './App.module.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import {withRouter} from "react-router-dom";
import Tags from "./containers/Tags/Tags";
import PostPage from "./pages/PostPage/PostPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import ChatsPage from "./pages/ChatsPage/ChatsPage";
import store from 'store';
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import NewPostPage from "./pages/NewPostPage/NewPostPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import axios from "axios";

function App(props) {

    const [activeTab, setActiveTab] = useState("HomeSvgIcon");

    axios.interceptors.response.use(res => {
        if (res.data.redirect) {
            props.history.replace(res.data.redirect);
        }
        return res;
    }, err => {
        if (err.response.data.redirect) {
            props.history.replace(err.response.data.redirect);
        }
        if (err.response.data.msg) {
            alert(err.response.data.msg);
        }
        return err;
    });

    useEffect(() => {
        let MainTabSelection = store.get('MainTabSelection');
        console.log(MainTabSelection);
        setActiveTab(MainTabSelection);
    }, []);

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
        store.set('MainTabSelection', tab);
    };

    return (
        <div className={classes.App}>
            <Switch>
                <Route path={'/'} exact render={() => {
                    return (
                        <HomePage componentDidMount={() => {
                            handlePageChange("HomeSvgIcon")
                        }}/>
                    )
                }}/>
                <Route path={'/posts/:id'} exact render={() => {
                    return (
                        <PostPage componentDidMount={() => {
                        }}/>
                    )
                }}/>
                <Route path={'/search'} exact render={() => {
                    return (
                        <SearchPage componentDidMount={() => {
                            handlePageChange("SearchSvgIcon")
                        }}/>
                    )
                }}/>
                <Route path={'/chats'} exact render={() => {
                    return (
                        <ChatsPage componentDidMount={() => {
                            handlePageChange("ChatsSvgIcon")
                        }}/>
                    )
                }}/>
                <Route path={'/newPost'} exact render={() => {
                    return (
                        <NewPostPage componentDidMount={() => {
                            handlePageChange("NewPostSvgIcon")
                        }}/>
                    )
                }}/>
                <Route path={'/profile'} exact render={() => {
                    return (
                        <ProfilePage isMe componentDidMount={() => {
                            handlePageChange("ProfileSvgIcon")
                        }}/>
                    )
                }}/>
                <Route path={'/users/:id'} exact render={() => {
                    return (
                        <ProfilePage componentDidMount={() => {
                        }}/>
                    )
                }}/>
                <Route path={'/auth'} exact render={() => {
                    return (
                        <AuthPage componentDidMount={() => {
                        }}/>
                    )
                }}/>
            </Switch>
            {/*['/', '/search', '/chats', '/profile', '/newPost', '/savedPosts']*/}
            <Route path={['/', '/search', '/chats', '/profile', '/newPost', '/savedPosts']} exact render={() => {
                return (
                    <NavBar activeTab={activeTab} onChangeTab={handlePageChange}/>
                )
            }}/>

        </div>
    );
}

export default withRouter(App);
