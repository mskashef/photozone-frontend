import React, {useEffect, useState} from 'react';
import * as PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import classes from './SearchPage.module.scss';
import PageBody from "../../containers/PageBody/PageBody";
import Posts from "../../containers/Posts/Posts";
import Page from "../../containers/Page/Page";
import TitledPic from "../../components/TitledPic/TitledPic";
import SearchBox from "../../components/SearchBox/SearchBox";
import TabSelection from "../../components/TabSelection/TabSelection";
import Thumbnail from "../../components/Thumbnail/Thumbnail";
import EmptyThumbnail from "../../components/EmptyThumbnail/EmptyThumbnail";
import store from 'store';
import axios from 'axios';



let emptyThumbnails = [];
for (let i = 0; i < 100; i++) {
    emptyThumbnails.push(i);
}


const SearchPage = props => {
    // const [posts, setPosts] = useState([]);
    useEffect(() => {
        if (props.componentDidMount) props.componentDidMount();
        const activeTab = store.get('activeSelectionTab');
        setActiveTab(activeTab ? activeTab : 'Posts')
    }, []);

    const [val, setVal] = useState("");
    const [activeTab, setActiveTab] = useState("Posts");
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);

    const searchHandler = text => {
        if (text.trim().length === 0) {
            setUsers([]);
            setPosts([]);
            return;
        }
        console.log(activeTab);
        if (activeTab === "Posts") {
            axios.post("/searchInPosts", {}, {withCredentials: true}).then(res => {
                setPosts(res.data);
            });
        } else {
            axios.post("/searchInUsers", {}, {withCredentials: true}).then(res => {
                setUsers(res.data);
            });
        }
    };

    return (
        <Page>
            <SearchBox
                style={{margin: 5, width: 'calc(100% - 10px)'}}
                value={val}
                onChangeText={(val) => {
                    setVal(val);
                    searchHandler(val);
                }}
                placeholder={"Search..."}
            />
            <TabSelection
                tabs={["Posts", "Users"]}
                activeTab={activeTab}
                onTabChange={tab => {
                    setActiveTab(tab);
                    store.set('activeSelectionTab', tab);
                    searchHandler(val);
                }}
            />
            <PageBody>
                {
                    activeTab === "Posts" ? (
                        <div className={classes.postsContainer}>
                            {
                                posts.map(post => (
                                    <Thumbnail
                                        key={JSON.stringify(post)}
                                        src={post.photo}
                                        hoverTitle={post.title}
                                        onClick={() => {
                                            props.history.push(post.path);
                                        }}
                                    />
                                ))
                            }
                            {
                                ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1",].map(post => (
                                    <EmptyThumbnail key={Math.random() + ":" + Math.random()}/>
                                ))
                            }
                        </div>
                    ) : (
                        <div className={classes.usersContainer}>
                            {
                                users.map(user => (
                                    <fragment>
                                        <TitledPic
                                            key={user.username}
                                            title={user.name}
                                            caption={user.username}
                                            img={user.profpic}
                                            userId={user.username}
                                            onClick={() => {props.history.push("/users/" + user.username)}}
                                        />
                                    </fragment>
                                ))
                            }
                        </div>
                    )
                }

            </PageBody>
        </Page>
    );
};

export default withRouter(SearchPage);

SearchPage.propTypes = {
    componentDidMount: PropTypes.func
};
SearchPage.defaultProps = {};
